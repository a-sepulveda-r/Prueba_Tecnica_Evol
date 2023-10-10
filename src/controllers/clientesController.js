const pool = require('../db');

const getClientes = async (req, res) => {
  try {
    const query = `
      SELECT c.*, json_agg(m.*) AS medidores
      FROM Cliente c
      LEFT JOIN Medidor m ON c.RUT = m.cliente_id
      GROUP BY c.RUT;
    `;

    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hubo un error al listar los clientes con medidores.' });
  }
};

const crearClienteYMedidor = async (req, res) => {
  const { rut, nombre, direccion, medidor } = req.body;

  try {
    await pool.query(
      'INSERT INTO Cliente (RUT, nombre, direccion) VALUES ($1, $2, $3)',
      [rut, nombre, direccion]
    );

    await pool.query(
      'INSERT INTO Medidor (codigo, nombre, fechaCreacion, descripcion, cliente_id) VALUES ($1, $2, $3, $4, $5)',
      [
        medidor.codigo,
        medidor.nombre,
        medidor.fechaCreacion,
        medidor.descripcion,
        rut,
      ]
    );

    res.json({ message: 'Cliente y medidor creados con éxito.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hubo un error al crear el cliente y el medidor.' });
  }
};

const actualizarCliente = async (req, res) => {
  const rut = req.params.rut;
  const { nombre, direccion } = req.body;

  try {
    await pool.query(
      'UPDATE Cliente SET nombre = $1, direccion = $2 WHERE RUT = $3',
      [nombre, direccion, rut]
    );

    res.json({ message: 'Cliente actualizado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al actualizar el cliente.' });
  }
};

const eliminarClienteYMedidores = async (req, res) => {
  const rut = req.params.rut;

  try {
    await pool.query('DELETE FROM Medidor WHERE cliente_id = $1', [rut]);
    await pool.query('DELETE FROM Cliente WHERE RUT = $1', [rut]);

    res.json({ message: 'Cliente y sus medidores eliminados con éxito.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Hubo un error al eliminar el cliente y sus medidores.' });
  }
};

const eliminarMedidor = async (req, res) => {
  const clienteRut = req.params.clienteRut;
  const medidorCodigo = req.params.medidorCodigo;

  try {
    const medidor = await pool.query(
      'SELECT * FROM Medidor WHERE codigo = $1 AND cliente_id = $2',
      [medidorCodigo, clienteRut]
    );

    if (medidor.rows.length === 0) {
      return res.status(404).json({
        error: 'El medidor no existe o no pertenece al cliente especificado.',
      });
    }

    await pool.query('DELETE FROM Medidor WHERE codigo = $1', [medidorCodigo]);

    res.json({ message: 'Medidor eliminado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al eliminar el medidor.' });
  }
};

module.exports = {
  getClientes,
  crearClienteYMedidor,
  actualizarCliente,
  eliminarClienteYMedidores,
  eliminarMedidor,
};
