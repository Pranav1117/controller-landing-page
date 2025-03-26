import { motion, AnimatePresence } from "motion/react";
import { Montserrat, Poppins } from "next/font/google";

const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});
const AnimatedSony = () => {
  return (
    <div
      className={`h-screen w-full flex flex-col gap-4 justify-center items-center ${monteserrat.className}`}
    >
      <div
        className="text-[5rem] overflow-hidden flex items-center p-2 h-24 w-22"
        style={{ perspective: "1000px" }}
      >
        {/* S: From left, stays, goes up */}
        <motion.span
          initial={{ x: -60, rotateX: 0 }} // Start off-screen left
          animate={{
            x: 8, // Move to original position
            y: [0, -90],
            rotateX: [0, 0, 70],
          }}
          transition={{
            x: { duration: 0.5 }, // Slide in from left
            y: { delay: 0.6, duration: 0.5 }, // Pause 1s, then move up
            rotateX: { delay: 0.5, duration: 0.3 },
          }}
        >
          S
        </motion.span>

        {/* O: From bottom, stays, goes right */}
        <motion.span
          initial={{ x: -46, y: 100, rotateY: 0 }} // Start off-screen bottom
          animate={{
            y: 0, // Move to original position
            x: [-46, 50], // Then move right
            rotateY: [0, 0, 70],
          }}
          transition={{
            y: { delay: 0.5, duration: 0.5 }, // Slide up from bottom
            x: { delay: 1.1, duration: 0.5 }, // Pause 1s, then move righ
            rotateY: { delay: 0.9, duration: 0.3 },
          }}
        >
          O
        </motion.span>

        {/* N: Placeholder (customize as needed) */}
        <motion.span
          initial={{ x: -190, rotateX: 0 }} // Start off-screen left
          animate={{
            x: -112, // Move to original position
            y: [0, -90], // Then move up
            rotateX: [0, 0, 70],
          }}
          transition={{
            x: { delay: 1.1, duration: 0.5 }, // Slide in from left
            y: { delay: 1.7, duration: 0.5 }, // Pause 1s, then move up
            rotateX: { delay: 1.5, duration: 0.3 },
          }}
        >
          N
        </motion.span>

        {/* Y: Placeholder (customize as needed) */}
        <motion.span
          initial={{ x: -172, y: 100, rotateY: 0 }} // Start off-screen bottom
          animate={{
            y: 0, // Move to original position
            x: [-172, -75], // Then move right
            rotateY: [0, 0, 70],
          }}
          transition={{
            y: { delay: 1.7, uration: 0.5 }, // Slide up from bottom
            x: { delay: 2.3, duration: 0.5 }, // Pause 1s, then move right
            rotateY: { delay: 2.1, duration: 0.3 },
          }}
        >
          Y
        </motion.span>
      </div>

      <div className="w-[700px] font-semibold">
        <h2 className="text-center text-xl">SONY</h2>
        <p className="text-md font-normal">
          Sony Interactive Entertainment is a global leader in gaming, known for
          developing and publishing PlayStation consoles, exclusive titles, and
          cutting-edge gaming technology.
        </p>
      </div>
    </div>
  );
};

export default AnimatedSony;
