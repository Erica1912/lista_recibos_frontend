//import userEvent from "@testing-library/user-event";
import React from "react";


const Index = () => {
  const [recibo, setRecibo] = React.useState(null);
  React.useEffect(() => {
    //console.log("useEffect");
    obtenerRec()
  }, []);

  const obtenerRec = async () => {
    const data = await fetch("http://localhost:3001/recibo");
    const rec = await data.json();
    //console.log(rec);
    setRecibo(rec)
  };

  return (
    <div className='container'>
    <div className='conainer-titulo'></div>      
      <ul>
          {
            recibo.map(item =>(
                  <li key='item.CONSECUTIVOS'>{item.CONSECUTIVOS}</li>
              ))
          }
      </ul>
    </div>
  );
};

export default Index;
