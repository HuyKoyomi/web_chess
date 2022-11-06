import React from "react";
import "./Contact.css";
import anh1 from "../../assets/Lien_he/anh1.jpg";
import Map from "./Map";
import Footer from "../../layout/Footer/Footer";
import Help from "../../layout/Help/Help";

function Contact() {
  return (
    <div class="row" className="contact">
      <div class="col-xl-12">
        <div class="row">
          <HeaderContent />
        </div>

        <div class="row" style={{ marginTop: 30 }}>
          <div class="col-xl-1" />
          <div class="col-xl-7">
            <div class="row">
              <div class="col-xl-12">
                <p
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    fontWeight: "600",
                  }}
                >
                  Cảm ơn bạn đã quan tâm đến WebSite Hệ thống thi đầu cờ vua,
                  chúng tôi rất mong muốn và sẵn sàng hỗ trợ bạn. Xin vui lòng
                  gửi thông tin liên hệ cho chúng tôi theo form dưới đây, chúng
                  tôi cố gắng phản hồi thông tin trong thời gian sớm nhất.
                </p>
                <img src={anh1} style={{ width: "100%" }} />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div style={{ fontSize: 25, fontWeight: "600", marginTop: 30 }}>
                  Thông tin liên hệ
                </div>
                <div className="tmp" style={{ fontSize: 20 }}>
                  <span>Học viện Công nghệ Bưu Cính Viễn Thông</span>
                </div>
                <div className="tmp">
                  Posts and Telecommunications Institute of Technology
                </div>
                <div className="tmp">
                  Địa chỉ: 96A Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội
                </div>
                <div className="tmp">
                  Thành viên của: Bộ Thông tin và Truyền thông
                </div>
                <div className="tmp">Ngày thành lập: 17 tháng 9, 1953</div>
                <div className="tmp">Điện thoại: 024 3351 2254</div>
                <div className="tmp">
                  <a href="https://www.facebook.com/BCVTVN">
                    Facebook: https://www.facebook.com/BCVTVN
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <h4 style={{ fontWeight: "bold" }}>BẢN ĐỒ</h4>
                <div style={{ fontSize: 18 }}>
                  Quay về <a href="http://localhost:3000/"> Trang chủ</a>
                </div>
                <Map />
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <Help />
          </div>
          <div class="col-xl-1" />
        </div>
        <div class="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;

const HeaderContent = () => {
  return (
    <div className="header">
      <div style={{ marginLeft: "14%", marginTop: 10 }}>
        <h1 style={{ fontSize: 25, fontWeight: "bold", marginBottom: -5 }}>
          Tin tức
        </h1>
        <h3>
          <a href="http://localhost:3000/" style={{ fontSize: 18 }}>
            Trang chủ
          </a>{" "}
          »{" "}
          <span style={{ fontSize: 17, color: "#000", fontWeight: "normal" }}>
            Liên hệ
          </span>
        </h3>
      </div>
    </div>
  );
};
