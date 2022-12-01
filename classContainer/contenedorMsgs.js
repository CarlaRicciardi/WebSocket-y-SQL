const { options } = require('../options/sqlite3.js');
const knex = require('knex')(options);

class ContenedorMsgs {
  constructor(table) {
    this.table = table;
  }

  async getAll() {
    const msgs = await knex(this.table)
      .select('*')
      .then(() => {
        if (msgs.length > 0) {
          return msgs;
        } else {
          return 'no hay mensajes';
        }
      })
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }

  async save(msg) {
    await knex(this.table)
      .insert({ msg })
      .then(() => console.log('pude ingresar un mensaje'))
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }
}

module.exports = ContenedorMsgs;
