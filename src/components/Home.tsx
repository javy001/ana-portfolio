import React from "react";
import { Image } from "./Image";
import { AppContext } from "../App";
import homeImgage from "../assets/home.JPG";

export function Home() {
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
        <Image src={homeImgage} height={700} />
      </div>
      <div
        style={{
          fontSize: "36px",
          fontWeight: "100",
          marginBottom: "10px",
          maxWidth: "600px",
          marginTop: "40px",
        }}
      >
        This is where your intro will go. One or two sentences about who you are
        and what you do. It should be a good summary of you as a professional.
      </div>
    </div>
  );
}
