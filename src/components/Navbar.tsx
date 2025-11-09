import React from "react";

export function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <div>Ariana Quintero</div>
        <div>|</div>
        <div>myemail@example.com</div>
      </div>
      <div>Menu</div>
    </div>
  );
}
