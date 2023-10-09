import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-black">{header}</h2>
      <div className="grid gap-y-5 mt-5">
        {posts.map((item) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={item._id}
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="articleimage"
            />
            <div>
              <h3 className="text-sm font-roboto text-black font-medium">
                {item.title}
              </h3>
              <span className="text-sm opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="flex flex-wrap gap-x-2 gap-y-2 mt-4">Tags</h2>
      <div>
        {tags.map((item) => {
          <Link to="/">{item}</Link>;
        })}
      </div>
    </div>
  );
};

export default SuggestedPosts;