const api = require("../models/api");

const list = async (req, res) => {
  const data = await api.list();

  console.log(data);

  res.send(data.rows);
};

const read = async (req, res) => {
  const id = req.params.id;

  const data = await api.read(id);

  console.log(data);

  res.send(data.rows);
};

const create = async (req, res) => {
  const body = req.body;

  const data = await api.create(body);

  console.log(data);

  res.send(data);
};

const update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const data = await api.update(id, body);

  console.log(data);

  res.send(data.rows);
};

const dbDelete = async (req, res) => {
  const id = req.params.id;

  const data = await api.dbDelete(id);

  console.log(data);

  res.send(data.rows);
};

module.exports = {
  list,
  read,
  create,
  update,
  dbDelete,
};
