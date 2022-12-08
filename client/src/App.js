import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';
import List from './List/List';
import Home from './pages/home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Watch from './pages/Watch/Watch';
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return <>
       <BrowserRouter>
    <Routes>
    <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />}/> 
    <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />}/>
    <Route path="/" element={currentUser ? <Home type={"Movies"}/> : <Navigate to="/login" />}/>
    <Route path="/watch" element={currentUser ? <Navigate to="/watch" /> : <Login />}/>
    <Route path="/movies" element={currentUser ? <Home type={"Movies"}/> : <Navigate to="/login" />}/>
    <Route path="/series" element={currentUser ? <Home type={"Series"}/> : <Navigate to="/login" />}/>
    <Route path="/popular" element={currentUser ? <Home type={"Popular"}/> : <Navigate to="/login" />}/> 
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
