import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { ImFacebook2, ImMail } from "react-icons/im";
import { AiFillCaretRight } from "react-icons/ai";
import "./Help.css";
import Ho_tro from "../../assets/Ho_tro/Ho_tro.jpg";

export default function Help() {
  return (
    <div>
      <Danh_muc />
      <div style={{ height: 30 }}></div>
      <Loi_khuyen />
      <div style={{ height: 30 }}></div>
      <Ho_tro_truc_tuyen />
    </div>
  );
}

const Loi_khuyen = () => {
  return (
    <div className="help_container" style={{ height: 250, marginBottom: 200 }}>
      <h5 className="header_help">Một số lời khuyên cho người mới</h5>
      <div className="item" style={{ height: 80 }}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 60, width: 75, marginRight: 10 }}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phprohZMI.jpeg"
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1. Hãy chắc rằng bạn biết rõ luật
          </p>
        </div>
      </div>
      <div className="item" style={{ height: 80 }}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 60, width: 75, marginRight: 10 }}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phpVn8cde.jpeg"
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2. Chơi nhiều và thật nhiều các ván cờ.
          </p>
        </div>
      </div>
      <div className="item" style={{ height: 80 }}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 60, width: 75, marginRight: 10 }}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phpfCWTtE.png"
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3. Xem lại các ván đấu và học từ chúng.
          </p>
        </div>
      </div>
      <div className="item" style={{ height: 80 }}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 60, width: 75, marginRight: 10 }}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phpQnn41t.jpeg"
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            4. Hãy luyện tập giải thế cờ.
          </p>
        </div>
      </div>
      <div className="item" style={{ height: 80 }}>
        <div style={{ display: "flex" }}>
          <img
            style={{ height: 60, width: 75, marginRight: 10 }}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/CHESScom/phpcTgd85.jpeg"
          />
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            5. Học cách kết thúc ván đấu cơ bản.
          </p>
        </div>
      </div>
    </div>
  );
};
const Danh_muc = () => {
  return (
    <div className="help_container" style={{ height: 250 }}>
      <h5 className="header_help">DANH MỤC</h5>
      <a className="a_style" href="http://localhost:3000">
        <div className="item">
          <AiFillCaretRight className="icon" />
          Trang chủ
        </div>
      </a>
      <a className="a_style" href="http://localhost:3000/game">
        <div className="item">
          <AiFillCaretRight className="icon" />
          Chơi game
        </div>
      </a>
      <a className="a_style" href="http://localhost:3000/rating">
        <div className="item">
          <AiFillCaretRight className="icon" />
          Bảng xếp hạng
        </div>
      </a>
      <a className="a_style" href="http://localhost:3000/new">
        <div className="item">
          <AiFillCaretRight className="icon" />
          Tin tức
        </div>
      </a>
      <a className="a_style" href="http://localhost:3000/contact">
        <div className="item">
          <AiFillCaretRight className="icon" />
          Liên hệ
        </div>
      </a>
    </div>
  );
};
const Ho_tro_truc_tuyen = () => {
  return (
    <div className="help_container width" style={{height: 400}}>
      <h5 className="header_help">HỖ TRỢ TRỰC TUYẾN</h5>
      <img src={Ho_tro} style={{ width: "100%", height: "60%" }} />
      <div style={{ marginLeft: 20 }}>
        <div style={{ marginTop: 20 }}>
          <BsTelephoneFill className="icon" />
          <span style={{ color: "#000" }}>0963.681.775</span>
        </div>
        <div>
          <ImFacebook2 className="icon" />
          <a href="https://www.facebook.com/huykoyomi">
            <span style={{ color: "#000" }}>facebook.com</span>
          </a>
        </div>
        <div>
          <ImMail className="icon" />
          <span style={{ color: "#000" }}>HUYLM.B19CN307@stu.ptit.edu.vn</span>
        </div>
      </div>
    </div>
  );
};
