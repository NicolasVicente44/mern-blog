import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../components/ArticleCardSkeleton";
import ErrorMessage from "../components/ErrorMessage";

const BlogChild = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-black">
                All Articles
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                Constantly updated, unbiased.
              </h2>
              <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <section className="flex flex-col container mx-auto px-5 py-10">
          <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
            {isLoading ? (
              [...Array(100)].map((item, index) => (
                <ArticleCardSkeleton
                  key={index}
                  className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                />
              ))
            ) : isError ? (
              <ErrorMessage message="Couldn't fetch the posts data" />
            ) : (
              data?.data.map((post) => (
                <ArticleCard
                  key={post._id}
                  post={post}
                  className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                />
              ))
            )}
          </div>
        </section>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... (your SVG path) */}
        </svg>
      </div>
    </section>
  );
};

export default BlogChild;
