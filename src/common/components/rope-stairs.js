import Image from "next/image";

import LinhasCordas from "/public/assets/LinhaseCordas.png";

const RopeStairs = () => {
  return (
    <>
      {/* Stairs & Bambu */}
      <div className="absolute">
        <Image src={LinhasCordas} className="top-[-5.3rem] left-[-1rem]" />
      </div>
    </>
  );
};

export default RopeStairs;
