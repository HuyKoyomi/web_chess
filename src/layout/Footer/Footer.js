import React from "react";
import "./Footer.css";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaInvision,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div id="footerSection">
      <div className="footerContainer">
        <div className="footerContact">
          <h3 className="footerTitle">Liên hệ</h3>
          <div className="contactContent">
            <a href="" className="contactText">
              <MdLocationOn color="#fff" size={20} />
              <span className="contactSpan">
                Học viện Công nghệ Bưu Chính Viễn thông
              </span>
            </a>

            <a href="" className="contactText">
              <BsTelephoneFill color="#fff" size={20} />
              <span className="contactSpan">+0123456789</span>
            </a>

            <a href="" className="contactText">
              <CgMail color="#fff" size={20} />
              <span className="contactSpan">PTIT@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="footerContact">
          <h3 className="footerTitle">Giới thiệu</h3>
          <p>
            Cảm ơn bạn đã ghé thăm Website của chúng tôi. Hãy theo dõi fanpage
            để có trải nghiệm thật tốt nhé!
          </p>
          <div className="boxIcon">
            <div className="footerIcon">
              <a href="" target="blank_"></a>
              <FaFacebook size={30} />
            </div>
            <div className="footerIcon">
              <FaInstagram size={30} />
            </div>
            <div className="footerIcon">
              <FaInvision size={30} />
            </div>
            <div className="footerIcon">
              <FaPinterest size={30} />
            </div>
            <div className="footerIcon">
              <FaTiktok size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="footerInfo">
        <div className="footerLine" />
        <p>
          Copyright © 2021 Trung tâm cờ vua Quốc tế | Thiết kế website by Huy
          Koyomi
        </p>
        <p>Chi nhánh tại Hà Nội</p>
      </div>
    </div>
  );
};
export default Footer;
