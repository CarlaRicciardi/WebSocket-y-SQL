const { options } = require('./options/sqlite3.js');
const knex = require('knex')(options);

// knex.schema
//   .createTable('msgsTable', (table) => {
//     table.string('name'), table.string('msg'), table.string('fecha');
//   })
//   .then(() => {
//     console.log('tabla creada');
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

let fecha = new Date().toLocaleDateString() + new Date().toTimeString();

knex('msgsTable')
  .insert({ name: 'Carla', msg: 'Hola!!', fecha: fecha })
  .then(() => {
    console.log('logré insertar mensaje');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
