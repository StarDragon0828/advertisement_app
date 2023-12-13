import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Announcement from "../pages/Announcement";
import ConfirmPayment from "../pages/ConfirmPayment";
import Purchasing from "../pages/Purchasing";
import Explore from "../pages/Explore";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Advertise from "../Layout/Advertise";
import ItemDetails from "../pages/ItemDetails";
import Checkout from "../pages/Checkout";
import FirstMultiStepForm from "../pages/FirstMultiStepForm";
import SecondMultiStepForm from "../pages/SecondMultiStepForm"

const Routing = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/step3" element={<Home />} />
                <Route path="/step2" element={<Announcement />} />
                <Route path="/confirm-payment" element={<ConfirmPayment />} />
                <Route path="/purchasing" element={<Purchasing />} />
                <Route path="/" element={<Explore />} />

                <Route path="/item-details" element={<ItemDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route exact path="/first-multipart-form" element={<FirstMultiStepForm />} />
                <Route exact path="/second-multipart-form" element={<SecondMultiStepForm />} />
            </Routes>
        </Fragment>
    )
}

export default Routing;