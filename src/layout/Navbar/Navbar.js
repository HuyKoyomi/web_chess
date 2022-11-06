import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaChess } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <FaChess color="#fff" size={30} style={{marginLeft: 50}}/>
        <div className="rightSide">
          <Link to="/" className="link">
            {" "}
            TRANG CHỦ{" "}
          </Link>
          <Link to="/game" className="link">
            {" "}
            CHƠI GAME{" "}
          </Link>
          <Link to="/rating" className="link">
            {" "}
            BẢNG XẾP HẠNG{" "}
          </Link>
          <Link to="/new" className="link">
            {" "}
            TIN TỨC{" "}
          </Link>
          <Link to="/contact" className="link">
            {" "}
            LIÊN HỆ{" "}
          </Link>
          <Link to="/register" className="link">
            {" "}
            ĐĂNG KÝ{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
