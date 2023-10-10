import React, { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ contactos, setContactos, contacto }) => {

  const [nombre, setNombre] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");

  const [error, setError] = useState(false);

  // Efeito para carregar dados do paciente se estiver editando
  useEffect(() => {
    if (contacto && Object.keys( contacto ).length > 0) 
    {
        setNombre( contacto.nombre );
        setCiudad( contacto.ciudad );
        setEmail( contacto.email );
        setTelefono( contacto.telefono );
    }
  }, [ contacto ]);

  // Função para gerar um ID único
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    return random;
  }

  // Função para limpar o formulário
  const limparFormulario = () => {
    setID("");
    setNombre("");
    setCiudad("");
    setEmail("");
    setTelefono("");
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação do formulário
    if ([ nombre, ciudad, email, telefono ].includes("")) {
      console.log("Há pelo menos um campo vazio");
      setError(true);
      return;
    }
    setError(false);

    const objetoContacto = {
      nombre,
      ciudad,
      email,
      telefono
    };

    if(contacto && contacto.id) {
      //Actualizamos los valores de la base de datos con lo que hay en nuestro state
      objetoContacto.id = contacto.id

      const contactosEditar = contactos.map(contactoState => 
      contactoState.id === contacto.id ? objetoContacto : contactoState ) 

      setContactos( contactosEditar )
    } else {
      // Adicionamos lista de usuario
      objetoContacto.id = generarId();
      setContactos([ ...contactos, objetoContacto ]);   
      
    }

    // Limpiar formulario despues de enviar
    limparFormulario();
    contacto.id = "";
  };

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-blank text-3xl text-center">Añade Contactos</h2>

      
      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre y Apellidos
          </label>

          <input
            id="Nombre"
            type="text"
            placeholder="Nombre y Apellidos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre( e.target.value )}
          />
        </div>

        <div className="md-5">
          <label
            htmlFor="contacto"
            className="block text-gray-700 uppercase font-bold"
          >
            Ciudad
          </label>
          
          <input
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ciudad}
            onChange={(e) => setCiudad( e.target.value )}
          />
        </div>
        <div className="md-5">
          <label
            htmlFor="contacto"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail( e.target.value )}
          />
        </div>
        <div className="md-5">
          <label
            htmlFor="contacto"
            className="block text-gray-700 uppercase font-bold"
          >
            Telefono
          </label>

          <input
            id="telefono"
            type="mobil"
            placeholder="Teléfono"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={(e) => setTelefono( e.target.value )}
          />
        </div>
        <div className="md-5">
          
          
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={contacto && contacto.id ? 'Editar contacto' : 'Agregar contacto'}
            
          />
        </div>
      </form>
    </div>
  );
}

export default Formulario;