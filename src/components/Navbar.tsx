// import React from "react";
import { useGetWindowWidth } from "../hooks/useGetWindowWidth";
import { useNavigate, Outlet, useLocation } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const windowWidth = useGetWindowWidth();
  const isDesktop = windowWidth >= 1024;

  return (
    <div>
      <div
        style={{
          padding: "0 30px",
        }}
      >
        <div>
          <div style={{ fontSize: "1.6rem" }}>Ariana Quintero</div>
          {isDesktop && (
            <>
              <div>ariquintero@gmail.com</div>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 10,
          fontWeight: "200",
          display: "flex",
          gap: "10px",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <div
          className="hover-item"
          style={{
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: location.pathname === "/" ? "#f0f0f0" : "",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="hover-item"
          style={{
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: location.pathname === "/about" ? "#f0f0f0" : "",
          }}
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
        <div
          className="hover-item"
          style={{
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: location.pathname === "/projects" ? "#f0f0f0" : "",
          }}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </div>
        <div
          className="hover-item"
          style={{
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: location.pathname === "/contact" ? "#f0f0f0" : "",
          }}
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
