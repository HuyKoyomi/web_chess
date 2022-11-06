import "./Rating.css";
import React from "react";
import Help from "../../layout/Help/Help";
import Footer from "../../layout/Footer/Footer";
import Table from "react-bootstrap/Table";

function Rating() {
  var today = new Date();
  var time = `Ngày ${today.getDate()} tháng ${today.getMonth()} năm ${today.getFullYear()}`;
  return (
    <div class="row" className="contact">
      <div class="col-xl-12">
        <div class="row">
          <HeaderContent />
        </div>

        <div class="row" style={{ marginTop: 30 }}>
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-1" />
              <div class="col-xl-7">
                <div
                  className="new_container"
                  style={{ paddingLeft: 20, paddingBottom: 10, paddingTop: 10 }}
                >
                  <div class="row">
                    <span style={{ fontSize: 24, fontWeight: "bold" }}>
                      BẢNG XẾP HẠNG HỆ THỐNG THI ĐẤU CỜ VUA NĂM {today.getFullYear()}
                    </span>
                  </div>
                  <div class="row">{time}</div>
                </div>
              </div>
              <div class="col-xl-4"></div>
            </div>
            <div class="row">
              <div class="col-xl-1" />
              <div class="col-xl-7">
                <RatingTable />
              </div>
              <div class="col-xl-3">
                <Help />
              </div>
              <div class="col-xl-1" />
            </div>
          </div>
        </div>

        <div class="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Rating;

const RatingTable = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Xếp hạng</th>
          <th>Tài khoản</th>
          <th>Họ tên</th>
          <th>Điểm</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item?.account}</td>
            <td>{item?.name}</td>
            <td>{item?.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

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
            Bảng xếp hạng
          </span>
        </h3>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
  {
    name: "Lê Quang Liêm",
    score: 3000,
    account: "Le_Quang_Liem",
  },
];
