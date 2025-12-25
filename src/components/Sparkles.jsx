"use client"

import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

function Sparkles({ count = 6 }) {
    const [sparkles, setSparkles] = useState([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const items = []
        for (let i = 0; i < count; i++) {
            items.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 8 + 4,
                delay: Math.random() * 2,
                duration: Math.random() * 2 + 1.5,
            })
        }
        setSparkles(items)
    }, [count])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute text-yellow-300"
                    style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                        fontSize: `${sparkle.size}px`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                    }}
                >
                    ✦
                </motion.div>
            ))}
        </div>
    )
}

export default memo(Sparkles)
