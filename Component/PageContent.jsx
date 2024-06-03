import React from "react";
import Star from "../assets/Star 1.png";
import Group2 from "../assets/Group 5.png";
import iphone1 from "../assets/iPhone-13-Pro-Front.png";
import iphone2 from "../assets/iPhone-13-Pro-Front-1.png";

import img from "../assets/Group 35924.png";
import img2 from "../assets//Group 35935.png";
import star2 from "../assets/star-05.png";
import cube from "../assets/cube-02.png";
import cube2 from "../assets/cube-04.png";
import bell from "../assets/bell.png";
import img3 from "../assets/Group 35937.png";
import card from "../assets/card.png";
import star3 from "../assets/star3.png";
import img4 from "../assets/Group 1000002333.png";
import img5 from "../assets/Group 1000002355.png";
import frame from "../assets/Frame.png";
import circle from "../assets/Group 1000004721.png";

export default function PageContent() {
  const divStyle = {
    backgroundImage: `url(${circle})`,
    height: "100vh",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="page-content">
      <div className="App">
        <div className="container-2">
          <div className="img">
            <img src={Star} alt="" />
          </div>
          <div className="content">
            <h1>Make The Best Financial Decisions</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              error praesentium itaque repellendus aliquid.
            </h4>

            <div className="button">
              <img src={Group2} alt="" />
            </div>
          </div>
        </div>
        <div className="container-A">
          <div className="container-3">
            <div className="iphone1">
              <img src={iphone2} alt="" />
            </div>
            <div className="iphone2">
              <img src={iphone1} alt="" />
            </div>
            <div className="iphone3">
              <img src={iphone2} alt="" />
            </div>
          </div>
          <div className="container-4">
            <img src={img} alt="" />
          </div>
          <div className="container-5">
            <div className="container-5a">
              <img src={Star} alt="" />
            </div>
            <div className="container-5b">
              <img src={img2} style={divStyle} alt="" />
            </div>
            <div className="container-5c">
              <p style={{ color: "red" }}> Features</p>
              <h1>Uifry Premium</h1>
              <div>
                <h4>
                  <img src={star2} alt="" /> Budgeting Interval
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  rerum eveniet
                </p>
                <h4>
                  <img src={cube} alt="" /> Budgeting Interval
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  rerum eveniet
                </p>
                <h4>
                  <img src={cube2} alt=""></img> Budgeting Interval
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  rerum eveniet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container-6">
            <div className="container-6a">
              <p
                style={{ color: "red", whiteSpace: "pre-line", margin: "10px" }}
              >
                {" "}
                ADVANTAGES
              </p>
              <h1>Why Choose Uifry</h1>
              <br></br>
              <h4>
                {" "}
                <img
                  style={{ margin: "10px" }}
                  src={bell}
                  width={30}
                  height={30}
                  alt=""
                />
                Clever Notifications
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                rerum eveniet Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quis, quam quos eos repellendus corporis aut facere
                tenetur sapiente eum modi fugit provident quibusdam aspernatur
                ea velit sint explicabo placeat accusamus? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Illum rerum eveniet Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quis, quam
                quos eos repellendus corporis aut facere tenetur sapiente eum
                modi fugit provident quibusdam aspernatur ea velit sint
                explicabo placeat accusamus?
              </p>
            </div>
            <div className="container-6b">
              <img src={img2} style={divStyle} alt="" />
            </div>
          </div>
          <div className="container-7">
            <div className="container-7a">
              <img src={img3} alt="" />
            </div>
            <div className="container-7b">
              <img src={card} alt="" />
            </div>
            <div className="container-7c">
              <h2>
                <span>
                  <img src={star3} width={30} alt="" />{" "}
                </span>
                Fully Customizable
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                rerum eveniet Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quis, quam quos eos repellendus corporis aut facere
                tenetur sapiente eum modi fugit provident quibusdam aspernatur
                ea velit sint explicabo placeat accusamus? Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>
          <div className="container-8">
            <div className="container-8a">
              <h3>Testimonal</h3>
              <h1>What Our Users</h1>
              <h1>Say About us</h1>
            </div>
          </div>
          <div className="container-9">
            <img src={img4} alt="" />
          </div>
          <div className="container-10">
            <img src={img5} alt="" />
          </div>
          <div className="container-11">
            <img src={frame} alt="" />
          </div>
          <div className="container-12"></div>
        </div>
      </div>
    </div>
  );
}
