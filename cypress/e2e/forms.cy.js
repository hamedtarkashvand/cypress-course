describe('testing form page', () => {
  beforeEach(() => {
   // cy.visit('/forms');
  });

  it('should this page have header content', () => {
    cy.visit('/forms').then(() => {
      //cy.wait(5000);
      cy.contains(/Testing Forms/i);
      cy.getDataTest('subscribe-field').find('input').as('input');

      cy.get('@input').type('hamed@gmail.com');
      cy.contains(/Successfully subbed: hamed@gmail.com!/i).should('not.exist');
      cy.get("[data-test='subscribe-button']").click();
      cy.contains(/Successfully subbed: hamed@gmail.com!/i).should('exist');
      cy.wait(3000);
      cy.contains(/Successfully subbed: hamed@gmail.com!/i).should('not.exist');
      cy.get('@input').type('hamed@gmail.io');
      cy.get("[data-test='subscribe-button']").click();
      cy.contains(/Invalid email: hamed@gmail.io!/i).should('exist');
      cy.wait(3000);
      cy.get("[data-test='subscribe-button']").click();
      cy.contains(/fail!/i).should('exist');
      cy.wait(3000);
      cy.contains(/fail!/i).should('not.exist');
    });
  });
});
