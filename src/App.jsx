import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Gallery</Link> | <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
