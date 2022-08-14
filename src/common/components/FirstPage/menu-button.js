{
  /* Menu Click */
}
import { HiMenuAlt4 } from "react-icons/hi";

const MenuButton = () => {
  return (
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
      <HiMenuAlt4 id="svgMenu" color="black" size={20} />
    </div>
  );
};

export default MenuButton;
