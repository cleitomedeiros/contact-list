import perro from "../imagenes/perro.png";

const Contacto = ({ contacto, setContacto, eliminarContacto }) => {
  const { nombre, ciudad, telefono, email, id } = contacto;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este contacto?");
    if (respuesta) {
      eliminarContacto(id);
    }
  };

  return (
    <div className="m-3 flex flex-col items-center">
        <img src={perro} className="w-24 h-24 rounded-full" />
      
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        {""}
        <span className="font-bold mb-3 text-gray-700 uppercase">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        <span className="material-symbols-outlined">location_on</span> {""}
        <span className="font-normal normal-case">{ciudad}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        <span className="material-symbols-outlined">phone_enabled</span> {""}
        <span className="font-normal normal-case">{telefono}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        <span className="material-symbols-outlined">mail</span> {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10  "
          onClick={() => setContacto(contacto)}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button onClick={handleEliminar} type="button" className="py-2 px-10  ">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

export default Contacto;
