import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        borderRadius: "4px",
      }}
    >
      {children}
    </div>
  );
}
