import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Register from "./pages/auth/Register";
import Loggin from "./pages/auth/Loggin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<Loggin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" future={{ v7_relativeSplatPath: true }} />
      </Routes>
    </>
  );
}

export default App;
