import React from "react";

const Landingpage = () => {
  return (
    <div>
      <section className="interact white">
        <div className="d-lg-flex">
          <div className="d-lg-flex">
            <div className="col-md-7 py-80 d-flex left pos-rel left bg-blue">
              <div
                className="content"
                style={{
                  marginLeft: "4rem",
                  fontSize: "20px",
                  padding: "20px",
                  backgroundColor: "salmon",
                  color: "white",
                }}
              >
                <h2 className="title bg-blue">Meet the saver of the month!</h2>
                <p className="text">
                  Every month, we shine a spotlight on one saver, asking them
                  questions about their savings culture and how the product is
                  specifically helping them shape how they spend and save for
                  future responsibilities.
                </p>
                <a href="https://youtu.be/qa_x5ie3eP8" className="link">Hello</a>
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
                <circle
                  cx="16.2173"
                  cy="16.1587"
                  r="16.0254"
                  fill="white"
                ></circle>
                <path
                  d="M18.6211 10.5498L17.4913 11.6796L21.1611 15.3574L8.20461 15.3574L8.20461 16.96L21.1611 16.96L17.4833 20.6378L18.6211 21.7676L24.23 16.1587L18.6211 10.5498Z"
                  fill="#2295F2"
                ></path>
              </div>
            </div>
            <div className="col-md-5 right" ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
