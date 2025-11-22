import React from "react";
import { AppContext } from "../App";
import { Image } from "./Image";

export function Portfolio() {
  const { isDesktop } = React.useContext(AppContext);

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "40px",
        flexDirection: isDesktop ? "row" : "column",
      }}
    >
      <div>
        <div style={{ fontSize: "2rem" }}>Graphic Design</div>
        <div
          style={{
            fontSize: "1.6rem",
            fontWeight: "100",
            marginBottom: "10px",
            maxWidth: "600px",
            marginTop: "40px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div>
        <Image src="/ana-portfolio/portfolio.JPG" height={700} />
        <Image src="/ana-portfolio/portfolio2.JPG" height={700} />
      </div>
    </div>
  );
}
