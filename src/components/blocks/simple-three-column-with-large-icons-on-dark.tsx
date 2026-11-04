"use client"

import { useState } from 'react'

const groups = [
  { name: 'Languages', skills: ['Python|python', 'C++|cplusplus', 'TypeScript|typescript', 'JavaScript|javascript', 'SQL'] },
  { name: 'Web & Application Development', skills: ['React.js|react', 'FastAPI|fastapi', 'GraphQL|graphql'] },
  { name: 'ML & Deep Learning', skills: ['PyTorch|pytorch', 'TensorFlow|tensorflow', 'Keras 3|keras', 'JAX|jax', 'Hugging Face Transformers|huggingface', 'NumPy|numpy', 'Pandas|pandas', 'OpenCV|opencv', 'Computer Vision', 'Diffusion Models'] },
  { name: 'LLM Training & Inference', skills: ['vLLM|vllm', 'TensorRT-LLM|nvidia', 'Triton|triton', 'CUDA|nvidia', 'XLA', 'Quantization (INT8/INT4/FP8)', 'LoRA', 'PEFT|huggingface', 'SFT', 'GRPO', 'KV Cache Optimization', 'FlashAttention', 'Model Serving'] },
  { name: 'Agentic AI', skills: ['LangChain|langchain', 'LangGraph|langgraph', 'LlamaIndex|llamaindex', 'CrewAI|crewai', 'OpenAI Agents SDK|openai', 'Retrieval-Augmented Generation (RAG)', 'MCP|modelcontextprotocol'] },
  { name: 'MLOps & Cloud', skills: ['Docker|docker', 'Linux|linux', 'Git|git', 'GitHub Actions|githubactions', 'CI/CD|cicd', 'AWS Lambda|awslambda', 'AWS API Gateway|amazonapigateway', 'AWS S3|amazons3', 'GCP|googlecloud', 'MongoDB|mongodb', 'Neo4j|neo4j', 'Chroma|chroma'] },
]

function Skill({ value }: { value: string }) {
  const [name, logo] = value.split('|')
  const colors: Record<string, string> = { python: '#3776AB', cplusplus: '#00599C', typescript: '#3178C6', javascript: '#F7DF1E', react: '#61DAFB', fastapi: '#009688', graphql: '#E10098', numpy: '#4DABCF', pandas: '#B19CD9', opencv: '#5C3EE8', pytorch: '#EE4C2C', tensorflow: '#FF6F00', keras: '#D00000', huggingface: '#FFD21E', nvidia: '#76B900', langchain: '#65C8B0', langgraph: '#65C8B0', crewai: '#FF5A50', openai: '#74AA9C', modelcontextprotocol: '#F5F5F5', docker: '#2496ED', linux: '#FCC624', git: '#F05032', githubactions: '#2088FF', awslambda: '#FF9900', amazonapigateway: '#FF4F8B', amazons3: '#569A31', googlecloud: '#4285F4', mongodb: '#47A248', neo4j: '#4581C3', chroma: '#FFCC66' }
  const devicons: Record<string, string> = { triton: 'triton', cicd: 'cicd', llamaindex: 'llamaindex', chroma: 'chroma', vllm: 'vllm', jax: 'jax', huggingface: 'huggingface', python: 'python', cplusplus: 'cplusplus', typescript: 'typescript', javascript: 'javascript', react: 'react', fastapi: 'fastapi', graphql: 'graphql', numpy: 'numpy', pandas: 'pandas', opencv: 'opencv', pytorch: 'pytorch', tensorflow: 'tensorflow', keras: 'keras', docker: 'docker', linux: 'linux', git: 'git', githubactions: 'githubactions', googlecloud: 'googlecloud', mongodb: 'mongodb', neo4j: 'neo4j' }
  const [failed, setFailed] = useState(false)
  return (
    <div className="skill-tile flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/5">
      {logo && !devicons[logo] && <span aria-hidden="true" className="h-7 w-7 shrink-0" style={{ backgroundColor: colors[logo] || '#b5c9bc', maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo}.svg)`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />}
      {logo && devicons[logo] && !failed && <img src={logo === 'triton' ? '/images/triton-logo.png' : logo === 'cicd' ? '/images/cicd.png' : logo === 'llamaindex' ? '/images/llamaindex.png' : logo === 'chroma' ? '/images/chroma.png' : logo === 'vllm' ? '/images/vllm.png' : logo === 'jax' ? '/images/jax.png' : logo === 'huggingface' ? '/images/huggingface.png' : logo === 'graphql' ? '/images/graphql.png' : devicons[logo] ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicons[logo]}/${devicons[logo]}-original.svg` : `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${logo}.svg`} alt="" width={28} height={28} className="h-7 w-7 shrink-0 object-contain" loading="lazy" onError={() => setFailed(true)} />}
      <span className="whitespace-nowrap text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}

export default function SimpleThreeColumnWithLargeIconsOnDark() {
  const [paused, setPaused] = useState(false)
  return (
    <section className="overflow-hidden bg-background py-20">
      <div className="mx-auto mb-12 flex max-w-6xl flex-wrap items-start justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Skills &amp; Tech</h2>
          <p className="mt-5 text-base text-muted-foreground">The tools behind the work.</p>
        </div>
        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{paused ? 'Resume motion' : 'Pause motion'}</button>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="space-y-5 overflow-hidden rounded-3xl border border-border bg-card/30 py-6">
        {groups.map((group, index) => (
          <div key={group.name}>
            <h3 className="mx-auto mb-3 max-w-6xl px-4 text-xs font-medium uppercase tracking-widest text-primary sm:px-6 lg:px-8">{group.name}</h3>
            <div className="skill-ribbon overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
              <div className={`skill-track flex w-max ${index % 2 ? 'skill-reverse' : ''}`} style={{ animationDuration: `${group.skills.length * Math.max(1, Math.ceil(16 / group.skills.length)) * 6}s`, animationPlayState: paused ? 'paused' : 'running' }}>
                {[0, 1].map(copy => (
                  <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1 ? true : undefined}>
                    {Array.from({ length: Math.max(1, Math.ceil(16 / group.skills.length)) }, (_, repeat) => group.skills.map(skill => <Skill key={`${repeat}-${skill}`} value={skill} />))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <style jsx>{`
        .skill-track { animation: skills-scroll linear infinite; }
        .skill-reverse { animation-direction: reverse; }
        .skill-ribbon:hover .skill-track { animation-play-state: paused !important; }
        @keyframes skills-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          .skill-track { animation: none; width: auto; }
          .skill-track > div:first-child { flex-wrap: wrap; justify-content: center; padding: 0 20px; }
          .skill-track > div[aria-hidden] { display: none; }
          .skill-ribbon { mask-image: none !important; }
        }
      `}</style>
    </section>
  )
}













