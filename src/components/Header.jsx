import { useState } from "react";
import logo from "../assets/logo.jpg";

const navBar = ["Home", "Research", "CV", "Social"];

export default function Header() {
  //   const [addBorder, setAddBorder] = useState("");
  const [selectedTab, setSelectedTab] = useState("Home");

  //   const changeBorder = (idx) => {
  //     if (idx) setAddBorder("border-l-4 border-red-500 px-3 rounded-lg");
  //   };
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    // setImageCategory(idx);
  };

  return (
    <div className="flex items-center justify-between border-b-4 py-3 border-b-[#892185] ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Tegan Mosugu" className="rounded-full h-10 w-10" />
        <p className="text-2xl font-bold">Tegan Mosugu</p>
      </div>
      <div className="flex gap-10 items-center">
        {navBar.map((item, idx) => (
          <ul key={idx}>
            <li
              onClick={() => handleTabClick(item)}
              className={`hover:text-[#892185] ${
                selectedTab === item
                  ? "border-l-4 border-[#892185] px-2 rounded-lg"
                  : "border-l-4 border-white px-2 rounded-lg"
              } `}
            >
              {item}
              {selectedTab === item && (
                <div className="absolute w-[50%] h-1 bg-red bottom-0 left-1/2 transform -translate-x-1/2"></div>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
