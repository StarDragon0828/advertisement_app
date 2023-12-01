import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Announcement from "../pages/Announcement";

const Routing = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/announcement" element = {<Announcement />} />
            </Routes>
        </div>
    )
}

export default Routing;