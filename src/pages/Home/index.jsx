import React, { useEffect } from "react";
import Layout from "../../Layout/index";
import "./style.scss";
import SearchBar from "../../components/SearchBar/searchBar";
import { homePageBtn } from "../../constants";
import Carousel from "../../components/Carousel";

const Home = () => {
  const handleNExt = () => {
    window.location.href = "/step2";
  };

  useEffect(() => {
    window.addEventListener("click", handleNExt);
    return () => {
      window.removeEventListener("click", handleNExt);
    };
  });

  return (
    <Layout>
      <SearchBar />
      <div className="container-fluid my-4">
        {homePageBtn?.map((btnName) => (
          <button key={btnName} className="category-btn">
            {btnName}
          </button>
        ))}
      </div>

      <Carousel
        settings={{
          dots: false,
          Infinity: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
        }}
      />

      <Carousel
        settings={{
          dots: false,
          Infinity: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: true,
        }}
        heading="Cidades"
      />

      <Carousel
        settings={{
          dots: false,
          Infinity: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: true,
        }}
        heading="Canions"
      />

      <Carousel
        settings={{
          dots: false,
          Infinity: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: true,
        }}
        heading="Restaurantes"
      />

      <Carousel
        settings={{
          dots: false,
          Infinity: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: true,
        }}
        heading="Adventuras"
      />
    </Layout>
  );
};

export default Home;
