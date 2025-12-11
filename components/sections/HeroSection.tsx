"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// Floating geometric shapes data
const floatingShapes = [
  { type: "square", size: 60, x: "10%", y: "20%", delay: 0 },
  { type: "circle", size: 40, x: "85%", y: "15%", delay: 0.2 },
  { type: "triangle", size: 50, x: "75%", y: "70%", delay: 0.4 },
  { type: "square", size: 30, x: "20%", y: "75%", delay: 0.6 },
  { type: "circle", size: 25, x: "60%", y: "30%", delay: 0.8 },
  { type: "code", size: 45, x: "90%", y: "50%", delay: 1 },
  { type: "diamond", size: 35, x: "5%", y: "50%", delay: 1.2 },
]

// Code snippet floating element
const codeSnippet = `const build = () => {
  return <Excellence />;
};`

function FloatingShape({
  type,
  size,
  x,
  y,
  delay,
  mouseX,
  mouseY,
}: {
  type: string
  size: number
  x: string
  y: string
  delay: number
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  const offsetX = useTransform(mouseX, [0, 1], [-15, 15])
  const offsetY = useTransform(mouseY, [0, 1], [-15, 15])

  const springX = useSpring(offsetX, { damping: 30, stiffness: 100 })
  const springY = useSpring(offsetY, { damping: 30, stiffness: 100 })

  const baseClasses = cn(
    "absolute opacity-20 hover:opacity-40 transition-opacity duration-500",
    "border border-neon/30"
  )

  const renderShape = () => {
    switch (type) {
      case "square":
        return (
          <div
            className={cn(baseClasses, "rounded-lg bg-neon/5")}
            style={{ width: size, height: size }}
          />
        )
      case "circle":
        return (
          <div
            className={cn(baseClasses, "rounded-full bg-mid-green/10")}
            style={{ width: size, height: size }}
          />
        )
      case "triangle":
        return (
          <div
            className="opacity-20"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(0, 255, 114, 0.15)`,
            }}
          />
        )
      case "diamond":
        return (
          <div
            className={cn(baseClasses, "bg-neon/5 rotate-45")}
            style={{ width: size, height: size }}
          />
        )
      case "code":
        return (
          <div className="font-mono text-xs text-neon/30 whitespace-pre bg-deep-navy/50 p-3 rounded-lg border border-mid-green/20">
            {codeSnippet}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: type === "diamond" ? [45, 90, 45] : [0, 5, -5, 0],
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.8 },
        scale: { delay, duration: 0.8, type: "spring" },
        rotate: {
          delay: delay + 1,
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          delay: delay + 1,
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {renderShape()}
    </motion.div>
  )
}

// Typing effect hook
function useTypingEffect(
  text: string,
  speed: number = 50,
  delay: number = 1000
) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const startTyping = () => {
      let index = 0
      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeout = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }
      type()
    }

    timeout = setTimeout(startTyping, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayedText, isComplete }
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const { displayedText, isComplete } = useTypingEffect(
    "Kami bikin website cepat, desain yang user-friendly, dan harga terjangkau.",
    40,
    1500
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-26"
    >
      {/* Floating shapes with parallax */}
      {floatingShapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mid-green/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-mid-green/30 bg-deep-navy/50 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-neon" />
          <span className="text-sm text-gray-300 font-medium">
            Web Development & UI/UX untuk Bisnis Kreatif
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6"
        >
          Wujudkan Ide{" "}
          <span className="relative">
            <span className="text-neon">Digital</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-neon rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ originX: 0 }}
            />
          </span>
          <br />
          Kamu Jadi Nyata.
        </motion.h1>

        {/* Sub-headline with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-10"
        >
          <p
            className={cn(
              "font-mono text-base sm:text-lg md:text-xl text-gray-400",
              !isComplete && "typing-cursor"
            )}
          >
            <Code2 className="inline-block w-5 h-5 mr-2 text-neon" />
            {displayedText}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        {/* CTA Buttons - UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20bikin%20website"
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 114, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "group flex items-center gap-2 px-8 py-4 rounded-xl",
              "bg-neon text-deep-green font-semibold text-lg",
              "shadow-lg shadow-neon/25 transition-all duration-300"
            )}
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-2 px-8 py-4 rounded-xl",
              "border border-mid-green/50 text-white font-semibold text-lg",
              "bg-deep-navy/30 backdrop-blur-sm",
              "hover:border-neon/50 hover:bg-deep-navy/50 transition-all duration-300"
            )}
          >
            Lihat Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
