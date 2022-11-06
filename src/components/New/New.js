import "./New.css";
import React from "react";
import Help from "../../layout/Help/Help";
import Footer from "../../layout/Footer/Footer";

function New() {
  return (
    <div class="row" className="contact">
      <div class="col-xl-12">
        <div class="row">
          <HeaderContent />
        </div>

        <div class="row" style={{ marginTop: 10 }}>
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-1" />
              <div class="col-xl-7">
                <div
                  className="new_container"
                  style={{ paddingLeft: 20, paddingBottom: 10, paddingTop: 10 }}
                >
                  <div class="row">
                    <span style={{ color: "#076DB6" }}>Tag</span>
                  </div>
                  <div class="row">
                    <span style={{ fontSize: 24, fontWeight: "bold" }}>
                      Lê Quang Liêm
                    </span>
                  </div>
                  <div class="row">#Tin mới nhất</div>
                </div>
              </div>
              <div class="col-xl-4"></div>
            </div>
            <div class="row">
              <div class="col-xl-1" />
              <div class="col-xl-7">
                {data?.map((item, key) => (
                  <NewContent key={key} news={item} />
                ))}
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

export default New;

const NewContent = (props) => {
  return (
    <div className="new_container">
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-12">
              <span className="new_title">{props?.news?.title}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">{props?.news?.content}</div>
          </div>
        </div>
        <div class="col-sm-4">
          <img src={props.news.image} style={{ width: "90%", height: "90%" }} />
        </div>
      </div>
    </div>
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
            Tin tức
          </span>
        </h3>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Quang Liêm dự vòng chung kết Champions Chess Tour 2022",
    image:
      "https://i1-thethao.vnecdn.net/2022/11/02/quang-lie-m-jpeg-1667395920-1599-1667396043.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=-4cVFPBiUN_roeZ2ZJ97rQ",
    content:
      "MỸLê Quang Liêm giành suất dự Champions Chess Tour Finals cùng 7 kỳ thủ khác, trong đó có Vua cờ Magnus Carlsen, từ 14/11 đến 20/11.",
  },
  {
    title: "Carlsen vô địch Champions Chess Tour 2022",
    image:
      "https://i1-thethao.vnecdn.net/2022/10/19/-7146-1666151590.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=ReOw93fPBOSgEfuZTHZZlQ",
    content:
      "Chiến thắng trước Erigaisi Arjun ở tứ kết Aimchess Rapid hôm 18/10 giúp Magnus Carlsen vô địch Champions Chess Tour 2022 sớm một chặng đấu.",
  },
  {
    title: "Quang Liêm lỡ hẹn Carlsen ở chung kết Generation Cup",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/24/-4471-1663964210.png?w=500&h=300&q=100&dpr=1&fit=crop&s=JhxRoJTTSprym0LZ9Wz8FA",
    content:
      "Đưa trận đấu vào cờ chớp, nhưng Lê Quang Liêm vẫn thua chung cuộc Erigaisi Arjun 2-4 ở bán kết ngày 23/9, lỡ hẹn với Magnus Carlsen trong trận tranh vô địch Generation Cup",
  },
  {
    title: "Quang Liêm: 'Tôi không nghĩ Niemann gian lận'",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/23/-8694-1663898216.png?w=500&h=300&q=100&dpr=1&fit=crop&s=NXL1Q2awJOH43_fAdIfrxA",
    content:
      "Kỳ thủ số một Việt Nam Lê Quang Liêm cho rằng anh không thấy điểm gì bất thường qua các ván của Hans Niemann tại Sinquefield Cup và Generation Cup.",
  },
  {
    title: "Quang Liêm hạ Hans Niemann",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/23/-2766-1663876385.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=5Q5BvJM1ExnapYLVsOgRIg",
    content:
      "Lê Quang Liêm thắng 2,5-1,5 trước Hans Niemann - kỳ thủ đang bị Vua cờ Magnus Carlsen tẩy chay vì nghi gian lận, ở tứ kết giải cờ nhanh online Generation Cup hôm 22/9.",
  },
  {
    title: "Quang Liêm đấu Niemann ở tứ kết Generation Cup",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/22/-5260-1663811045.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=yknxM5CmwclvMCYS6AHixQ",
    content:
      "Lê Quang Liêm đứng thứ sáu vòng bảng, và gặp kỳ thủ trẻ gây nhiều tranh cãi Hans Niemann ở tứ kết cờ nhanh online Generation Cup hôm 21/9",
  },
  {
    title: "Quang Liêm bứt phá ở Generation Cup",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/20/-3915-1663638833.png?w=500&h=300&q=100&dpr=1&fit=crop&s=aZEIaLQlCbIkkfxydEFKeg",
    content:
      "Kỳ thủ số một Việt Nam Lê Quang Liêm giành 10 trên 12 điểm tối đa trong ngày thi thứ hai giải cờ nhanh online Generation Cup hôm 19/9",
  },
  {
    title: "Quang Liêm lại thua Carlsen",
    image:
      "https://i1-thethao.vnecdn.net/2022/09/19/-6911-1663554991.png?w=500&h=300&q=100&dpr=1&fit=crop&s=gDCTdQgGdIGO5k2VE6W78Q",
    content:
      "Lê Quang Liêm khởi đầu không tốt ở ngày đầu giải cờ nhanh online Generation Cup, khi chỉ kiếm hai trên 12 điểm tối đa tối 18/9",
  },
];
