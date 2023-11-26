import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/index"

const Routing = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element = {<Layout />} />
            </Routes>
        </div>
    )
}

export default Routing;