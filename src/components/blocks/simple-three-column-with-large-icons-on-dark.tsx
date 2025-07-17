"use client"

import { Brain, BarChart3, Bot } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Machine Learning & Deep Learning',
    description:
      'Advanced expertise in ML algorithms and neural network architectures. Specialized in computer vision, NLP, LLMs, attention mechanisms, and transformer models.',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Transformers', 'Object Detection', 'Image Segmentation'],
    experience: '3+ years',
    achievement: 'KVMM: Keras Vision Models library',
    icon: Brain,
    progress: 88,
  },
  {
    name: 'Agentic AI',
    description:
      'Building intelligent AI agents and conversational systems. Expert in RAG architectures, LLM integration, and document processing with advanced NLP capabilities.',
    skills: ['LangChain', 'HuggingFace', 'Groq', 'LlamaIndex', 'RAG'],
    experience: '2+ years',
    achievement: 'Chat with PDFs using LLMs',
    icon: Bot,
    progress: 75,
  },
  {
    name: 'Full-Stack Development',
    description:
      'End-to-end web application development with modern frameworks. Expert in building scalable applications with cloud infrastructure and security best practices.',
    skills: ['React.js', 'JavaScript', 'Typescript', 'AWS', 'GraphQL'],
    experience: '1 year',
    achievement: 'Production deployments at Fiserv',
    icon: BarChart3,
    progress: 80,
  },
]

export default function SimpleThreeColumnWithLargeIconsOnDark() {
  return (
    <div style={{ backgroundColor: '#0a0a0a' }} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-[var(--font-display)] font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Core Expertise
            </h2>
            <div className="mt-2 h-1 w-24" style={{ backgroundColor: '#00ff88' }}></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg/8"
            style={{ color: '#a0a0a0' }}
          >
            Comprehensive AI/ML expertise spanning from traditional machine learning to cutting-edge deep learning architectures and scalable data science solutions.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col"
              >
                <dt className="text-base/7 font-semibold text-white font-[var(--font-display)]">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg" style={{ backgroundColor: '#00ff88' }}>
                    <feature.icon aria-hidden="true" className="size-7 text-black" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7" style={{ color: '#a0a0a0' }}>
                  <p className="flex-auto">{feature.description}</p>
                  
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-sm font-medium text-white">Experience: {feature.experience}</p>
                      <p className="text-sm" style={{ color: '#00ff88' }}>{feature.achievement}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Proficiency</span>
                        <span style={{ color: '#00ff88' }}>{feature.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${feature.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + 0.2 * index, ease: "easeOut" }}
                          className="h-2 rounded-full"
                          style={{ backgroundColor: '#00ff88' }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-md border"
                          style={{ 
                            backgroundColor: '#1a1a1a',
                            borderColor: '#00ff88',
                            color: '#00ff88'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}