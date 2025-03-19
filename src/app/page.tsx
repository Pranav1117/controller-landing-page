"use client";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import Playstion from "./components/icons/Playstion";
import { motion } from "motion/react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "800" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="text-white space-y-2 h-screen w-[90%] mx-auto z-30">
      {/* navbar */}
      <nav className="flex h-[3.5rem] justify-between items-center">
        <div className="cursor-pointer">
          <Playstion />
        </div>
        <div>
          <button className="cursor-pointer shadow-lg bg-white p-4 text-[#03766F] ">
            BUY NOW
          </button>
        </div>
      </nav>

      {/* mian content */}
      <div className="h-[calc(100vh-13rem)] flex mt-4 justify-between">
        {/* side vertical heading */}
        <div
          className="mx-auto opacity-50 tracking-[5px] w-[10%] flex items-end"
          style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
        >
          SPECIAL {"\u00A0"} EDITION
        </div>

        {/* main hero section */}
        <div className="flex w-[80%] ">
          {/* hero section text */}
          <motion.div
            className="w-1/2 flex flex-col gap-10"
            // initial={{ opacity: 0, x: -40, filter: "blur(5px)" }}
            // animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.h3
              className={`${montserrat.className} relative left-17 scale-x-130 tracking-tight text-[120px] leading-[0.9] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] mt-[10px]`}
            >
              ALPINE <br /> GRE
              <motion.span
                initial={{ y: -50, rotateZ: 0 }}
                animate={{ y: 0, rotateZ: [0, 20, -10, 0] }}
                transition={{ delay: 3, duration: 0.6, ease: "easeInOut" }}
              >
                E
              </motion.span>
              N
            </motion.h3>

            <p className="font-normal tracking-wide scale-y-125">
              DUALSHOCK 4<br /> WIRELESS CONTROLLER
            </p>
            <motion.p
              className={`${poppins.className} text-[14px] font-extralight}`}
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              Refresh you set up this spring whith this contrasting green and
              white wireless controller. play in style with new alpine green
              edition of DUALSHOCK34 wireless controller.
            </motion.p>
          </motion.div>

          {/* hero section image */}
          <motion.div
            className="w-1/2 z-30"
            initial={{ x: -200 }}
            animate={{
              x: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            }}
          >
            <motion.div
              initial={{ scale: 4, filter: "blur(5px)" }}
              animate={{
                scale: [4, 0.9, 1.1, 1],
                filter: "blur(0px)",
              }}
              transition={{ delay: 1.2, duration: 0.5, ease: "easeIn" }}
            >
              <Image
                className="rotate-16 relative -left-15 drop-shadow-[1px_1px_10px_rgba(0,0,0,0.5)]"
                src={"/controller-1.png"}
                height={100}
                width={900}
                alt="controller preview"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* side vertical heading */}
        <div
          className={`mx-auto text-[10px] opacity-50 tracking-[2px] w-[10%] flex items-start ${poppins.className}`}
          style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
        >
          @ 2019 SONY INTERACTIVE ENTERTAINMENT LLC
        </div>
      </div>

      {/* footer */}
      <motion.footer
        className="bg-white px-6 py-2 h-[8rem] w-[80%] mx-auto flex justify-between items-center gap-4"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-[#28847E] flex items-center gap-2">
          {" "}
          01 <div className="h-1 w-20 bg-[#28847E]"></div> 03
        </div>
        <div>
          {" "}
          <Image
            className=""
            src={"/controller-1.png"}
            height={100}
            width={150}
            alt="controller preview"
          />
        </div>
        <div>
          {" "}
          <Image
            className=""
            src={"/controller-2.png"}
            height={100}
            width={100}
            alt="controller preview"
          />
        </div>
        <div>
          {" "}
          <Image
            className=""
            src={"/controller-3.png"}
            height={100}
            width={150}
            alt="controller preview"
          />
        </div>
        <div className="bg-[#28847E] overflow-hidden w-[300px] h-[100px]">
          <Image
            className="opacity-45 -rotate-20 relative -right-16 -top-10"
            src={"/controller-1.png"}
            height={100}
            width={600}
            alt="controller preview"
          />
        </div>
      </motion.footer>
    </main>
  );
}
