import Image from "next/image";

const LogoLetter = ({ image }) => {
  return (
    <div className="absolute">
      <Image src={image}></Image>
    </div>
  );
};

export default LogoLetter;
