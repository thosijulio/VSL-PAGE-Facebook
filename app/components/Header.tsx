import SeachIcon from "@/public/assets/icons/search.svg";
import MenuIcon from "@/public/assets/icons/menu.svg";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-background flex justify-between px-[10px] py-[10px]">
      <div className="relative h-auto w-[115px]">
        <Image
          alt="logo"
          src="/assets/images/headerLogo.png"
          fill={true}
          objectFit="contain"
        />
      </div>

      <div className="flex gap-[5px]">
        <div className="flex items-center justify-center rounded-full bg-icon-background text-icon-colorp-4 h-[35px] w-[35px]">
          <SeachIcon className="fill-icon-color" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-icon-background text-icon-colorp-4 h-[35px] w-[35px]">
          <MenuIcon className="fill-icon-color" />
        </div>
      </div>
    </header>
  );
};

export default Header;
