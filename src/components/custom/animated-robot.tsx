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
  
  // Gentle floating animation
  const floatY = useTransform(
    useMotionValue(0),
    [0, 1],
    [0, -8]
  )

  // Get target position based on current section
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
    // Wave when component mounts
    setIsWaving(true)
    setTimeout(() => setIsWaving(false), 3000)

    // Continue with random waves
    const waveInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsWaving(true)
        setTimeout(() => setIsWaving(false), 3000)
      }
    }, 10000)

    return () => clearInterval(waveInterval)
  }, [])

  // Move robot based on current section
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

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3500)

    return () => clearInterval(blinkInterval)
  }, [])

  // Thinking animation (occasional)
  useEffect(() => {
    const thinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowThinkingDots(true)
        setTimeout(() => setShowThinkingDots(false), 2000)
      }
    }, 8000)

    return () => clearInterval(thinkInterval)
  }, [])

  // Head tilt animation
  useEffect(() => {
    const tiltInterval = setInterval(() => {
      const newTilt = (Math.random() - 0.5) * 10
      setHeadTilt(newTilt)
      setTimeout(() => setHeadTilt(0), 1000)
    }, 6000)

    return () => clearInterval(tiltInterval)
  }, [])

  // Continuous floating animation
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
        {/* Thinking dots */}
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

        {/* Robot body */}
        <motion.div
          className="relative"
          animate={{ rotate: headTilt }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Head */}
          <motion.div
            className="w-10 h-8 bg-primary rounded-sm border border-primary/30 relative mb-1"
            whileHover={{ scale: 1.05 }}
          >
            {/* Eyes */}
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

            {/* Antenna */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0.5 h-2 bg-primary"></div>
              <motion.div
                className="w-1 h-1 bg-primary rounded-full -mt-0.5 ml-0.25"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            className="w-8 h-10 bg-primary/80 rounded-sm border border-primary/30 mx-auto relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Chest panel */}
            <div className="w-4 h-3 bg-background/20 rounded-sm mx-auto mt-2 border border-primary/40"></div>
            
            {/* Status indicator */}
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Arms */}
          <div className="flex justify-between absolute top-8 -left-1 -right-1">
            {/* Left arm (waving arm) */}
            <motion.div
              className="w-1 h-6 bg-primary/70 rounded-full origin-top"
              animate={isWaving ? {
                // Realistic waving motion with natural timing
                rotate: [
                  0,    // Start position
                  20,   // Lift up
                  35,   // Peak right
                  15,   // Back center-left
                  40,   // Peak right again
                  10,   // Center-left
                  35,   // Right
                  5,    // Center-left
                  30,   // Right
                  0     // Back to rest
                ],
                x: [
                  0,    // Start
                  1,    // Slight out
                  3,    // More out
                  1,    // Back in
                  4,    // Out
                  1,    // In
                  3,    // Out
                  1,    // In
                  2,    // Slight out
                  0     // Back to start
                ],
                transition: {
                  duration: 2.5,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                  ease: [0.25, 0.46, 0.45, 0.94], // More natural easing
                  repeat: 1, // Wave twice total
                  repeatType: "loop"
                }
              } : {
                // Subtle idle animation
                rotate: [0, 5, 0, -3, 0],
                x: 0, // Ensure x returns to 0 when not waving
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Right arm (also waving) */}
            <motion.div
              className="w-1 h-6 bg-primary/70 rounded-full origin-top"
              animate={isWaving ? {
                // Mirror waving motion with slight delay for natural feel
                rotate: [
                  0,    // Start position
                  -20,  // Lift up (opposite direction)
                  -35,  // Peak left
                  -15,  // Back center-right
                  -40,  // Peak left again
                  -10,  // Center-right
                  -35,  // Left
                  -5,   // Center-right
                  -30,  // Left
                  0     // Back to rest
                ],
                x: [
                  0,    // Start
                  -1,   // Slight out (opposite direction)
                  -3,   // More out
                  -1,   // Back in
                  -4,   // Out
                  -1,   // In
                  -3,   // Out
                  -1,   // In
                  -2,   // Slight out
                  0     // Back to start
                ],
                transition: {
                  duration: 2.5,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeat: 1,
                  repeatType: "loop",
                  delay: 0.15 // Slight delay for more natural dual-hand waving
                }
              } : {
                // Normal idle animation
                rotate: [0, -10, 0],
                x: 0, // Ensure x returns to 0 when not waving
                transition: { duration: 4, repeat: Infinity, delay: 2 }
              }}
            />
          </div>

          {/* Legs */}
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

        {/* Subtle shadow */}
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-2 bg-background/20 rounded-full blur-sm mt-2"
          animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}