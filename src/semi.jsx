import React from "react";
import hani from "./HANI.jpg";
import git from "./git.jpg";
import telegram from "./telegram.jpg";
import twiter from "./twiter.jpg";
import instagram from "./instagram.jpg";
import AboutMe from "./AboutMe";

const styledimage = {
  height: 50,
  width: 50,
  backgroundColor: "#ffc107",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function Semi({ AboutMeid }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "110vh",
            height: "100vh",
            borderRadius: "0px 470vh 470vh 0px",
          }}
        >
          {" "}
          <img
            src={hani}
            alt=""
            style={{
              height: 540,
              width: 500,
              position: "relative",
              left: 30,
              top: 100,
            }}
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#ffc107",
              fontSize: 50,
              fontFamily: "rubik",
              fontWeight: 600,
            }}
          >
            Hi There, I'm
          </p>
          <p
            style={{
              color: "black",
              fontSize: 80,
              fontFamily: "rubik",
              fontWeight: 800,
            }}
          >
            Hani <br /> Khinache
          </p>
          <p
            className="p"
            style={{ fontWeight: 600, fontSize: 50, fontFamily: "rubik" }}
          >
            Front-End Developer
          </p>
          <div className="icon" style={{ display: "flex", gap: 30 }}>
            <a href="https://github.com/00hani" style={styledimage}>
              <img
                src={git}
                alt=""
                style={{
                  height: 28,
                  width: 28,
                  borderRadius: "50%",
                }}
              />
            </a>
            <a href="" style={styledimage}>
              {" "}
              <img
                src={instagram}
                alt=""
                style={{
                  height: 28,
                  width: 28,
                  borderRadius: "50%",
                }}
              />
            </a>
            <a href="" style={styledimage}>
              {" "}
              <img
                src={telegram}
                alt=""
                style={{
                  height: 28,
                  width: 28,
                  borderRadius: "50%",
                }}
              />
            </a>
            <a
              href=""
              style={{
                height: 50,
                width: 50,

                borderRadius: "50%",
              }}
            >
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <AboutMe AboutMeid={AboutMeid} />
    </div>
  );
}

export default Semi;
