import Image from "next/image";

import roosterShade from "/public/assets/Ellipse.png";

import galo1 from "/public/assets/galo11.png";
import galo2 from "/public/assets/galohue1.png";
import galo3 from "/public/assets/galohue2.png";
import galo4 from "/public/assets/galohue3.png";
import galo5 from "/public/assets/galohue4.png";
import galo6 from "/public/assets/galohue5.png";

const Roosters = () => {
  const roosters = [
    { index: 1, image: galo1 },
    { index: 2, image: galo2 },
    { index: 3, image: galo3 },
    { index: 4, image: galo4 },
    { index: 5, image: galo5 },
    { index: 6, image: galo6 },
  ];
  return (
    <div className="flex flex-col justify-center items-center absolute w-[168px] h-[239px] right-[670px] top-[304px]">
      {/* Rooster & Shade*/}
      {roosters.map((image, index) => (
        <Image
          src={image}
          width={73}
          height={137}
          className="z-40"
          key={index}
        />
      ))}
      <div className="absolute z-30 top-[11rem]">
        <Image src={roosterShade} width={53} height={23} />
      </div>
    </div>
  );
};

export default Roosters;
