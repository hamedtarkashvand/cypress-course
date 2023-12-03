describe('template spec', () => {
 beforeEach(() => {
     cy.visit('/fundamentals');
 })
  
  it('shold have text header passes', () => {
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    );
 
  });

  it('should have correct  at accordion', () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    );
    cy.getDataTest('accordion-item-1', "div[role='button']").click().pause();
    cy.contains(/Your tests will exist in a describe block/i).should(
      'be.visible'
    );
    cy.get("[data-test='accordion-item-1'] div[role='button']").click();
     cy.contains(/Your tests will exist in a describe block/i).should(
       'not.be.visible'
     );
  });
});
