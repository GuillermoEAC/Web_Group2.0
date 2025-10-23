// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";
import Nosotros from "./pages/nosotros";
import Proyectos from "./pages/proyectos.jsx";
import Error404 from "./pages/404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="proyectos" element={<Proyectos />} />

        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
