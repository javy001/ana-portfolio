import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

export function PathRestore() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on the root path
    if (location.pathname === "/" && location.search) {
      // Remove the leading "?" and get the path
      const path = location.search.slice(1); // e.g., "about" or "about/team"
      // Only redirect if the path looks valid
      if (path && !path.includes("=")) {
        navigate("/" + path + location.hash, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}