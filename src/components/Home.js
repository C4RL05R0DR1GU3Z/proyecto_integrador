import React from "react";
import Header from "./Header";
import Inicio from "./Inicio";
import { useParams } from "react-router-dom";

const Home = () => {
  const { user } = useParams();
  return (
    <div>
      <Header />
      <h1>Bienvenido {user} a CR SERVITECA</h1>
      <Inicio />
    </div>
  );
};

export default Home;
