import Head from "next/head";

import Bamboos from "../bamboos";
import FrontBackground from "../frontBackground";
import Roosters from "../roosters";

import Header from "../Header/header";
import RopeStairs from "../rope-stairs";

const StartScreen = () => {
  return (
    <>
      <Head>
        <title>Chapa5</title>
      </Head>

      {/* Background */}
      <div className="flex justify-center content-center w-[1920px] h-[1080px] bg-[#fff] fixed">
        {/* Background Inside */}
        <div
          className="w-[85%] min-h-[930px] rounded-[45px] my-auto overflow-hidden"
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
          <FrontBackground />

          {/* Rooster */}
          <Roosters />
        </div>
      </div>
    </>
  );
};

export default StartScreen;
