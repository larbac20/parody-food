import pedido from '../pages/pedido.js'

describe('Pedido', function () {

    beforeEach(function () {
        cy.fixture('dados.json').then((d) => {
            this.dados = d
        })
    })

    it('Cadastro de Pedidos', function () {



        pedido.pedidoRestaurante(this.dados.pedido)

    })

})