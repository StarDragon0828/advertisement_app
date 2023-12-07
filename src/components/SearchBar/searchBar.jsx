import React from "react";
import "./style.scss";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <button className="toggleIcon me-2">
        <i className="bi bi-list"></i>
      </button>
      <div className="searchInput">
        <i class="bi bi-search"></i>
        <input type="search" placeholder="Encontre aqui proximo destino" className="form-control" />
      </div>

      <button className="settingIcon ms-2">
        <i className="bi bi-sliders2"></i>
      </button>
    </div>
  );
};

export default SearchBar;
