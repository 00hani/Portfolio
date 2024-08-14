import React from "react";
import dz from "./dz.svg";
function Header() {
  function MouseOver(event) {
    event.target.style.background = "#ffc107";
    event.target.style.color = "white";
  }
  function MouseOut(event) {
    event.target.style.background = "";
    event.target.style.color = "black";
  }

  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",

        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "160px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="http://localhost:5174/"
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <p
            style={{
              fontSize: 30,
              fontWeight: 1000,
              color: "black",
              display: "flex",
              borderRadius: 50,
              justifyContent: "center",
              gap: 25,
              padding: 8,
            }}
          >
            Hani-Khinache
            <img src={dz} alt="" style={{ height: 40, width: 40 }} />
          </p>
        </a>
        <div
          className="liste"
          style={{
            display: "flex",
            gap: "50px",
            fontSize: 26,
            fontWeight: 600,
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li>
            <a
              href=""
              style={{ borderRadius: 50, color: "black", padding: 8 }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              Home{" "}
            </a>{" "}
          </li>
          <li>
            <a
              href="#aboutMe"
              style={{
                borderRadius: 50,
                color: "black",
                padding: 8,
              }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href=""
              style={{ borderRadius: 50, color: "black", padding: 8 }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href=""
              style={{ borderRadius: 50, color: "black", padding: 8 }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              Portfolio
            </a>{" "}
          </li>
          <li>
            <a
              href=""
              style={{ borderRadius: 50, color: "black", padding: 8 }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              Blog
            </a>{" "}
          </li>
          <li>
            <a
              href=""
              style={{ borderRadius: 50, color: "black", padding: 8 }}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            >
              Contact
            </a>{" "}
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
