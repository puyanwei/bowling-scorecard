// context('Refreshing page', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:8080/');
//     });
// });

describe('Check Title', () => {
    it('Title should be "Bowling Scorecard"', () => {
        cy.visit('http://localhost:8080/');
        cy.title().should('include', 'Bowling Scorecard');
    });
});

describe('Click button', () => {
    it('Click the button', () => {
        cy
            .visit('http://localhost:8080/')
            .get('#Btn0')
            .click()
            .get('#Btn3')
            .click()
            .get('#totalOne')
            .contains('3');
    });
});
