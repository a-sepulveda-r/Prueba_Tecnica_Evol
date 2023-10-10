import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import ClientUpdate from './ClientUpdate';
import ClienteForm from './ClienteForm';

function App() {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [nuevoCliente, setNuevoCliente] = useState({
    rut: '',
    nombre: '',
    direccion: '',
    medidor: {
      codigo: '',
      nombre: '',
      fechaCreacion: '',
      descripcion: '',
    },
  });

  const [rutActualizacion, setRutActualizacion] = useState('');
  const [nombreActualizacion, setNombreActualizacion] = useState('');
  const [direccionActualizacion, setDireccionActualizacion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleNuevoClienteChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('medidor.')) {
      const medidorField = name.split('.')[1];
      setNuevoCliente({
        ...nuevoCliente,
        medidor: {
          ...nuevoCliente.medidor,
          [medidorField]: value,
        },
      });
    } else {
      setNuevoCliente({
        ...nuevoCliente,
        [name]: value,
      });
    }
  };

  const handleCrearCliente = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/clientes', nuevoCliente);
      alert('Cliente y medidor creados con éxito.');
      const response = await axios.get('http://localhost:4000/clientes');
      setClientes(response.data);
      setNuevoCliente({
        rut: '',
        nombre: '',
        direccion: '',
        medidor: {
          codigo: '',
          nombre: '',
          fechaCreacion: '',
          descripcion: '',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminarCliente = async (rut) => {
    try {
      await axios.delete(`http://localhost:4000/clientes/${rut}`);
      const response = await axios.get('http://localhost:4000/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminarMedidor = async (clienterut, medidorCodigo) => {
    try {
      await axios.delete(
        `http://localhost:4000/clientes/${clienterut}/medidores/${medidorCodigo}`
      );
      const response = await axios.get('http://localhost:4000/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActualizarCliente = async () => {
    try {
      await axios.put(`http://localhost:4000/clientes/${rutActualizacion}`, {
        nombre: nombreActualizacion,
        direccion: direccionActualizacion,
      });
      const updatedClientes = clientes.map((cliente) => {
        if (cliente.rut === rutActualizacion) {
          return {
            ...cliente,
            nombre: nombreActualizacion,
            direccion: direccionActualizacion,
          };
        }
        return cliente;
      });
      setClientes(updatedClientes);
      setSelectedCliente(null);
      setRutActualizacion('');
      setNombreActualizacion('');
      setDireccionActualizacion('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSeleccionarCliente = (cliente) => {
    setSelectedCliente(cliente);
    setRutActualizacion(cliente.rut);
    setNombreActualizacion(cliente.nombre);
    setDireccionActualizacion(cliente.direccion);
    setNuevoCliente({
      rut: '',
      nombre: '',
      direccion: '',
      medidor: {
        codigo: '',
        nombre: '',
        fechaCreacion: '',
        descripcion: '',
      },
    });
  };

  const handleCancelarActualizacion = () => {
    setSelectedCliente(null);
    setRutActualizacion('');
    setNombreActualizacion('');
    setDireccionActualizacion('');
    setNuevoCliente({
      rut: '',
      nombre: '',
      direccion: '',
      medidor: {
        codigo: '',
        nombre: '',
        fechaCreacion: '',
        descripcion: '',
      },
    });
  };

  return (
    <div>
      <h2 className='my-4 text-xl font-medium'>Lista de Clientes</h2>
      <Table
        clientes={clientes}
        handleEliminarMedidor={handleEliminarMedidor}
        handleEliminarCliente={handleEliminarCliente}
        handleSeleccionarCliente={handleSeleccionarCliente}
      />

      {selectedCliente && (
        <ClientUpdate
          rutActualizacion={rutActualizacion}
          setRutActualizacion={setRutActualizacion}
          nombreActualizacion={nombreActualizacion}
          setNombreActualizacion={setNombreActualizacion}
          direccionActualizacion={direccionActualizacion}
          setDireccionActualizacion={setDireccionActualizacion}
          handleActualizarCliente={handleActualizarCliente}
          handleCancelarActualizacion={handleCancelarActualizacion}
        />
      )}

      <ClienteForm
        handleCrearCliente={handleCrearCliente}
        nuevoCliente={nuevoCliente}
        handleNuevoClienteChange={handleNuevoClienteChange}
      />
    </div>
  );
}

export default App;
