// src/Mascotas.jsx
import { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotas(data);
      })
  }, []);

  const selectMascota = (mascota) => {
    setSelectedMascota(mascota);
  };

  return (
    <div className="container">
      <h1>Listado de mascotas</h1>
      <hr />
      <Row>
        {mascotas.map((mascota) => (
          <Col key={mascota.id}>
            <div
              onClick={() => selectMascota(mascota)} 
            >
              <img
                src={mascota.foto}
                width={100}    
              />
              <p>{mascota.nombre}</p>
            </div>
          </Col>
        ))}
      </Row>

      
      {selectedMascota && (
        <div>
          <h2>Detalles de la mascota seleccionada:</h2>
          <p><strong>Id:</strong> {selectedMascota.id}</p>
          <p><strong>Nombre:</strong> {selectedMascota.nombre}</p>
          <p><strong>Raza:</strong> {selectedMascota.raza}</p>
          <p><strong>Edad:</strong> {selectedMascota.edad}</p>
          <p><strong>Descripción:</strong> {selectedMascota.descripcion}</p>
        </div>
      )}
    </div>
  );
}

export default Mascotas;
