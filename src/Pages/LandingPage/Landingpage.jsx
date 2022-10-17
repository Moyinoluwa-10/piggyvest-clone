import React from "react";
import "./Landingpage.css";

import Header from "../../Components/Header/Header";
import Invest from "../../Components/Invest/Invest";
import Security from "../../Components/Security/Security";
import Savings from "../../Components/Savings/Savings";
import Investment from "../../Components/Investment/Investment";
import Interact from "../../Components/Interact/Interact";
import Customers from "../../Components/Customers/Customers";

const Landingpage = () => {
  return (
    <div className="landing">
      <Header />
      <Invest />
      <Security />
      <Savings />
      <Investment />
      <Interact />
      <Customers />
    </div>
  );
};

export default Landingpage;
