import Image from "next/image";

import LogoLetter from "../logoLetter";

import c from "/public/assets/C.svg";
import cinco from "/public/assets/5.svg";

const Logo = () => {
  return (
    <>
      <div className="flex flex-row flex-nowrap items-center">
        <div className="translate-x-4 drop-shadow-lg">
          <Image src={c}></Image>
        </div>
        <div className="-translate-x-4 drop-shadow-lg">
          <Image src={cinco}></Image>
        </div>
      </div>
    </>
  );
};

export default Logo;
