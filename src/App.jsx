import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UndanganSatu from "./pages/pamflet/weddingsatu"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/undangan" element={<UndanganSatu />} />
      </Routes>
    </BrowserRouter>
  );
}   

export default App;
