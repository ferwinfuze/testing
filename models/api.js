const { Client } = require("pg");
require("dotenv").config();

const queryTestDb = (query) => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "training_db",
    password: process.env.DBPASSWORD,
    port: 5432,
  });

  client.connect(function (err) {
    if (err) throw err;
    console.log("connected");
  });

  return new Promise((resolve, reject) => {
    client.query(query, (error, results) => {
      if (error) reject(error);
      else {
        client.end();
        return resolve(results);
      }
    });
  });
};

const list = () => {
  return queryTestDb("SELECT * FROM training_table");
};

const read = (id) => {
  return queryTestDb(`SELECT * FROM training_table WHERE id=${id}`);
};

const create = (body) => {
  return queryTestDb(
    `INSERT INTO training_table (name, value) VALUES ('${body.name}', ${body.value})`
  );
};

const update = (id, body) => {
  return queryTestDb(
    `UPDATE training_table SET name = '${body.name}', value = ${body.value} WHERE id = ${id}`
  );
};

const dbDelete = (id) => {
  return queryTestDb(`DELETE FROM training_table WHERE id = ${id}`);
};

module.exports = {
  list,
  read,
  create,
  update,
  dbDelete,
};
