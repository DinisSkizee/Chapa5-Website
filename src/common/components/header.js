import Image from "next/image";
import logo from "/public/assets/chapa5logo.png";

const Header = () => {
  return (
    <div className="bg-red-900 h-12 flex flex-row px-8 absolute w-full z-50 top-5">
      <a href="">
        <Image src={logo} width="50" height="50" />
      </a>
    </div>
  );
};

export default Header;
