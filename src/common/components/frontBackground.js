import Image from "next/image";

import frontImage from "/public/assets/frontImage.png";
import frontImageShade from "/public/assets/frontImageShade.png";

const FrontBackground = () => {
  return (
    <>
      {/* Image & Shade */}
      <div className="absolute right-[420px] top-0 z-30">
        <Image src={frontImage} />
      </div>
      <div className="absolute right-[323px] top-[75px] z-10">
        <Image src={frontImageShade} />
      </div>
    </>
  );
};

export default FrontBackground;
