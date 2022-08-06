import Head from "next/head";

import Header from "../Header/header";

const StartScreen = () => {
  return (
    <>
      <Head>
        <title>Chapa5</title>
      </Head>

      {/* Background */}
      <div className="absolute flex justify-center content-center w-[100%] h-[100vh] bg-[#fff]">
        {/* Background Inside */}
        <div
          className="w-[85%] h-[86.11%] rounded-[45px] my-auto"
          style={{
            background:
              "linear-gradient(89.64deg, #93C297 41.46%, rgba(147, 194, 171, 0.63) 62.56%, #93BAC2 82.04%)",
          }}
        >
          <Header />
        </div>
        {/* Stairs & Bambu */}
      </div>
    </>
  );
};

export default StartScreen;
