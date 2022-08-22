import React from "react";
import "./style/About.css";
import blog from "./img/blog.jpg";

function About() {
  return (
    <>
      <div className="About">
        <div className="Wrap-About">
          <div className="About-Title">
            <h3>ABOUT ME</h3>
            <div className="About-Title-Line">
              <h1>Siapa Saya Dan Apa Yang Saya Lakukan</h1>
            </div>
            <div className="Text-About">
              <p>
                Bagaimana kabarmu hari ini? Perkenalkan Nama saya Fadillah Reza
                Zulkarnaen Zain. Kalian bisa memanggilku Reza. saya berasal dari
                kota Bandung, saya lahir pada tanggal 21 Maret 2001.
                <br></br>
                <br></br>
                Jadi saya berusia 21 tahun saat ini. saya lulus dari sekolah
                SMKN 14 Bandung Jurusan Animasi. Organisasi yang saya ikuti
                adalah OSIS Bandung dan saya sebagai koorsekbid 1 yaitu bidang
                keagamaan.
                <br></br>
                <br></br>
                Sekarang saya sekolah di pondok IT yaitu di yogyakarta, saya
                mengambil jurusan Programmer divisi frontend, kenapa saya
                mengambil jurusan ini? Karena saya ingin menjadi seorang
                programmer yang bisa menjadi bagian dari perubahan yang terjadi
                di dunia ini.
              </p>
            </div>
          </div>
          <div className="About-Image">
            <img src={blog} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
