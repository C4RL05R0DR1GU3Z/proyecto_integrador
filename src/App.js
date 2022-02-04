//import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ingresar from "./components/Ingresar";
import Home from "./components/Home";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import logo from "../src/components/img/logo.jpg";
function App() {
  return (
    <Router>
      <div
        style={{
          margin: 0,
          backgroundImage: `url (${logo})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path={"/"} element={<Ingresar />} />
          <Route path={"/Inicio"} element={<Inicio />} />
          <Route path={"/home/:user"} element={<Home />} />
          <Route path={"formulario"} element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
