import React from "react";
import { Link } from "react-router-dom";
import { images, stables } from "../../../../constants";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-black md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={item._id}
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={
                item?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + item?.photo
                  : images.samplePostImage
              }
              alt={item.title}
            />
            <div className="text-sm font-roboto text-black font-medium">
              <h3 className="text-sm font-roboto text-black font-medium md:text-base lg:text-lg">
                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
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
      <h2 className="font-roboto font-medium text-black mt-8 md:text-xl">
        Tags
      </h2>
      {tags.length === 0 ? (
        <p className="text-slate-500 text-sm mt-2">
          There are no tags for this post
        </p>
      ) : (
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tags.map((item, index) => (
            <Link
              className="inline-block rounded-md px-3 py-1.5 background bg-black font-roboto text-sm text-white md:text-sm"
              to="/"
              key={index} // It's a good practice to add a key prop when mapping in React
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestedPosts;
