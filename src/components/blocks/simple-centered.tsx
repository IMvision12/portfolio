"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Download } from 'lucide-react'
import { PythonCodeBox } from '@/components/custom/python-code-box'

const navigation = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Open-Source', href: '#Open-Source' },
  { name: 'Contact', href: '#contact' },
]

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-12 h-12 border border-[#00ff88]/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-[#00ff88]/10 rotate-45 animate-float-medium"></div>
        <div className="absolute top-60 left-1/4 w-16 h-16 border border-[#00ff88]/15" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 border border-[#00ff88]/20 rotate-12" style={{clipPath: 'polygon(30% 0%, 0% 50%, 30% 100%, 100% 100%, 70% 50%, 100% 0%)'}}></div>
        <div className="absolute bottom-20 left-16 w-14 h-14 border border-[#00ff88]/10 rounded-full animate-float-fast"></div>
        
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
        <div className="absolute top-52 left-1/2 w-1 h-1 bg-[#00ff88]/70 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-[#00ff88]/80 rounded-full animate-pulse delay-700"></div>
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#00ff88" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite"/>
          </line>
          <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="#00ff88" strokeWidth="1" opacity="0.2">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite"/>
          </line>
          <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="#00ff88" strokeWidth="1" opacity="0.25">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite"/>
          </line>
        </svg>
      </div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AI/ML Portfolio</span>
              <div className="w-8 h-8 bg-[#00ff88] rounded-lg flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-sm">AI</span>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm/6 font-semibold text-[#00ff88] hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1a1a1a] p-6 sm:max-w-sm sm:ring-1 sm:ring-[#404040]">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AI/ML Portfolio</span>
                <div className="w-8 h-8 bg-[#00ff88] rounded-lg flex items-center justify-center">
                  <span className="text-[#0a0a0a] font-bold text-sm">AI</span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#404040]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#00ff88] hover:bg-[#00ff88]/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-[#a0a0a0] ring-1 ring-[#00ff88]/20 hover:ring-[#00ff88]/40 transition-colors duration-200">
              Latest research in AI/ML.{' '}
              <a href="https://huggingface.co/papers" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#00ff88]">
                <span aria-hidden="true" className="absolute inset-0" />
                Read paper <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="space-y-8">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                  <span className="text-[#00ff88] text-3xl font-medium">Hello there</span>
                  <span className="text-2xl animate-wave">👋</span>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white">
                    <span className="bg-gradient-to-r from-white to-[#a0a0a0] bg-clip-text text-transparent">
                      I'm Gitesh
                    </span>
                  </h1>
                </div>
                
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
                    AI/ML Engineer
                  </span>
                  <br />
                  <span className="text-[#00ff88]/80 text-2xl sm:text-4xl">& Researcher</span>
                </h2>
                
                <h3 className="text-xl sm:text-2xl font-medium text-[#a0a0a0] leading-relaxed">
                  Building intelligent systems that{' '}
                  <span className="text-[#00ff88]">understand</span>,{' '}
                  <span className="text-[#00ff88]">learn</span>, and{' '}
                  <span className="text-[#00ff88]">adapt</span>
                </h3>
                
                <p className="text-lg text-[#808080] leading-relaxed max-w-2xl">
                  Specialized in deep learning, computer vision, and natural language processing. 
                  I design and implement cutting-edge AI solutions that push the boundaries of what's possible 
                  with machine intelligence.
                </p>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-x-6">
                <a
                  href="https://github.com/IMvision12"
                  target="_blank" rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg bg-[#00ff88] px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-lg hover:shadow-[#00ff88]/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">View GitHub</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="/resume.pdf" 
                  download="resume.pdf"
                  className="group inline-flex items-center gap-2 rounded-lg border-2 border-[#00ff88]/50 px-6 py-3 text-sm font-semibold text-[#00ff88] hover:border-[#00ff88] hover:bg-[#00ff88]/5 transition-all duration-300"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PythonCodeBox />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(270deg); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}