const express = require("express");
const app = express();
const os = require('os')

let customers = [ 
  { id: 1, name: 'Mary Smith', accounts: 0 },
  { id: 2, name: 'Maria Galena', accounts: 0 },
  { id: 3, name: 'Mike Jones', accounts: 1 },
  { id: 4, name: 'Jolene Upton', accounts: 2 },
  { id: 5, name: 'Frank Simpson', accounts: 79 },
  { id: 6, name: 'George Lee', accounts: 62 },
  { id: 7, name: 'Nick Charm', accounts: 27 },
  { id: 8, name: 'Karen Thomas', accounts: 14 },
  { id: 9, name: 'Johan Krebs', accounts: 3 },
  { id: 10, name: 'Darlene Phillips', accounts: 7 },
];

app.get('/', (req, res) => {
  res.json({ info: 'Node.js and Express on ' + `${os.arch}` })
})

 
app.get('/customers', (req, res) => {
  res.json(customers);
});

app.get('/customers/:id', (req, res) => {
  res.json(customers[req.params.id-1]);
});

app.post('/customers/:id', (req, res) => {
  res.json("POSTed");
});

app.put('/customers/:id', (req, res) => {
  res.json("PUT");
});

app.patch('/customers/:id', (req, res) => {
  res.json("PATCHed");
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));
