//import userEvent from "@testing-library/user-event";
import React from "react";
import "../components/style/Index.css";
import logo from "../components/img/logo.png";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Index = () => {
  const [recibo, setRecibo] = React.useState([]);
  React.useEffect(() => {
    //console.log("useEffect");
    obtenerRec();
  }, []);

  const obtenerRec = async () => {
    const data = await fetch("http://localhost:3001/recibo");
    const rec = await data.json();
    //console.log(rec);
    setRecibo(rec);
  };

  return (
    <div className="container">
      <div className="container-principal">
        <img src={logo} alt="Logo" className="container-logo" />
      </div>
      <h1 className="container-titulo">Listado de recibos</h1>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Titular</th>
            <th>Peso</th>
            <th>Fecha Creado</th>
            <th>Precio</th>
            <th>Precio U.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {recibo.map((item) => (
            <tr>
              <td>{item.ESTADO}</td>
              <td>{item.TITULAR}</td>
              <td>{item.PESO}</td>
              <td>{item.FECHA_CREADO}</td>
              <td>{item.PRECIO}</td>
              <td>{item.PRECIO_U}</td>
              <td className="container-button">
                <Link to={`/recibo/${item.CONSECUTIVOS}`}>
                  <Button variant="success">Editar</Button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Index;
