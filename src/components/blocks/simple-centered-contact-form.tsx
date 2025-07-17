"use client";
import Link from "next/link";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

export function SimpleCenteredContactForm() {
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
      href: "#",
      label: "Email",
    },
  ];

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
  };

  return (
    <div className="bg-background w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        {/* Changed max-w-[1600px] to max-w-[1000px] */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-[700px]">
          {/* Form Section - Added max-w-[600px] */}
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
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tell me about your project and how AI/ML can help..."
                      />
                    </div>
                  </div>

                  <div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-all duration-200 rounded-md px-4 py-2.5 flex items-center justify-center w-full transform hover:scale-[1.02] active:scale-[0.98]">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Social Links Section - Separate Box */}
          <div className="w-64 self-start mt-16 md:mt-32">
            <div className="bg-card px-6 py-8 rounded-3xl border border-border">
              <h3 className="text-lg font-semibold mb-6 text-foreground">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 text-secondary-foreground hover:text-primary transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
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