import React from "react";
import "./Landingpage.css";

import Header from "../../Components/Header/Header";
import Invest from "../../Components/Invest/Invest";
import Security from "../../Components/Security/Security";
import Savings from "../../Components/Savings/Savings";
import Investment from "../../Components/Investment/Investment";

const Landingpage = () => {
  return (
    <div className="landing">
      <Header />
      <Invest />
      <Security />
      <Savings />
      <Investment />
    </div>
  );
};

export default Landingpage;
