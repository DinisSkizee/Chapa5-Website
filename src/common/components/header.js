import Image from "next/image";
import logo from "/public/assets/chapa5logo.png";

const Header = () => {
  return (
    <div className="bg-red-900 h-12 flex flex-row px-8 absolute w-full z-50 top-5">
      <div className="flex flex-row items-center h-full gap-10">
        <a href="/" className="h-full w-12 pt-1">
          <Image src={logo} objectFit="contain" />
        </a>
        <a href="" className="rounded-none border border-sky-200 p-2">
          About
        </a>
        <a href="">Contact</a>
      </div>
    </div>
  );
};

export default Header;
