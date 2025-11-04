import Banco from '../config/database.js'

class Produto {
    constructor() {
        this.model = Banco.db.define('produtos', {
            id: {
                type: Banco.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Banco.db.Sequelize.STRING
            },
            disponivel: {
                type: Banco.db.Sequelize.BOOLEAN
            },
            qtde: {
                type: Banco.db.Sequelize.INTEGER
            }
        })
    }
}

export default new Produto().model