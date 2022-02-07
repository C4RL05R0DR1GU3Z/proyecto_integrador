import React from "react";
import Header from "./Header";
import Inicio from "./Inicio";
import { useParams } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";

const Home = () => {
  const { user } = useParams();
  return (
    <div>
      <Header />
      <Center>
        <Heading size="xl">Bienvenido {user} a CR SERVITECA</Heading>
      </Center>
      <Inicio />
    </div>
  );
};

export default Home;
