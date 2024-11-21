import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Register from "./pages/auth/Register";
import Loggin from "./pages/auth/Loggin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={
         <ProtectedRoute>

          <HomePages />
         </ProtectedRoute>
         
         } />
        <Route path="/login" element={<Loggin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" future={{ v7_relativeSplatPath: true }} />
      </Routes>
    </>
  );
}

export default App;
