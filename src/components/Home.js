import "./style/Home.css";
import minion from "./img/minion.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Wrap-Home">
        <div className="Wrap-Title">
          <p className="Error">Assalamualaikum</p>
          <h1 className="Title-Home">Hey Semua</h1>
          <br></br>
          <p className="Text">
            Apa yang mau cari disini ? Ini <br></br>hanya hasil untuk MiniApp!
          </p>
          <div className="Wrap-Button">
            <button className="Button-Profile">
              <Link to="/MiniApp" className="link">
                Hasil MiniApp!
              </Link>
            </button>
          </div>
        </div>
        <img src={minion} alt="Minions" className="Minion" />
      </div>
    </div>
  );
}

export default Home;
