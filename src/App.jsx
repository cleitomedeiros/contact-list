import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoContactos from "./components/ListadoContactos";

function App() {

  const [contactos, setContactos] = useState([]);
  const [contacto, setcontacto] = useState({});

  useEffect(() => {
    const obtenerLs = () => {
      const contactosLs = JSON.parse(localStorage.getItem('contactos' )) || [];
      setContactos(contactosLs)
    }
    obtenerLs();
  }, []);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify( contactos ));
  }, [contactos])

  const eliminarContacto = id => {
    const contactosEditar = contactos.filter(contacto => contacto.id !== id );
    setContactos(contactosEditar);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario 
        pacientes={ contactos } 
        setPacientes={ setContactos }
        //Ok+++
        paciente={ contacto } 
        />

        <ListadoContactos 
        contactos={ contactos }
        setContacto={ setcontacto }
        eliminarContacto={ eliminarContacto }
        />
      </div>
    </div>
  );
}

export default App;
