import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/Landingpage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Landingpage />} />
        <Route exact path={"/signup"} element={<Signup />} />
        <Route exact path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

