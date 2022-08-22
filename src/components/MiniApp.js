import React from "react";
import drawing from "./img/drawing.png";
import list from "./img/list.png";
import quiz from "./img/quiz.png";
import Shop from "./img/Shop.png";
import "./style/MiniApp.css";

function MiniApp() {
  return (
    <div className="Wrapper-MiniApp">
      <div className="Wrapper-Title">
        <h2>Hasil MiniApp</h2>
      </div>
      <div className="box-colom4">
        <div className="box-content-colom4">
          <div className="content1-box-colom4">
            <img src={drawing} alt="" className="kelas"></img>
            <div className="image-overlay">
              <div className="image-title">
                <a href="https://drawingminiapp.netlify.app/" target="blank">
                  {" "}
                  MiniApp Drawing
                </a>
              </div>
            </div>
          </div>
          <div className="content2-box-colom4">
            <img src={list} alt=""></img>
            <div className="image-overlay1">
              <div className="image-title1">MiniApp List</div>
            </div>
          </div>
          <div className="content3-box-colom4">
            <img src={quiz} alt=""></img>
            <div className="image-overlay1">
              <div className="image-title1">
                <a href="https://quizminiapp.netlify.app/" target="blank">
                  {" "}
                  MiniApp Quiz
                </a>
              </div>
            </div>
          </div>
          <div className="content3-box-colom4">
            <img src={Shop} alt=""></img>
            <div className="image-overlay1">
              <div className="image-title1">
                <a href="https://shopminiapp.netlify.app/" target="blank">
                  {" "}
                  MiniApp Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniApp;
