// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './componets/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './componets/Dashboard';
import Admin from './componets/admin';

function App() {
  return (
    <div class="">
      
      < BrowserRouter >
      <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/students" element={<Dashboard name = "student" />} />
            <Route path="/employes" element={<Dashboard name = "employe" />} />
            <Route path="/tourist" element={<Dashboard name = "tourists" />} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
