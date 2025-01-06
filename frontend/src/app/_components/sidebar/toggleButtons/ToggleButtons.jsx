import React from "react";
import { motion } from "framer-motion";
import styles from "../sidebar.module.css"

const ToggleButtons = (props) => {
  return (
    <button className={styles.togglerBtn} onClick={() => props.setOpen((prev) => !prev)}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={{ d: "M 2 2.5 L 30 2.5" }}
          animate={props.open ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 30 2.5" }}
        ></motion.path>

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 30 9.423"
          variants={{
            closed: {
              opacity: 1,
            },
            open: {
              opacity: 0,
            },
          }}
        ></motion.path>

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={{ d: "M 2 16.346 L 30 16.346" }}
          animate={props.open ? { d: "M 3 2.5 L 17 16.346" } : { d: "M 2 16.346 L 30 16.346" }}
        ></motion.path>
      </svg>
    </button>
  );
};

export default ToggleButtons;
