"use client"

import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

function Fireflies() {
    const [fireflies, setFireflies] = useState([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const count = 20
        const items = []
        for (let i = 0; i < count; i++) {
            items.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 5 + 3,
                duration: Math.random() * 10 + 8,
                delay: Math.random() * 3,
                moveX: (Math.random() - 0.5) * 80,
                moveY: (Math.random() - 0.5) * 60,
                isYellow: Math.random() > 0.4,
            })
        }
        setFireflies(items)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
            {fireflies.map((fly) => (
                <motion.div
                    key={fly.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${fly.left}%`,
                        top: `${fly.top}%`,
                        width: `${fly.size}px`,
                        height: `${fly.size}px`,
                        background: fly.isYellow 
                            ? "radial-gradient(circle, #fef08a 0%, #facc15 50%, transparent 100%)"
                            : "radial-gradient(circle, #e879f9 0%, #9b4dff 50%, transparent 100%)",
                        boxShadow: fly.isYellow
                            ? "0 0 8px #facc15, 0 0 16px #fef08a"
                            : "0 0 8px #9b4dff, 0 0 16px #e879f9",
                    }}
                    animate={{
                        x: [0, fly.moveX, 0],
                        y: [0, fly.moveY, 0],
                        opacity: [0.3, 0.9, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: fly.duration,
                        delay: fly.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

export default memo(Fireflies)
