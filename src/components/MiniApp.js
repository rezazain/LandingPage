import React from "react";
import drawing from "./img/drawing.png";
import list from "./img/list.png";
import quiz from "./img/quiz.png";
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
              <div className="image-title">MiniApp drawing</div>
            </div>
          </div>
          <div className="content2-box-colom4">
            <img src={list} alt=""></img>
            <div className="image-overlay1">
              <div className="image-title1">MiniApp list</div>
            </div>
          </div>
          <div className="content3-box-colom4">
            <img src={quiz} alt=""></img>
            <div className="image-overlay1">
              <div className="image-title1">MiniApp quiz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniApp;
