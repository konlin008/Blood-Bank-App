import { Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;