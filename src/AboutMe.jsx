import React from "react";

function AboutMe({ AboutMeid }) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "40% 60%" }}
      id={AboutMeid}
    >
      <div>
        <div
          className="text"
          style={{
            backgroundColor: "white",
            padding: "130px",
            paddingBottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: 120,
            width: 1600,
          }}
        >
          <p
            style={{
              color: "#ffc107",
              fontSize: 60,
              fontFamily: "rubik",
              fontWeight: 800,
            }}
          >
            I love being a developer
          </p>
          <p
            style={{
              color: "black",
              fontSize: 30,
              fontFamily: "rubik",
            }}
          >
            Hello <br />I am Hani, Student at University of Science and
            Technology Houari Boumediene and Code213 school tech,I'm a junior
            front-end developer (web/mobile),with some skills in technologies
            such as React js and React Native, HTML, CSS, Javascript, bootstrap,
            tailwind, material UI, Spline js
          </p>
        </div>
        <div
          className="boxes"
          style={{
            backgroundColor: "white",
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            width: 1600,
          }}
        >
          {/* <div
            style={{
              height: "100px",
              width: "300px",
              backgroundColor: "#fff7e5",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              color: "black",
              fontSize: 25,
              fontFamily: "rubik",
              fontWeight: 600,
              border: "3px dashed #ffc107 ",
            }}
          >
            <p>TECHNOLOGIES</p>
            <p>HTML,CSS,Javascript,bootstrap,tailwind,Materiel UI,Spline js</p>
          </div> */}
          <div
            style={{
              height: "100px",
              width: "300px",
              backgroundColor: "#fff7e5",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",

              color: "black",
              fontSize: 25,
              fontFamily: "rubik",
              fontWeight: 600,
              border: "3px dashed #ffc107 ",
            }}
          >
            <p>
              coming soon <br />
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
