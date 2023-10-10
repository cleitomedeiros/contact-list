import Contacto from "./Contacto";

const ListadoContactos = ({ contactos, setContacto, eliminarContacto }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {contactos && contactos.length ? (
        <>
          <h2 className="font-blank text-3xl text-center">Lista Contactos</h2>
          

          { contactos.map(( contacto ) => (
            <Contacto key={ contacto.id } 
            contacto={ contacto } 
            setContacto={ setContacto }
            eliminarContacto={ eliminarContacto }
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-blank text-3xl text-center">No hay contactos</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando contactos {""}
            <span className="text-indigo-600 font-bold">y aparecera en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoContactos;
