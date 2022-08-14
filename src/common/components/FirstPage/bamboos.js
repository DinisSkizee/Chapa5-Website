import { motion } from "framer-motion";

import Image from "next/image";

import BambooGreen from "/public/assets/bambooGreen.png";
import BambooBlack from "/public/assets/bambooBlack.png";
import BambooBrown from "/public/assets/bambooBrown.png";

const Bamboos = () => {
  const bamboos = [
    {
      image: BambooBlack,
      top: "4",
      color: "black",
    },
    {
      image: BambooBrown,
      top: "6",
      color: "brown",
    },
    {
      image: BambooGreen,
      top: "8",
      color: "green",
    },
  ];
  return (
    <div className="absolute grid grid-cols-[1fr] right-[210px] z-20">
      {/* Bamboo */}
      {bamboos.map((i) => (
        <Bamboo image={i.image} top={i.top} color={i.color} />
      ))}
    </div>
  );
};

export default Bamboos;

const Bamboo = ({ image, top, color }) => {
  return (
    <div
      className="z-20 row-start-1 col-start-1"
      style={{ transform: `translateY(${top}vh)` }}
    >
      <motion.div
        animate={{
          ...(color === "green"
            ? {
                rotate: 360,
                y: [170, 0, 85, 0, 170, 0, 85, 0, 170],
              }
            : ""),
          ...(color === "brown"
            ? {
                rotate: 1080,
                y: [0, 170, 0, 85, 0, 170, 0, 85, 0],
              }
            : ""),
          ...(color === "black"
            ? {
                rotate: -1080,
                y: [85, 0, 170, 0, 85, 170, 0, 170, 85],
              }
            : ""),
        }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          ...(color === "green"
            ? {
                duration: 60,
              }
            : ""),
          ...(color === "brown"
            ? {
                duration: 85,
                delay: 0.5,
              }
            : ""),
          ...(color === "black"
            ? {
                duration: 60,
                delay: 0.5,
              }
            : ""),
        }}
      >
        <Image src={image} />
      </motion.div>
    </div>
  );
};
