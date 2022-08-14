import Image from "next/image";

import LinhasCordas from "/public/assets/LinhasCordasFull.png";

const RopeStairs = () => {
  return (
    <>
      {/* Stairs */}
      {/* Then Left-0 */}
      <div className="absolute top-0 left-[6.82%]">
        <Image src={LinhasCordas} />
      </div>
    </>
  );
};

export default RopeStairs;
