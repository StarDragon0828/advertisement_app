import React from "react";
import Layout from "../../Layout/index";
import "./style.scss";
import SearchBar from "../../components/SearchBar/searchBar";
import { homePageBtn } from "../../constants";
import Carousel from "../../components/Carousel";

const Announcement = () => {
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

      
      <h1>announcement</h1>
    </Layout>
  );
};

export default Announcement;
