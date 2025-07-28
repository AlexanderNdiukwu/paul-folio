import React from 'react'
import { motion } from 'framer-motion'

export default function Charge({ text = 'react', color = 'bg-[#00ffd1]/40' }) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0, 5, 0], // Up-down-up motion
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className={`${color}`}>
        <p className="text-center text-sm   capitalize font-semibold py-1">
          {text}
        </p>
      </div>
    </motion.div>
  )
}
