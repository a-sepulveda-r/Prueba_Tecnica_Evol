import React from 'react';

export default function Table({
  clientes,
  handleEliminarMedidor,
  handleEliminarCliente,
  handleSeleccionarCliente,
}) {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3'
            >
              rut
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Nombre
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Dirección
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Medidores
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr
              key={cliente.rut}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {cliente.rut}
              </td>
              <td className='px-6 py-4'>{cliente.nombre}</td>
              <td className='px-6 py-4'>{cliente.direccion}</td>
              <td className='px-6 py-4'>
                {cliente.medidores &&
                  cliente.medidores.map((medidor) =>
                    medidor && medidor.nombre ? (
                      <div key={medidor.codigo}>
                        <p>Medidor: {medidor.nombre}</p>
                        <button
                          onClick={() =>
                            handleEliminarMedidor(cliente.rut, medidor.codigo)
                          }
                          className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-0.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                        >
                          Eliminar Medidor
                        </button>
                      </div>
                    ) : null
                  )}
              </td>
              <td className='px-6 py-4  '>
                <div className='flex gap-x-4'>
                  <div>
                    <button
                      onClick={() => handleEliminarCliente(cliente.rut)}
                      className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >
                      Eliminar Cliente
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleSeleccionarCliente(cliente)}
                      className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >
                      Actualizar Cliente
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
