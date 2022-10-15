import React from "react";
import { Link } from "react-router-dom";
import Investify from '../../images/investify.png';
import Rent from '../../images/rent.png';
import BoxBG from '../../images/rex-bg.png';
import Woman from '../../images/woman.png';
import Cross from '../../images/cross.svg';
import Circle from '../../images/circle.svg';
import Dot from '../../images/dot.svg';
import Apple from '../../images/apple.svg';
import Google from '../../images/google.svg';
import './Invest.css';

const Invest = () => {
  return (
    <div className="invest">
      <section className="invest-box">
        <div className="section-container">
          <h1>The Better Way to Save & Invest.</h1>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <div>
            <Link to={"/signup"} className="btn btn-signup">
              Create free account
            </Link>
          </div>

          <div className="download-box">
            <div>
              <Link to={"/"} className="btn-download">
                <img src={Apple} alt="download-apple" width="18" height="22" />{" "}
                Get on Iphone
              </Link>
            </div>
            <div>
              <Link to={"/"} className="btn-download">
                <img src={Google} alt="download-apple" width="24" height="24" />{" "}
                Get on Android
              </Link>
            </div>
          </div>
        </div>

        <div className="secc">
          <div className="home">
            <img src={BoxBG} alt="gggs" class="rect" />
            <img src={Woman} alt="gggs" class="headerImg" />
            <img src={Rent} alt="gggs" className="headerIcon" />
            <img src={Investify} alt="gggs" className="card" />
            <img src={Cross} alt="Cross" className="cross" />
            <img src={Circle} alt="Cross" className="circle" />
            <img src={Dot} alt="Cross" className="dot" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
