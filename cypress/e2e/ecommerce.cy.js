describe('E2E - Automation Exercise', () => {
  it('Deve acessar o site, entrar na aba de produtos e adicionar um produto ao carrinho', () => {
    cy.visit('/');

    // Valida que o site carregou
    cy.get('a[href="/products"]').click();

    // Espera os produtos carregarem
    cy.get('.features_items').should('exist');

    // Clica no primeiro botão de "Add to cart"
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();

    // Valida que apareceu o modal de confirmação
    cy.get('#cartModal').should('be.visible');
  });
});
