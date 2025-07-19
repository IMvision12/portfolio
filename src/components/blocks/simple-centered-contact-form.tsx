"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

interface FormData {
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

export function SimpleCenteredContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gitesh-ch/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/IMvision12",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:gitesh.ch.0912@gmail.com",
      label: "Email",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '' }); // Reset form
        console.log('Email sent successfully:', data);
      } else {
        setSubmitStatus('error');
        console.error('Failed to send email:', data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[700px]">
          {/* Form Section */}
          <div className="flex-1 max-w-[600px]">
            <div className="bg-card px-4 md:px-10 py-8 rounded-3xl border border-border">
              <div>
                <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-foreground font-[var(--font-display)]">
                  Let's Build Something Intelligent Together
                </h1>
                <p className="mt-4 text-secondary-foreground text-sm max-w-sm">
                  Ready to harness the power of AI/ML for your next project? Let's discuss how we can bring your ideas to life.
                </p>
              </div>

              <div className="py-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-vertical"
                        placeholder="Tell me about your project and how AI/ML can help..."
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-3 rounded-md bg-green-50 border border-green-200">
                      <p className="text-green-800 text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm">❌ Failed to send message. Please try again or contact me directly.</p>
                    </div>
                  )}

                  <div>
                    <button 
                      type="submit"
                      disabled={isSubmitting || !formData.email.trim() || !formData.message.trim()}
                      className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground text-sm font-medium transition-all duration-200 rounded-md px-4 py-2.5 flex items-center justify-center w-full transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="w-64 self-start mt-16 md:mt-32">
            <div className="bg-card px-6 py-8 rounded-3xl border border-border">
              <h3 className="text-lg font-semibold mb-6 text-foreground">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-secondary-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}