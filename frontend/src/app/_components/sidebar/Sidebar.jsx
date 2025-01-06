"use client";

import React, { useState } from "react";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import styles from "./sidebar.module.css";
import Links from "./links/Links";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(26px at 123px 47px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <Links />
        {/* <div className="imageList">
          <img src="/banner4.jpg" alt="" />
        </div> */}
      </motion.div>
      <ToggleButtons setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
