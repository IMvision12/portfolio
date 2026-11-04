"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { title: 'LaMoE', focus: 'Hybrid language model', stack: 'PyTorch · MoE · SFT', description: 'A 247.65M-parameter language model pretrained on 25.5B tokens, combining MLA, Gated DeltaNet, and mixture-of-experts.', github: 'https://github.com/IMvision12/LaMoE', color: '#00dda4', label: '247.65M', detail: 'PARAMETERS', nodes: ['MLA', 'GDN', 'MoE'] },
  { title: 'ZeroModels', focus: 'Model ecosystem', stack: 'Keras 3 · JAX · PyTorch', description: 'Pretrained models across vision, language, depth, and speech, built for the Keras 3 multi-backend ecosystem.', github: 'https://github.com/IMvision12/ZeroModels', color: '#44cfbe', label: 'ZeroModels', detail: 'ONE ECOSYSTEM · MULTIPLE BACKENDS', nodes: ['JAX', 'Torch', 'TF'] },
  { title: 'txtcode', focus: 'Coding agent tooling', stack: 'TypeScript · CLI · Agents', description: 'Text AI coding agents through WhatsApp or Telegram and turn your messages into code running on your machine.', github: 'https://github.com/IMvision12/txtcode', color: '#ab8aff', label: '</> txtcode', detail: 'MESSAGE → AGENT → CODE', nodes: ['Text', 'Agent', 'Code'] },
  { title: 'InferML', focus: 'Local inference', stack: 'Electron · React · Transformers', description: 'Browse, download, and run Hugging Face models locally through a desktop interface and Python sidecar.', github: 'https://github.com/IMvision12/InferML', color: '#56baff', label: 'Local first.', detail: 'MODELS ON YOUR MACHINE', nodes: ['Hub', 'Local', 'Run'] },
  { title: 'Trinix', focus: 'GPU acceleration', stack: 'Triton · PyTorch', description: 'Triton-accelerated PyTorch layers with automatic fallback across Flash Attention, Triton kernels, and PyTorch backends.', github: 'https://github.com/IMvision12/trinix', color: '#818aff', label: 'Accelerate.', detail: 'GPU KERNELS · SMART FALLBACKS', nodes: ['Torch', 'Triton', 'GPU'] },
]

export default function ProjectsSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Projects</h2>
        <p className="mt-5 text-base text-muted-foreground">Engineering and research, in one place</p>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
              <div className="project-scene relative flex aspect-[16/10] flex-col items-center justify-center overflow-hidden border-b border-border" style={{ '--scene-color': project.color } as React.CSSProperties} aria-hidden="true">
                <div className="scene-grid absolute inset-0" />
                <div className="scene-glow absolute inset-0" />
                <span className="relative mb-3 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white">{project.label}</span>
                <span className="relative text-[9px] tracking-[0.18em] text-white/60">{project.detail}</span>
                <div className="relative mt-7 flex items-center gap-2">
                  {project.nodes.map((node, i) => <div key={node} className="flex items-center gap-2">{i > 0 && <span className="h-px w-3 bg-white/30" />}<span className="scene-node rounded border px-3 py-2 text-[10px] text-white/90">{node}</span></div>)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] uppercase tracking-widest text-primary">{project.focus}</p>
                <h3 className="mt-2 font-[var(--font-display)] text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">{project.stack}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`} className="mt-4 inline-flex min-h-11 items-center justify-between border-t border-border pt-3 text-xs text-foreground transition-colors hover:text-primary">View code <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project-scene { background: #091512; }
        .scene-grid { background-image: linear-gradient(#ffffff09 1px, transparent 1px), linear-gradient(90deg, #ffffff09 1px, transparent 1px); background-size: 28px 28px; transform: perspective(400px) rotateX(45deg) scale(1.5); transform-origin: center bottom; }
        .scene-glow { background: radial-gradient(ellipse at 50% 80%, color-mix(in srgb, var(--scene-color) 28%, transparent), transparent 75%); }
        .scene-node { border-color: color-mix(in srgb, var(--scene-color) 45%, transparent); background: color-mix(in srgb, var(--scene-color) 12%, #091512); box-shadow: 0 6px 22px color-mix(in srgb, var(--scene-color) 12%, transparent); }
      `}</style>
    </section>
  )
}
