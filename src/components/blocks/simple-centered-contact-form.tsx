"use client";
import { Github, Linkedin, Mail, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

export function SimpleCenteredContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gitesh-ch/",
      label: "LinkedIn",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: Github,
      href: "https://github.com/IMvision12",
      label: "GitHub",
      bgColor: "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
    },
    {
      icon: Mail,
      href: "mailto:gitesh.ch.0912@gmail.com",
      label: "Email",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="bg-background w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/3 rounded-full blur-xl animate-ping"></div>
      </div>

      <div 
        className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out opacity-30"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: focusedField ? 'scale(2)' : 'scale(1)'
        }}
      ></div>

      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[900px]">
          <div className="flex-1 max-w-[600px]">
            <div className="bg-card px-4 md:px-10 py-8 rounded-3xl border border-border shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary animate-spin" />
                  <h1 className="text-3xl md:text-4xl font-bold leading-9 tracking-tight text-foreground font-[var(--font-display)]">
                    Let's Create Magic
                  </h1>
                  <Zap className="w-6 h-6 text-accent animate-bounce" />
                </div>
                <p className="mt-4 text-secondary-foreground text-sm max-w-sm leading-relaxed">
                  Ready to transform your vision into reality? Let's harness the power of AI/ML and build something extraordinary together.
                </p>
              </div>

              <div className="py-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 hover:bg-muted/50"
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 hover:bg-muted/50"
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-vertical transition-all duration-300 hover:bg-muted/50"
                        placeholder="Tell me about your project and how AI/ML can transform your vision..."
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-pulse">
                      <p className="text-green-800 dark:text-green-300 text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        ✅ Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 animate-pulse">
                      <p className="text-red-800 dark:text-red-300 text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        ❌ Failed to send message. Please try again or contact me directly.
                      </p>
                    </div>
                  )}

                  <div>
                    <button 
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground text-sm font-medium transition-all duration-200 rounded-md px-6 py-3 flex items-center justify-center w-full transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 shadow-lg hover:shadow-primary/25"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Magic...
                        </>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Send Message</span>
                          <Sparkles className="w-4 h-4 hover:animate-spin transition-transform duration-300" />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full md:w-64 self-start mt-0 md:mt-16">
            <div className="bg-card px-6 py-8 rounded-3xl border border-border shadow-2xl">
              <h3 className="text-xl font-semibold mb-6 text-foreground text-center">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-3 ${social.bgColor} text-white p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl group`}
                  >
                    <social.icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}