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
        {/* Example of adding a splat route (wildcard route) */}
        <Route
          path="/*"
          future={{ v7_relativeSplatPath: true }} // Enable the flag here
        />
      </Routes>
    </div>
  );
}

export default App;
