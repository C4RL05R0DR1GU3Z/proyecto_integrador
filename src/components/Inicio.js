import { Heading } from "@chakra-ui/react";

function Inicio() {
  return (
    <div className="container">
      <Heading size="lg" p={5}>
        ¿Quiénes Somos?
      </Heading>
      <p>
        Somos una empresa líder en el negocio de lubricantes, integrada por
        profesionales de larga trayectoria y experiencia tanto técnica como
        gerencial en la industria automotriz.
      </p>
      <hr />
      <Heading size="lg" p={5}>
        Misión
      </Heading>
      <p>
        CR SERVITECA es una empresa dedicada al servicio de la lubricación
        relacionada con el sector automotriz, que comercializa productos de
        óptima calidad, garantizando un excelente servicio, confidencialidad, y
        preservación ambiental.
        <br /> Estrucuturamos el crecimiento permanente de la empresa a través
        del proceso continuo, apoyados en nuestras políticas de calidad.
      </p>
      <Heading size="lg" p={5}>
        Visión
      </Heading>
      <hr />
      <p>
        Ser una empresa de reconocido prestigio con excelencia en sus productos
        y servicios, comprometida con el servicio al cliente, Procesos de mejora
        continua y formación integral de su recurso humano. Mejorando de esta
        manera la rentabilidad se las empresas participativas en este sector,
        creando así entorno altamente eficiente y de costos justos.{" "}
      </p>
    </div>
  );
}
export default Inicio;
