

import { motion } from 'framer-motion'

export default function ScrollingText() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-2">
      <motion.div
        className="inline-block text-lg font-medium text-white px-4"
        animate={{ x: ['100%', '-100%'] }}
       transition={{
          repeat: Infinity,
          duration: 3, // ⬅️ Slowed down from 1 to 20 seconds
          ease: 'Linear',
        }}
      >
        Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.
      </motion.div>
    </div>
  )
}
