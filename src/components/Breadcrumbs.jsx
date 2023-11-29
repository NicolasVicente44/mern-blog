import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  // Check if data is valid
  if (!Array.isArray(data) || data.length === 0) {
    // You can return null or some placeholder if data is not valid
    return null;
  }

  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => {
        // Use a combination of name and index as key for better stability
        const key = `${item.name}-${index}`;

        return (
          <div key={key} className="text-black text-xs font-roboto md:text-sm">
            <Link to={item.link}>{item.name}</Link>
            {index !== data.length - 1 && <span className="px-3">/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
