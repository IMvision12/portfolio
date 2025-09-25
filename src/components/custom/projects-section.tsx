"use client"

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, BarChart3, Zap, Activity, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Keras Vision Models",
    description: "Keras Vision Models Library (KVMM), a comprehensive library of vision models with pre-trained weights entirely in Keras 3. KVMM supports a wide range of computer vision tasks including segmentation, classification, and vision-language modeling.",
    image: "/images/keras.jpg",
    tags: ["Keras3", "Timm", "Transfromers"],
    github: "https://github.com/IMvision12/keras-vision-models",
  },
  {
    title: "Chat with PDFs using LLMs",
    description: "A AI agent built using LlamaIndex that leverages RAG (Retrieval-Augmented Generation) architecture along with Llama-2 and sentence transformers to create an efficient search and summarization tool for PDF documents. This tool allows users to query information from PDF files using natural language and obtain relevant answers or summaries.",
    image: "/images/chat-pdf.png",
    tags: ["Transformers", "Langchain", "Llama-Index"],
    github: "https://github.com/IMvision12/RAG-LlamaIndex",
  },
  {
    title: "Image Super Resolution Using EDSR and SRGAN",
    description: "Implementation of EDSR and SRGAN reseach papers for image super-resolution tasks. This project demonstrates how to enhance the resolution of images using deep learning techniques, providing a practical application of convolutional neural networks in computer vision.",
    image: "/images/sr.png",
    tags: ["Tensorflow", "Keras"],
    github: "https://github.com/IMvision12/Image-Super-Resolution",
  },
  {
    title: "YOLOv5 & YOLOv8 Implementation in Keras 3",
    description: "A complete from-scratch implementation of YOLOv5 and YOLOv8 object detection models in Keras 3, including utilities for converting pretrained PyTorch weights for seamless usage in Keras.",
    image: "/images/bird.png",
    tags: ["Keras", "ultralytics", "numpy"],
    github: "https://github.com/IMvision12/yolo-keras",
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: "easeOut"
    }
  })
}

export default function ProjectsSection() {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-display)] mb-4">
            Featured Projects
          </h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="bg-card border-border overflow-hidden group hover:bg-card/80 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center min-h-[200px]">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-contain max-h-[300px]"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.className = 'w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center';
                          target.parentElement?.appendChild(fallbackDiv);
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                        {index === 0 && <BarChart3 className="w-8 h-8 text-primary" />}
                        {index === 1 && <Zap className="w-8 h-8 text-primary" />}
                        {index === 2 && <Activity className="w-8 h-8 text-primary" />}
                        {index === 3 && <TrendingUp className="w-8 h-8 text-primary" />}
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground font-[var(--font-display)] mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-secondary-foreground mb-3 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/50 text-secondary-foreground border-border hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 h-8 text-xs border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1.5" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      asChild
                    >
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="https://github.com/IMvision12" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}