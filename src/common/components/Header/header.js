import Image from "next/image";

import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="relative flex flex-row bg-red-200 mt-10 px-10 items-center">
        {/* Logo */}
        <>
          <span
            className="flex text-black text-center tracking-tighter leading-9 font-normal text-4xl font-[Aleut] pb-2"
            style={{
              textShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            CHAPA5
            <span className="relative right-0 font-normal -tracking-tighter leading-4 text-xs text-left top-[0.2rem]">
              TM
            </span>
          </span>
        </>
        {/* Menu Click */}
        <div className="flex flex-row w-full justify-end gap-2">
          <span
            className="font-[Segoe Ui] text-md font-semibold leading-5 tracking-normal text-center text-black"
            style={{
              textShadow: "0px 4px 4px  rgba(0, 0, 0, 0.25)",

              textShadow: "0px 4px 4px  rgba(0, 0, 0, 0.25)",
            }}
          >
            MENU
          </span>
          <HiMenuAlt4 color="black" size={20} />
        </div>
      </div>
    </>
  );
};

export default Header;
