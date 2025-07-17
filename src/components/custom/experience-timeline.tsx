"use client"

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Code, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
    id: "1",
    title: "TAP-Associate",
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
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "50px"
      }
    )

    const itemElements = document.querySelectorAll("[data-timeline-item]")
    itemElements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 font-[var(--font-display)]">
            Professional Experience
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            A journey through cutting-edge AI/ML roles, from research breakthroughs to production systems at scale
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full opacity-80" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleItems.has(item.id)
              const IconComponent = item.icon

              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  data-timeline-item
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -100 : 100,
                    scale: 0.8
                  }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    x: 0,
                    scale: 1
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-4/5 ${isLeft ? 'pr-50' : 'pl-50'}`}>
                    <Card className="bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-secondary rounded-lg border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                            <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-foreground mb-1 font-[var(--font-display)] group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                              <span className="font-medium">{item.company}</span>
                              <span>•</span>
                              <span>{item.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                              {item.duration}
                            </Badge>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : {}}
                              transition={{ 
                                duration: 0.5, 
                                delay: 0.4 + (achievementIndex * 0.1)
                              }}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group cursor-pointer">
                      <IconComponent className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="w-5/12" />
                </motion.div>
              )
            })}
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-8"
          >
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}