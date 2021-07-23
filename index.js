const express = require("express");
const app = express();

let customers = [ 
  { id: 1, name: 'Mary Smith', accounts: 0 },
  { id: 2, name: 'Maria Galena', accounts: 0 },
  { id: 3, name: 'Mike Jones', accounts: 1 },
  { id: 4, name: 'Jolene Upton', accounts: 2 },
  { id: 5, name: 'Frank Simpson', accounts: 79 },
  { id: 6, name: 'George Lee', accounts: 62 },
  { id: 7, name: 'Nick Charm', accounts: 27 },
  { id: 8, name: 'Karen Thomas', accounts: 14 },
];
 
app.get('/customers', (req, res) => {
  return res.send(customers);
});

app.get('/customers/:id', (req, res) => {
  return res.send(customers[req.params.id-1]);
});

app.post('/customers/:id', (req, res) => {
  return res.send("POSTed");
});

app.put('/customers/:id', (req, res) => {
  return res.send("PUT");
});

app.patch('/customers/:id', (req, res) => {
  return res.send("PATCHed");
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`));
