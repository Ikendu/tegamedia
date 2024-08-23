import { useState } from "react";

const navBar = ["Home", "Research", "CV", "LinkedIn"];
const links = [
  "https://teganmosugu.com/",
  "#",
  "https://teganmosugu.com/Cv/",
  "https://www.linkedin.com/in/teganjosephmosugu/",
];

export default function MobileNavBar() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="md:hidden absolute right-0 items-center pr-10 pl-5 max-w-[200px] bg-slate-300 rounded-b-xl">
      {navBar.map((item, idx) => (
        <ul key={idx} className="cursor-pointer my-5">
          <a
            href={links[idx]}
            target="_blank"
            onClick={() => handleTabClick(item)}
            className={`hover:text-[#910249] ${
              selectedTab === item
                ? "border-l-4 border-[#d61c79] px-2 rounded-lg"
                : "border-l-4 border-slate-300  px-2 rounded-lg"
            } `}
          >
            {item}
          </a>
        </ul>
      ))}
    </div>
  );
}
