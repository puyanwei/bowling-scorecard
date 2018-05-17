describe('Check Title', () => {
    it('Title should be "Bowling Scorecard"', () => {
        cy.visit('http://localhost:8080/');
        cy.title().should('include', 'Bowling Scorecard');
    });
});
