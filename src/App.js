import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Services from "./components/services/Services";
import Contactus from "./components/contactus/Contactus";
import News from "./components/news/News";
import LabIntroductionPage from "./components/LabIntroductionPage";
import Single from "./components/services/Single";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<Aboutus />}
          />
          <Route
            path="/services"
            element={<Services />}
          ></Route>
          <Route
            path="/labintroduction"
            element={<LabIntroductionPage />}
          ></Route>
          <Route
            path="news"
            element={<News />}
          ></Route>
          <Route
            path="/contactus"
            element={<Contactus />}
          ></Route>
          <Route
            path="/services/:one"
            element={<Single />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
