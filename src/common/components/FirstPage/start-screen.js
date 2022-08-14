import Head from "next/head";

import Bamboos from "./bamboos";
import Roosters from "./roosters";
import Header from "./header";
import RopeStairs from "./rope-stairs";
import FrontImageAndShade from "./front-image-shade";
import TitleAndDescription from "./title-description";

const StartScreen = () => {
  return (
    <>
      <Head>
        <title>Chapa5</title>
      </Head>

      {/* Background */}
      <div className="flex justify-center content-center w-[100%] h-[100%] bg-[#fff] fixed">
        {/* Background Inside */}
        <div
          className="w-[86%] min-h-[86.3%] rounded-[45px] my-auto overflow-hidden"
          style={{
            background:
              "linear-gradient(89.64deg, #93C297 41.46%, rgba(147, 194, 171, 0.63) 62.56%, #93BAC2 82.04%)",
          }}
        >
          <Header />

          {/* Stairs & Bambu */}
          <RopeStairs />

          {/* Bamboos */}
          <Bamboos />

          {/* Image Background */}
          <FrontImageAndShade />

          {/* Rooster */}
          <Roosters />

          {/* Text */}
          <TitleAndDescription />
        </div>
      </div>
    </>
  );
};

export default StartScreen;
