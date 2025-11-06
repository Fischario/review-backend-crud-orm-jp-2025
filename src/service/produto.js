import Produto from '../model/produto.js';

class ServiceProduto {
    async PegarTodos() {
        return await Produto.findAll()
    }
    async PegarUm(id) {
        const produto = await Produto.findByPk(id)
        return produto
    }
    async Criar(nome, disponivel, qtde) {
        await Produto.create({ nome, disponivel, qtde })
    }
    async Alterar(id, nome, disponivel, qtde) {
        const produto = await Produto.findByPk(id)
        produto.nome = nome || produto.nome
        produto.disponivel = disponivel || produto.disponivel
        produto.qtde = qtde || produto.qtde

        await produto.save()
    }
    async Deletar(id) {
        const produto = await Produto.findByPk(id)
        await produto.destroy()
    }
}

export default new ServiceProduto()