import { useState } from "react";
import logo from "../assets/logo.jpg";

const navBar = ["Home", "Research", "CV", "LinkedIn"];
const links = [
  "https://teganmosugu.com/",
  "#",
  "https://teganmosugu.com/Cv/",
  "https://www.linkedin.com/in/teganjosephmosugu/",
];

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
    <div className="flex items-center justify-between border-b-4 py-3 border-b-[#910249] px-5 ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Tegan Mosugu" className="rounded-full h-10 w-10" />
        <p className="text-2xl font-bold">Tegan Mosugu</p>
      </div>
      <div className="flex gap-10 items-center">
        {navBar.map((item, idx) => (
          <ul key={idx} className="cursor-pointer">
            <a
              href={links[idx]}
              target="_blank"
              onClick={() => handleTabClick(item)}
              className={`hover:text-[#910249] ${
                selectedTab === item
                  ? "border-l-4 border-[#d61c79] px-2 rounded-lg"
                  : "border-l-4 border-white px-2 rounded-lg"
              } `}
            >
              {item}
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
}
