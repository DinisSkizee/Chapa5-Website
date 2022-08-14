import Logo from "./logo";
import MenuButton from "./menu-button";

const Header = () => {
  return (
    <div className="flex flex-row mt-10 px-10 items-center">
      <Logo />

      <MenuButton />
    </div>
  );
};

export default Header;
