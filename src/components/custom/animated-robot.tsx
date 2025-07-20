"use client"

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from "react"

interface AnimatedRobotProps {
  scrollPosition: number
  currentSection?: string
}

interface Position {
  x: number
  y: number
}

export default function AnimatedRobot({ scrollPosition, currentSection = "hero" }: AnimatedRobotProps) {
  const [isBlinking, setIsBlinking] = useState(false)
  const [showThinkingDots, setShowThinkingDots] = useState(false)
  const [headTilt, setHeadTilt] = useState(0)
  const [isWaving, setIsWaving] = useState(false)

  const x = useMotionValue(100)
  const y = useMotionValue(100)
  
  const floatY = useTransform(
    useMotionValue(0),
    [0, 1],
    [0, -8]
  )

  const getTargetPosition = (section: string): Position => {
    switch (section) {
      case "hero":
        return { x: window.innerWidth - 150, y: 100 }
      case "projects":
        return { x: 80, y: window.innerHeight * 0.4 }
      case "skills":
        return { x: window.innerWidth - 100, y: window.innerHeight * 0.6 }
      case "contact":
        return { x: window.innerWidth * 0.65, y: window.innerHeight * 0.25 }
      default:
        return { x: window.innerWidth - 150, y: 100 }
    }
  }

  useEffect(() => {
    setIsWaving(true)
    setTimeout(() => setIsWaving(false), 3000)

    const waveInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsWaving(true)
        setTimeout(() => setIsWaving(false), 3000)
      }
    }, 10000)

    return () => clearInterval(waveInterval)
  }, [])

  useEffect(() => {
    const target = getTargetPosition(currentSection)
    
    animate(x, target.x, {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    })
    
    animate(y, target.y, {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    })
  }, [currentSection, x, y])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3500)

    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    const thinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowThinkingDots(true)
        setTimeout(() => setShowThinkingDots(false), 2000)
      }
    }, 8000)

    return () => clearInterval(thinkInterval)
  }, [])

  useEffect(() => {
    const tiltInterval = setInterval(() => {
      const newTilt = (Math.random() - 0.5) * 10
      setHeadTilt(newTilt)
      setTimeout(() => setHeadTilt(0), 1000)
    }, 6000)

    return () => clearInterval(tiltInterval)
  }, [])

  useEffect(() => {
    const controls = animate(floatY, [-8, 8], {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    })

    return controls.stop
  }, [floatY])

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    >
      <motion.div
        style={{ y: floatY }}
        className="relative"
      >
        {showThinkingDots && (
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        )}

        <motion.div
          className="relative"
          animate={{ rotate: headTilt }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-10 h-8 bg-primary rounded-sm border border-primary/30 relative mb-1"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center h-full px-2">
              <motion.div
                className="w-2 h-2 bg-background rounded-full"
                animate={{
                  scaleY: isBlinking ? 0.1 : 1,
                  scaleX: isBlinking ? 0.8 : 1
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="w-2 h-2 bg-background rounded-full"
                animate={{
                  scaleY: isBlinking ? 0.1 : 1,
                  scaleX: isBlinking ? 0.8 : 1
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-2 bg-primary"></div>
              <motion.div
                className="w-1 h-1 bg-primary rounded-full -mt-0.5 ml-0.25"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-8 h-10 bg-primary/80 rounded-sm border border-primary/30 mx-auto relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-4 h-3 bg-background/20 rounded-sm mx-auto mt-2 border border-primary/40"></div>
            
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <div className="flex justify-between absolute top-8 -left-1 -right-1">
            <motion.div
              className="w-1 h-6 bg-primary/70 rounded-full origin-top"
              animate={isWaving ? {
                rotate: [
                  0,
                  20,
                  35,
                  15,
                  40,
                  10,
                  35,
                  5,
                  30,
                  0
                ],
                x: [
                  0,
                  1,
                  3,
                  1,
                  4,
                  1,
                  3,
                  1,
                  2,
                  0
                ],
                transition: {
                  duration: 2.5,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeat: 1,
                  repeatType: "loop"
                }
              } : {
                rotate: [0, 5, 0, -3, 0],
                x: 0,
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            <motion.div
              className="w-1 h-6 bg-primary/70 rounded-full origin-top"
              animate={isWaving ? {
                rotate: [
                  0,
                  -20,
                  -35,
                  -15,
                  -40,
                  -10,
                  -35,
                  -5,
                  -30,
                  0
                ],
                x: [
                  0,
                  -1,
                  -3,
                  -1,
                  -4,
                  -1,
                  -3,
                  -1,
                  -2,
                  0
                ],
                transition: {
                  duration: 2.5,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeat: 1,
                  repeatType: "loop",
                  delay: 0.15
                }
              } : {
                rotate: [0, -10, 0],
                x: 0,
                transition: { duration: 4, repeat: Infinity, delay: 2 }
              }}
            />
          </div>

          <div className="flex justify-center space-x-1 mt-1">
            <motion.div
              className="w-1 h-4 bg-primary/70 rounded-full"
              animate={{ scaleY: [1, 0.9, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-1 h-4 bg-primary/70 rounded-full"
              animate={{ scaleY: [1, 0.9, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-2 bg-background/20 rounded-full blur-sm mt-2"
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}