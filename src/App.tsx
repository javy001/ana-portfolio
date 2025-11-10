import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
