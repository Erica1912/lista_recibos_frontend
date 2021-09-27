import React from "react";
import { useParams } from "react-router";
import "../components/style/Index.css";
import logo from "../components/img/logo.png";
import { Table, Form, Button } from "react-bootstrap";
import moment from "moment";


const Recibo = () => {
  const { id } = useParams();
  const [datos, setDatos] = React.useState({});

  console.log(datos);
  React.useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(`http://localhost:3001/recibo/${id}`);
      const rec = await data.json();
      setDatos(rec[0]);
    };
    obtenerDatos();
  }, [id]);
 
    const fecCrea =  moment(datos.FECHA_CREADO).format('YYYY-MM-DD');    
    const given = moment(fecCrea, "YYYY-MM-DD");
    const current = moment().startOf('day');
    
    //Difference in number of days
   console.log( moment.duration(current.diff(given)).asDays())
   console.log(fecCrea, given, 'hola')
   

  return (
    <div className="container">
      <div className="container-principal">
        <img src={logo} alt="Logo" className="container-logo" />
        <h1 className="container-titulo">Recibo</h1>
      </div>
      <div className="container-header">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>CONSECUTIVO</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{datos.CONSECUTIVOS}</td>
              <td>{datos.ESTADO}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="container-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titular</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.TITULAR}
              value={datos.TITULAR}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.PESO}
              value={datos.PESO}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha Creado</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.FECHA_CREADO}
              value={datos.FECHA_CREADO}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.PRECIO}
              value={datos.PRECIO}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio unidad(kg)</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.PRECIO_U}
              value={datos.PRECIO_U}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Creado por</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.NOMBRE_USUARIO}
              value={datos.NOMBRE_USUARIO}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="email"
              placeholder={datos.DIRECCION}
              value={datos.DIRECCION}
            />
          </Form.Group>

          <Button variant="success" type="Guardar">
            Submit
          </Button>
          <Button variant="success" type="Eliminar">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Recibo;
