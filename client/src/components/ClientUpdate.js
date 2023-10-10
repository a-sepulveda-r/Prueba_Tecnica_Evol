import React from 'react';

export default function ClientUpdate({
  rutActualizacion,
  setRutActualizacion,
  nombreActualizacion,
  setNombreActualizacion,
  direccionActualizacion,
  setDireccionActualizacion,
  handleActualizarCliente,
  handleCancelarActualizacion,
}) {
  return (
    <form className='w-full max-w-lg'>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='rut'
          >
            Rut
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            type='text'
            name='rut'
            placeholder='rut'
            value={rutActualizacion}
            onChange={(e) => setRutActualizacion(e.target.value)}
            id='rut'
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='nombre'
          >
            Nombre
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={nombreActualizacion}
            onChange={(e) => setNombreActualizacion(e.target.value)}
            id='nombre'
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='direccion'
          >
            Dirección
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            type='text'
            name='direccion'
            placeholder='Dirección'
            value={direccionActualizacion}
            onChange={(e) => setDireccionActualizacion(e.target.value)}
            id='direccion'
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-2'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleActualizarCliente}
          >
            Actualizar
          </button>
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <button
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleCancelarActualizacion}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}
