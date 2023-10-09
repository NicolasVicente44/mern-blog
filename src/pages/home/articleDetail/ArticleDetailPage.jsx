import React from "react";
import MainLayout from "../../../components/MainLayout";
import Article from "../container/Article";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { images } from "../../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const BreadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Education",
  "Food",
  "Finance",
  "Technology",
];

const postsData = [
  {
    _id: "1",
    image: images.post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.post1,
    title: "Help Children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 ">
        <article className="flex-1">
          <Breadcrumbs data={BreadcrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.post1}
            alt="articleimage"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-black text-sm font-roboto inline-block mt-4"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-black">
            Help Teach Programming to Children
          </h1>
          <div className="mt-4 text-gray-600">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              veniam sint repellendus? Ullam assumenda repudiandae beatae
              doloremque accusamus voluptatum dignissimos, dolore dolor maiores
              cupiditate fugit error aliquid ducimus asperiores. Tempore? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Soluta odio at
              aspernatur sapiente tempore minima minus, modi hic, harum eligendi
              asperiores beatae! Voluptates quam fugit blanditiis iure porro
              recusandae rem!
            </p>
          </div>
        </article>
        <SuggestedPosts
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
