"use client"

import { motion } from 'framer-motion'
import { Code, Zap } from 'lucide-react'

interface ExperienceItem {
  id: string
  title: string
  company: string
  duration: string
  achievements: string[]
  icon: React.ComponentType<{ className?: string }>
  location: string
}

const experienceData: ExperienceItem[] = [
  {
    id: "afterquery",
    title: "AI Software Engineer (Contract)",
    company: "AfterQuery Experts",
    duration: "September 2026 - Present",
    location: "Remote",
    icon: Code,
    achievements: [
      "Benchmarked Muon optimizer kernels on NVIDIA H100 GPUs, achieving 3.85-4.17x speedup and 74-76% lower latency while validating BF16 Newton-Schulz accuracy against correctness oracles.",
      "Created PyTorch, CUDA, and Triton MoE dispatch/combine tests covering top-k routing, expert capacity, token packing, and FP32 accumulation, with reference-output checks and calibrated speedup scoring.",
      "Stress-tested multi-query attention during decoding, identifying causal masking and ragged KV-cache memory-safety edge cases with compute-sanitizer checks.",
      "Authored and reviewed AI coding-agent tasks for Projects Corgi and Gold, assessing algorithmic efficiency, API compatibility, concurrency safety, and regression coverage; ranked among Project Corgi's top 40 contributors.",
    ]
  },
  {
    id: "1",
    title: "Technology Analyst - SDE",
    company: "Fiserv",
    duration: "July 2023 - August 2024",
    location: "Chennai, India",
    icon: Zap,
    achievements: [
      "Developed new app features and implemented Disaster Recovery using React.js, GraphQL, AWS, and GIT.",
      "Addressed security findings, collaborated with the AppSec team, and utilized BurpSuite for data tampering prevention.",
      "Gained expertise in AWS AppSync, Cognito, and authentication libraries, enhancing application security.",
      "Developed a security mechanism to protect the application against data tampering.",
      "Performed production deployments, ensuring smooth and secure application operation.",
    ]
  },
  {
    id: "2",
    title: "Deep Learning Intern",
    company: "Braynix AI",
    duration: "September 2021 - December 2021",
    location: "Remote, India",
    icon: Code,
    achievements: [
      "Worked on medical imaging projects focused on abnormality detection and image segmentation.",
      "Conducted research and implemented findings from multiple sources and research papers using TensorFlow.",
      "Designed and developed deep learning algorithms for medical imaging applications.",
      "Implemented UNET and UNET with EfficientNetB4 encoder for the segmentation of X-ray images.",
      "Applied object detection algorithms like SSD, YOLOv5, and RetinaNet for detecting abnormalities, and used DCGANs to generate additional training data."
    ]
  },
]

export default function ExperienceTimeline() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Experience</h2>
        <p className="mt-5 text-base text-muted-foreground">From GPU kernels to production software.</p>

        <div className="mt-12 sm:mt-16">
          {experienceData.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              className="grid gap-5 border-b border-border py-8 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12 md:py-10"
            >
              <div>
                <h3 className="text-base font-medium text-primary">{item.company}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.duration}</p>
                <p className="text-sm leading-6 text-muted-foreground">{item.location}</p>
              </div>
              <div>
                <h4 className="font-[var(--font-display)] text-xl font-medium text-foreground sm:text-2xl">{item.title}</h4>
                <ul className="mt-5 space-y-3">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
