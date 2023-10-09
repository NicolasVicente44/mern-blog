import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Article from "./container/Article";
import CallToAction from "./container/CallToAction";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Article />
      <CallToAction />
    </MainLayout>
  );
};

export default HomePage;
