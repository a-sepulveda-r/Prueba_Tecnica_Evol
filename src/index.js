const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const clientesRoutes = require('./routes/clientesRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/', clientesRoutes);

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
