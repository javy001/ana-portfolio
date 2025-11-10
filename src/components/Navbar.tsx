import React from "react";
import { Card } from "./Card";
import { useGetWindowWidth } from "../hooks/useGetWindowWidth";
import { useNavigate, Outlet } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const windowWidth = useGetWindowWidth();
  const isDesktop = windowWidth >= 1024;

  React.useEffect(() => {
    if (!showMenu) return;

    function handleClickOutside(event: MouseEvent) {
      // If menuRef exists and the click target is not inside menuRef
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div>Ariana Quintero</div>
          {isDesktop && (
            <>
              <div>|</div>
              <div>myemail@example.com</div>
            </>
          )}
        </div>
        <div style={{ cursor: "pointer", position: "relative" }}>
          <div
            onClick={() => {
              setShowMenu(true);
            }}
          >
            Menu
          </div>
          {showMenu && (
            <div
              ref={menuRef}
              style={{
                position: "absolute",
                top: "30px",
                right: "0",
                fontWeight: "200",
              }}
            >
              <Card>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/ana-portfolio");
                    }}
                  >
                    Home
                  </div>
                  <div
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/ana-portfolio/about");
                    }}
                  >
                    About
                  </div>
                  <div
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/ana-portfolio/projects");
                    }}
                  >
                    Projects
                  </div>
                  <div
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/ana-portfolio/contact");
                    }}
                  >
                    Contact
                  </div>
                  <div
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/ana-portfolio/contact");
                    }}
                  >
                    Test
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
