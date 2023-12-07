import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/index"
import Login from "../pages/Login";
import FirstMultiStepForm from "../pages/FirstMultiStepForm";
import Register from "../pages/Register";
import Advertise from "../Layout/Advertise";
import Step from "../pages/FirstMultiStepForm"

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route exact path="/first-multipart-form" element={<FirstMultiStepForm />} />
                <Route path="/step" element ={<Step/>} />
            </Routes>
        </div>
    )
}

export default Routing;