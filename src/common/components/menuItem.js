import Link from "next/link";
import Image from "next/image";

const MenuItem = ({ title, redir, arrow }) => {
  return (
    <div className="flex flex-row">
      <div className="ml-4">
        <Image src={arrow} className="drop-shadow-sm"></Image>
        <Link href={redir}>
          <a className="ml-4 font-extralight italic text-xl drop-shadow-lg">
            {title}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
