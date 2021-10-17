describe('Force state', () =>{
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Force: a popover is displayed after forcing click on button', () => {
        cy.get('.action-opacity>.btn')
        .click({ force: true })
        
        cy.get('.popover.fade.left.in')
        .should('be.visible')
    })
})