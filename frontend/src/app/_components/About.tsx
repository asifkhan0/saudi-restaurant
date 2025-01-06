"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  photo: string;
}

interface AboutUsProps {
  history?: string;
  aboutImg?: string;
}

export default function About({ history, aboutImg }: AboutUsProps) {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-24 font-black uppercase text-center text-primary"
        >
          About Us
        </motion.h2>
        <div className="flex">
          {history && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-gray-700 mb-8 w-full h-full"
            >
              {history}
            </motion.p>
          )}

          <div className="w-full h-full">
            <img className="w-full h-full" src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
