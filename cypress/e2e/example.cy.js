describe('Various examples', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });

  it('multi-page testing', () => {
    // cy.visit('/').pause()
    cy.getDataTest('nav-overview').click();
    cy.location('pathname').should('equal', '/overview');

    cy.getDataTest('nav-forms').should('exist').click();
    cy.location('pathname').should('equal', '/forms');

    cy.getDataTest('nav-best-practices').click();
    cy.location('pathname').should('equal', '/best-practices');

    cy.getDataTest('nav-examples').click();
    cy.location('pathname').should('equal', '/examples');
  });

  it('intercept ', () => {
    cy.wait(3000);
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture: 'example.json',
    });
    cy.getDataTest('post-button').should('exist').click();
  });

  it.only('Grudge', () => {
    cy.contains(/Add Some Grudges/i).should('exist');
    cy.wait(2000);
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0);
    });
    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('some grudge');
    });

    cy.getDataTest('grudge-button').click();
    cy.contains(/Add Some Grudges/i).should('not.exist');
    cy.contains(/Grudges/i).should('exist');

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1);
    });

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('hamed grudge');
    });

    cy.getDataTest('grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2);
      cy.get('li').its(0).should('contain.text', 'some grudge');
    });
// remove list
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li')
        .its(0)
        .within(() => {
          cy.get('button').click();
        });
    });

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1);
    });
      //   clear list
      cy.getDataTest('grudge-clear-button').click();
       cy.getDataTest('grudge-list').within(() => {
         cy.get('li').should('have.length', 0);
       });
      
      cy.contains(/Add Some Grudges/i).should('exist');
      cy.contains(/Grudges/i).should('not.exist');
  });
});
