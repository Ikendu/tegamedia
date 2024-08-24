import { useState } from "react";

const navBar = ["Home", "Research", "CV", "LinkedIn"];
const links = [
  "https://teganmosugu.com/",
  "#",
  "https://teganmosugu.com/Cv/",
  "https://www.linkedin.com/in/teganjosephmosugu/",
];

export default function WebNavBar(showMobileNav) {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="md:flex md:gap-10 items-center hidden">
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
  );
}
