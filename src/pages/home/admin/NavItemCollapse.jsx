import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItemCollapse = ({
  title,
  children,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCollapse = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setActiveNavName(name); // Set this item as active when expanding
    }
  };

  // Determine if this item is active
  const isActive = activeNavName === name;

  return (
    <div
      className={`d-collapse d-collapse-arrow bg-base-200 min-h-0 rounded-none py-2 ${
        isActive ? "active-class" : ""
      }`}
    >
      <input
        type="checkbox"
        className="min-h-0 py-0"
        checked={isChecked}
        onChange={toggleCollapse}
      />
      <div
        className={`d-collapse-title font-medium min-h-0 py-0 pl-0 flex items-center gap-x-2 text-lg ${
          isActive ? "font-bold text-black" : "font-semibold text-[#a5a5a5]"
        }`}
        onClick={toggleCollapse}
      >
        {icon}
        {title}
      </div>
      <div className="d-collapse-content">
        <div className="mt-2 flex flex-col gap-y-2">{children}</div>
      </div>
    </div>
  );
};

export default NavItemCollapse;
