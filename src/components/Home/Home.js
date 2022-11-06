import React from "react";
import { Button, Image } from "react-bootstrap";
import SLider from "./Slider/SLider";
import "./Home.css";
import Footer from "../../layout/Footer/Footer";
import { FaRobot } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

export default function Home() {
  return (
    <div class="row">
      <div class="col-xl-12">
        <div class="row">
          <div class="col-xl-12">
            <SLider />
          </div>
        </div>
        <div
          class="row"
          style={{
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: "#262421f2",
          }}
        >
          <div class="col-xl-2" />
          <div class="col-xl-5">
            <Image
              alt="Image One"
              src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div class="col-xl-3" style={{ color: "white", paddingLeft: 20 }}>
            <div class="row" className="title" style={{ fontSize: 40 }}>
              <div class="col-xl-12">
                <span>Chơi trực tuyến tại hệ thống thi đấu cờ vua số 1! </span>
              </div>
            </div>
            <div
              class="row"
              className="title"
              style={{ marginTop: 10, fontStyle: "italic" }}
            >
              <div class="col-xl-12">
                <span style={{ fontWeight: "bold" }}>38.113</span>
                <span style={{ color: "#858789" }}> Các ván đấu hôm nay</span>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12" className="home_button_container">
                <a href="http://localhost:3000/game">
                  <button className="home_button">
                    <div>
                      <FaRobot size={45} style={{ marginRight: 10 }} />
                      <span>Chơi với máy tính</span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 15,
                          fontStyle: "italic",
                          fontWeight: "200",
                        }}
                      >
                        Cơ chế siêu máy tính
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12" className="home_button_container">
                <a href="http://localhost:3000/rating">
                  <button
                    className="home_button"
                    style={{ backgroundColor: "#575353" }}
                  >
                    <div>
                      <GiTrophyCup size={45} style={{ marginRight: 10 }} />
                      <span>Xem bảng xếp hạng</span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 15,
                          fontStyle: "italic",
                          fontWeight: "200",
                        }}
                      >
                        Cập nhật nhanh nhất
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-2" />
        </div>
        <div class="row">
          <div class="col-xl-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
