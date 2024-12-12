const { createRequire } = require('node:module');
require = createRequire(__filename); 
const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000

const LTASolverV2 = require("./lib/LTASolverV2");

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('OK')
})

app.post('/solve', LTASolverV2.getCar);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})