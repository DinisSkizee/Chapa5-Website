import MenuItem from "./menuItem";

import lineOne from "/public/assets/LineOne.svg";
import lineTwo from "/public/assets/LineTwo.svg";
import lineThree from "/public/assets/LineThree.svg";
import lineFour from "/public/assets/LineFour.svg";

const MenuItems = () => {
  return (
    <div className="flex flex-col gap-4">
      <MenuItem title={"SOBRE"} redir={"/"} arrow={lineOne} />
      <MenuItem title={"CLIENTES"} redir={"/"} arrow={lineTwo} />
      <MenuItem title={"TRABALHOS"} redir={"/"} arrow={lineThree} />
      <MenuItem title={"CONTACTO"} redir={"/"} arrow={lineFour} />
    </div>
  );
};

export default MenuItems;
