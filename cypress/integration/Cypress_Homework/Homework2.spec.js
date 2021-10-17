
describe('Exercise 1 - Type and send keys', () => {
    context('Email field state', () =>{
        beforeEach(() => {
            //cy.visit('./app/challenges/actions.html')
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Email is typed into DOM element', () => {
            cy.get('#email1')
                .type('fake@email.com')
                .should('have.value', 'fake@email.com')
        })

        it('Typed email is now empty after delete key is sent', () => {
            //cy.get('#email1').type('{ctrl+a}fake@email.com', { release: false }).type('{del}').should('have.value', '')
            cy.get('#email1')
                .type('fake@email.com')
                .type('{selectall}')
                .type('{del}')
                .should('have.value', '')
        })
    })

    context('Disabled text area state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Disabled text area contains "Text typed inside disabled textarea"', () => {
            cy.get('.action-disabled')
                .type('Text typed inside disabled textarea', {force : true})
                .should('have.value', 'Text typed inside disabled textarea')
        })
    })
})

describe('Exercise 2 - Focus and blur', () => {
    context('Focus password field state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Focus: Password input border and label has orange color', () => {
            cy.get('#password1').focus()
                .should('have.css', 'border-color', 'rgb(255, 165, 0)')
                .prev().should('have.attr', 'style', 'color: orange;')
        })
    })

    context('Blur full name field state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Blur: Full Name input border and label has red color', () => {
            cy.get('#fullName1').focus()
                .blur()
                .should('have.css', 'border-color', 'rgb(255, 0, 0)')
                .prev().should('have.attr', 'style', 'color: red;')
        })
    })
})

describe('Exercise 3 - Submitting a form', () => {
    context('Submit form state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Submit: After submitting form, "Your form has been submitted!" is displayed', () => {
            cy.get('.action-form')
            .find('#couponCode1')
            .type('50% OFF')
            .type('{enter}')

            cy.get('.action-form')
            .next()
            .should('contain', 'Your form has been submitted!')
        })
    })
})

describe('Exercise 5 - Double click element', () => {
    context('Double click element state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Double click: input element is displayed after double clicking on "Double click to edit" text element', () => {
            cy.get('.action-div')
            .dblclick()
            .next()
            .should('be.visible')
        })
    })
})

describe('Exercise 6 - Right click element', () => {
    context('Right click element state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Right click: input element is displayed after right clicking on "Right click to edit" text element', () => {
            cy.get('.rightclick-action-div')
            .rightclick()
            .next()
            .should('be.visible')
        })
    })
})
