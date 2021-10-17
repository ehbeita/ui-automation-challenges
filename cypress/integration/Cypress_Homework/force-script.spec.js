describe('Force state', () =>{
    beforeEach(() => {
        cy.visit('../app/challenges/actions.html')
    })

    it('Force: a popover is displayed after forcing click on button', () => {
        cy.get('.action-opacity>.btn')
        .click({ force: true })
        
        cy.get('.popover.fade.left.in')
        .should('be.visible')
    })
})