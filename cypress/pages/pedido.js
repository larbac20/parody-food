class pedido  {
    pedidoRestaurante(pedido) {

    cy.visit('/')

    cy.contains('.btn', 'Estou com fome!').click()
    cy.get('.search-link > .fa').click()
    cy.get('input[formcontrolname="searchControl"]').type(pedido.restaurant)
    cy.contains('.place-info-box-text', 'Debuger King').click()
    cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
    cy.get(':nth-child(2) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
    cy.get(':nth-child(3) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
    cy.contains('.btn', 'Fechar Pedido').click()

    cy.get('input[formcontrolname="name"]').type(pedido.nome)
    cy.get('input[formcontrolname="email"]').type(pedido.email)
    cy.get('input[formcontrolname="emailConfirmation"]').type(pedido.email)
    cy.get('input[formcontrolname="address"]').type(pedido.endereco)
    cy.get('input[formcontrolname="number"]').type(pedido.numero)
    cy.get(':nth-child(1) > label > .iradio_flat-red > .iCheck-helper').click()
    cy.get('.col-xs-12 > .btn').click()
    cy.get('h2').should('contain', 'Pedido Conluído')
    cy.get('mt-rating > :nth-child(5)').click()
    cy.get('p').should('contain', 'Obrigado pela sua avaliação!')

    }
}

export default new pedido