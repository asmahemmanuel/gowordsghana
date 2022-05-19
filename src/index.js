import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Signin from "./auth/signin/signin.jsx";
import Signup from "./auth/signup/index.jsx"
import ProtectedRoutes from "./routes/ProtectedRoute.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route element={<ProtectedRoutes/>}>
     <Route path="/" element={<App />} />
  </Route>
   <Route path="/login" element={<Signin />} />
   <Route path="/signup" element={<Signup />} />
 </Routes>
 </BrowserRouter>
);