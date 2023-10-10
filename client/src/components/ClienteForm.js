export default function ClienteForm({
  handleCrearCliente,
  nuevoCliente,
  handleNuevoClienteChange,
}) {
  return (
    <form
      onSubmit={handleCrearCliente}
      className='space-y-6 py-4'
    >
      <h2 className='my-4 text-xl font-medium'>Crear Nuevo Cliente</h2>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='rut'
          placeholder='RUT'
          value={nuevoCliente.rut}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='rut'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          RUT
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={nuevoCliente.nombre}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='nombre'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Nombre
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='direccion'
          placeholder='Dirección'
          value={nuevoCliente.direccion}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='direccion'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Dirección
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='medidor.codigo'
          placeholder='Código del Medidor'
          value={nuevoCliente.medidor.codigo}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='medidor.codigo'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Código del Medidor
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='medidor.nombre'
          placeholder='Nombre del Medidor'
          value={nuevoCliente.medidor.nombre}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='medidor.nombre'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Nombre del Medidor
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='medidor.fechaCreacion'
          placeholder='Fecha de Creación del Medidor'
          value={nuevoCliente.medidor.fechaCreacion}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='medidor.fechaCreacion'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Fecha de Creación del Medidor
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='medidor.descripcion'
          placeholder='Descripción del Medidor'
          value={nuevoCliente.medidor.descripcion}
          onChange={handleNuevoClienteChange}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark-text-white dark-border-gray-600 dark-focus-border-blue-500 focus-outline-none focus-ring-0 focus-border-blue-600'
        />
        <label
          htmlFor='medidor.descripcion'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Descripción del Medidor
        </label>
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800'
      >
        Crear Cliente
      </button>
    </form>
  );
}
