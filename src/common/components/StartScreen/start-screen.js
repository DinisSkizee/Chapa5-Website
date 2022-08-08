import Head from "next/head";
import Image from "next/image";

import BambooVerde from "/public/assets/bambooVerde.png";

import Header from "../Header/header";
import RopeStairs from "../rope-stairs";

const StartScreen = () => {
  return (
    <>
      <Head>
        <title>Chapa5</title>
      </Head>

      {/* Background */}
      <div className="relative flex justify-center content-center w-[100%] h-[100vh] bg-[#fff]">
        {/* Background Inside */}
        <div
          className="w-[85%] min-h-[930px] rounded-[45px] my-auto"
          style={{
            background:
              "linear-gradient(89.64deg, #93C297 41.46%, rgba(147, 194, 171, 0.63) 62.56%, #93BAC2 82.04%)",
          }}
        >
          <Header />

          {/* Stairs & Bambu */}
          <RopeStairs />

          {/* Bamboos */}
          <div className="absolute h-full translate-x-[73vw]">
            <Image src={BambooVerde} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
