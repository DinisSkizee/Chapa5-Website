import Head from "next/head";

import Logo from "../Logo/logo";
import MenuItems from "../menuItems";
import FirstPageLine from "../firstPageLine";

const StartScreen = () => {
  return (
    <>
      <Head>
        <title>Chapa5</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-row w-full h-screen bg-[#C08552] gap-10">
        <div className="h-screen flex items-center">
          <MenuItems />
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Logo />
        </div>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-2">
          <FirstPageLine />
        </div>
      </div>
    </>
  );
};

export default StartScreen;
