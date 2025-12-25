"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function HeartParticle({ delay, endX, endY, rotation, size }) {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: 0, top: 0 }}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1, 0.8],
                x: endX,
                y: endY,
                rotate: rotation,
            }}
            transition={{
                duration: 2,
                delay: delay,
                ease: "easeOut",
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary drop-shadow-[0_0_8px_rgba(255,105,180,0.6)]"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </motion.div>
    )
}

export default function ButterflyBurst({ children, onClick, className }) {
    const [particles, setParticles] = useState([])
    const [isAnimating, setIsAnimating] = useState(false)

    const handleClick = (e) => {
        if (isAnimating) return
        
        setIsAnimating(true)
        const count = 20
        const newParticles = Array.from({ length: count }).map((_, i) => {
            const angle = (i / count) * 360 + Math.random() * 45
            const distance = 80 + Math.random() * 120
            return {
                id: Date.now() + i,
                delay: Math.random() * 0.2,
                endX: Math.cos(angle * Math.PI / 180) * distance,
                endY: Math.sin(angle * Math.PI / 180) * distance - 40,
                rotation: Math.random() * 360,
                size: 12 + Math.random() * 12,
            }
        })
        setParticles(newParticles)

        setTimeout(() => {
            onClick?.(e)
        }, 1000)

        setTimeout(() => {
            setParticles([])
            setIsAnimating(false)
        }, 2500)
    }

    return (
        <div className="relative inline-block">
            <button onClick={handleClick} className={className}>
                {children}
            </button>
            <AnimatePresence>
                {particles.map((particle) => (
                    <HeartParticle key={particle.id} {...particle} />
                ))}
            </AnimatePresence>
        </div>
    )
}
