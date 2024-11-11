import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Register from "./pages/auth/Register";
import Loggin from "./pages/auth/Loggin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Loggin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
