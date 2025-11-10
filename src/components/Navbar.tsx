import React from "react";
import { Card } from "./Card";

export function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);

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
              <div>
                <div
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                  onClick={() => setShowMenu(false)}
                >
                  Close
                </div>
                <div style={{ marginBottom: "10px" }}>About</div>
                <div style={{ marginBottom: "10px" }}>Projects</div>
                <div>Contact</div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
