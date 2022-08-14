import Logo from "./logo";
import MenuButton from "./menu-button";

const Header = () => {
  return (
    <div className="flex flex-row items-start mt-10 px-10">
      <Logo />

      <MenuButton />
    </div>
  );
};

export default Header;
