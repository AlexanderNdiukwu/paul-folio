import { motion } from "framer-motion";

export default function ChargingBattery() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="w-64 h-20 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner border-2 border-green-700"
        animate={{
          backgroundColor: [
            "#14532d", // dark green
            "#22c55e", // bright green
            "#14532d", // back to dark
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Next.js
      </motion.div>
    </div>
  );
}
