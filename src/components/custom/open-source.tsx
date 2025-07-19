"use client"

import { motion } from 'framer-motion'
import { GitFork, Star, GitPullRequest } from 'lucide-react'

const contributions = [
  {
    name: 'Keras',
    description: 'Core contributor to Keras core library, developing image processing layers and mathematical operations.',
    role: 'Open Source Developer',
    stats: {
      prs: '5+'
    },
    link: 'https://github.com/keras-team/keras',
    tags: ['Deep Learning', 'Python', 'TensorFlow'],
    highlights: [
      'Implemented RandomGrayscale, RandomHue, and Equalization layers',
      'Added mathematical operations (unravel_index, diagflat, inner)',
      'Developed PSNR API for image quality assessment',
    ]
  },
  {
    name: 'Keras.io Documentation',
    description: 'Contributed comprehensive documentation and tutorials to the official Keras documentation site.',
    role: 'Documentation Contributor',
    stats: {
      prs: '2+'
    },
    link: 'https://github.com/keras-team/keras-io',
    tags: ['Technical Writing', 'Documentation', 'Tutorials'],
    highlights: [
      'Created TensorFlow Decision Forest integration docs',
      'Developed YOLOv8 training implementation tutorial',
    ]
  },
  {
    name: 'KerasCV',
    description: 'Contributed computer vision models and loss functions to the Keras Computer Vision library.',
    role: 'Open Source Developer',
    stats: {
      prs: '10+'
    },
    link: 'https://github.com/keras-team/keras-cv',
    tags: ['Computer Vision', 'Deep Learning', 'Python'],
    highlights: [
      'Implemented CIoU loss function for YOLOv8',
      'Implemented ConvMixer architecture',
      'Contributed to the migration process to Keras 3.',
      'Assisted in migrating models to the functional-subclassing API.',
    ]
  },
  {
    name: 'HuggingFace Transformers',
    description: 'Contributed optimizations for vision transformer implementations, documentation improvements, and enhanced testing coverage.',
    role: 'Contributor',
    stats: {
      prs: '3+'
    },
    link: 'https://github.com/huggingface/transformers',
    tags: ['Transformers', 'NLP', 'PyTorch'],
    highlights: [
      'Implemented comprehensive tokenization tests for LED model architecture',
      'Enhanced type safety by adding PyTorch-specific type hints',
      'Added missing tokenization test coverage for ELECTRA model',
    ]
  },
]

export default function OpenSourceContributions() {
  return (
    <div className="bg-[#0a0a0a] py-24 sm:py-32" id="Open-Source">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-[var(--font-display)] font-semibold tracking-tight text-white sm:text-5xl">
            Open Source
          </h2>
          <div className="mt-2 h-1 w-24 bg-[#00ff88]"></div>
          <p className="mt-6 text-lg/8 text-[#a0a0a0]">
            Actively contributing to the open-source community with a focus on AI/ML tools and libraries.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contributions.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#00ff88]/20 bg-[#1a1a1a]"
            >
              <div className="flex-1 p-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group">
                  <h3 className="text-xl font-semibold text-[#00ff88] group-hover:text-white transition-colors duration-200">
                    {project.name}
                  </h3>
                </a>
                <div className="mt-2 text-sm text-[#808080]">{project.role}</div>
                <p className="mt-4 text-base text-[#a0a0a0]">{project.description}</p>

                {project.highlights && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-[#a0a0a0] flex items-start"
                        >
                          <span className="text-[#00ff88] mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00ff88]/10 text-[#00ff88]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-[#00ff88]/20 px-6 py-4">
                {project.stats.stars && (
                  <div className="flex items-center gap-1 text-[#a0a0a0]">
                    <Star className="h-4 w-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                )}
                {project.stats.forks && (
                  <div className="flex items-center gap-1 text-[#a0a0a0]">
                    <GitFork className="h-4 w-4" />
                    <span>{project.stats.forks}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-[#a0a0a0]">
                  <GitPullRequest className="h-4 w-4" />
                  <span>{project.stats.prs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}