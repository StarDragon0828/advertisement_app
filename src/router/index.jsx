import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/index"
import Login from "../Layout/Login";
import FirstMultiStepForm from "../FirstMultiStepForm";
import Register from "../Layout/Register";
import Advertise from "../Layout/Advertise";
import Step from "../FirstMultiStepForm/index"

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route exact path="/firstMultipartForm" element={<FirstMultiStepForm />} />
                <Route path="/step" element ={<Step/>} />
            </Routes>
        </div>
    )
}

export default Routing;