const { options } = require('../options/mysql.js');
const knex = require('knex')(options);

class ContenedorProd {
  constructor(table) {
    this.table = table;
  }

  async save(product) {
    await knex(this.table)
      .insert({ product })
      .then(() => console.log('pude ingresar fruta'))
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }

  async getById(id) {
    const productById = await knex
      .from(this.table)
      .select('id', '=', id)
      .then(() => {
        if (productById) {
          return productById;
        } else {
          return 'no hay producto con ese id';
        }
      })
      .catch((err) => console.log('hubo un error al traer producto por id', err))
      .finally(() => knex.destroy());
  }

  async getAll() {
    await knex(this.table)
      .select('*')
      .then((res) => {
        if (res.length) {
          return res;
        } else {
          return 'no hay productos';
        }
      })
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }

  async deleteById(id) {
    const productById = await knex
      .from(this.table)
      .where('id', '=', id)
      .del()
      .then(() => {
        if (productById) {
          return 'producto eliminado';
        } else {
          return 'no hay producto con ese id';
        }
      })
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }

  async deleteAll() {
    await knex
      .from(this.table)
      .del()
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }

  async update(id, title, price, thumbnail) {
    await knex
      .from(this.table)
      .where('id', '=', id)
      .update({ title: title, price: price, thumbnail: thumbnail })
      .then(() => console.log('producto actualizado'))
      .catch((e) => console.log(e))
      .finally(() => knex.destroy());
  }
}

module.exports = ContenedorProd;
