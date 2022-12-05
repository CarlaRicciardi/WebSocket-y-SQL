const { options } = require('../options/sqlite3.js');
const knex = require('knex')(options);

class ContenedorMsgs {
  constructor(table) {
    this.table = table;
  }

  async getAll() {
    try {
      const msgs = await knex(this.table).select('*');
      return msgs.length > 0 ? msgs : [];
    } catch (err) {
      console.log(err);
    }
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
