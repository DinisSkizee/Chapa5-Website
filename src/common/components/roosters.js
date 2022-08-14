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
    { image: galo1 },
    { image: galo2 },
    { image: galo3 },
    { image: galo4 },
    { image: galo5 },
    { image: galo6 },
  ];
  return (
    <div className="flex flex-col justify-start items-center absolute w-[168px] h-[236px] right-[670px] top-[306px] overflow-hidden">
      {/* Rooster & Shade*/}
      {roosters.map(({ image }) => (
        <RoosterSlider image={image} />
      ))}

      <div className="absolute z-30 top-[10.8rem]">
        <Image src={roosterShade} width={53} height={23} />
      </div>
    </div>
  );
};

export default Roosters;

const RoosterSlider = ({ image }) => {
  return (
    <div
      className={`flex justify-center items-center min-w-[168px] min-h-[236px]`}
    >
      <Image src={image} width={73} height={137} className="z-40" />
    </div>
  );
};
