import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import { PathRestore } from "./components/PathRestore";
import { Contact } from "./components/Contact";
import { useGetWindowWidth } from "./hooks/useGetWindowWidth";
import { GraphicDesign } from "./components/GraphicDesign";
import { Illustration } from "./components/Illustration";

export const AppContext = React.createContext({
  isDesktop: true,
});
export function App() {
  const windowWidth = useGetWindowWidth();
  const isDesktop = windowWidth >= 1024;
  return (
    <AppContext.Provider value={{ isDesktop }}>
      <BrowserRouter basename="/ana-portfolio">
        <PathRestore />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="graphic-design" element={<GraphicDesign />} />
            <Route path="illustration" element={<Illustration />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
