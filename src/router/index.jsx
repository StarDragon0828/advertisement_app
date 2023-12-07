import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/index"
import Login from "../pages/Login";
import FirstMultiStepForm from "../pages/FirstMultiStepForm";
import Register from "../pages/Register";
import Advertise from "../Layout/Advertise";
import Step from "../pages/FirstMultiStepForm"
import Explore from "../pages/Explore";
import ItemDetails from "../pages/ItemDetails";
import Checkout from "../pages/Checkout";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/item-details" element={<ItemDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route exact path="/first-multipart-form" element={<FirstMultiStepForm />} />
                <Route path="/step" element ={<Step/>} />
            </Routes>
        </div>
    )
}

export default Routing;