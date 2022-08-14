{
  /* Logo */
}
{
  /* 35-159 */
}
import { useState } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsHover(isHover == false ? true : false);
  };
  return (
    <div className="flex flex-row text-black font-normal">
      <motion.span
        id="spaa"
        className="text-center tracking-tighter leading-9 z-50 text-4xl font-[Aleut] pb-2 break-words block"
        style={{
          textShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onMouseEnter={handleClick}
        onMouseOut={handleClick}
        animate={{
          ...(isHover ? { width: "159px" } : { width: "35px" }),
        }}
        transition={{ duration: 0.7 }}
      >
        CHAPA5
      </motion.span>
      <span className="relative right-0 -tracking-tighter leading-4 text-xs text-left top-[0.2rem]">
        TM
      </span>
    </div>
  );
};

export default Logo;
