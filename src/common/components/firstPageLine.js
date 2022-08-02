import Image from "next/image";

import arrowFirstPage from "/public/assets/arrowFirstPage.svg";

const FirstPageLine = () => {
  return (
    <div className="drop-shadow-lg">
      <Image src={arrowFirstPage}></Image>
    </div>
  );
};

export default FirstPageLine;
