import { useState } from "react";
import logo from "../assets/logo.jpg";
import MobileNavIcon from "../assets/icons/MobileNavIcon";
import MobileRightNav from "./MobileRightNav";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleNavChange = () => {
    setShowMobileNav(true);
  };
  return (
    <div className="flex items-center justify-between border-b-4 py-3 border-b-[#910249] px-5 ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Tegan Mosugu" className="rounded-full h-10 w-10" />
        <p className="text-xl md:text-2xl font-bold">Tegan Mosugu</p>
      </div>
      <MobileRightNav showMobileNav={showMobileNav} />
      <div className="md:hidden" onClick={handleNavChange}>
        <MobileNavIcon />
      </div>
    </div>
  );
}
