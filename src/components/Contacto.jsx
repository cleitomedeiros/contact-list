const Contacto = ( { contacto, setContacto, eliminarContacto } ) => {
    
const { nombre, ciudad, telefono, email, id } = contacto

const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este contacto?');
    if(respuesta) {
        eliminarContacto( id )
    }
}

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{ nombre }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Ciudad: {''}
                    <span className="font-normal normal-case">{ ciudad }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Teléfono: {''}
                    <span className="font-normal normal-case">{ telefono }</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">{ email }</span>
                </p>
                
                <div className="flex justify-between mt-10">
                    <button 
                        type="button"
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={()=>setContacto( contacto )}
                        >Editar</button>
                    <button
                        onClick={ handleEliminar }
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        >Eliminar</button>
                </div>
            </div>
    )
}

export default Contacto;