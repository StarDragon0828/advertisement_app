import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import FirstMultiStepForm from "../pages/FirstMultiStepForm";
import Register from "../pages/Register";
import Advertise from "../Layout/Advertise";
import Step from "../pages/FirstMultiStepForm"
import SecondMultiStepForm from "../pages/SecondMultiStepForm"

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route exact path="/first-multipart-form" element={<FirstMultiStepForm />} />
                <Route path="/step" element ={<Step/>} />
                <Route path="/step2" element ={<SecondMultiStepForm/>} />
            </Routes>
        </div>
    )
}

export default Routing;