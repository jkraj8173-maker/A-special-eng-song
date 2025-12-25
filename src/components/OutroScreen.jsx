"use client"

import { motion } from "framer-motion"
import Sparkles from "./Sparkles"

export default function OutroScreen() {
    return (
        <div className="w-full flex flex-col items-center justify-center relative">
            <Sparkles count={15} />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6"
            >
                {/* GIF */}
                <motion.img
                    src="/gifs/heart.gif"
                    alt="cute teddy"
                    className="w-40 h-40 object-contain"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Outro Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl md:text-3xl text-foreground text-center text-balance leading-normal bloom-text"
                >
                    I love u bubu 💖
                </motion.p>

            </motion.div>
        </div>
    )
}
