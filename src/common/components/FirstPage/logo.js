{
  /* Logo */
}
{
  /* 35-159 */
}
import { useState } from "react";

const Logo = () => {
  const onHover = "";
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-row text-black font-normal">
      <span
        className="text-center tracking-tighter leading-9 text-4xl font-[Aleut] pb-2 max-w-[60px] break-words block"
        style={{
          textShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        CHAPA5
      </span>
      <span className="relative right-0 -tracking-tighter leading-4 text-xs text-left top-[0.2rem]">
        TM
      </span>
    </div>
  );
};

export default Logo;
