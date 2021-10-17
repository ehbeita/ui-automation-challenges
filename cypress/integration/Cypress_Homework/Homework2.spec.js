
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

describe('Exercise 4 - Popover and canvas - Multiple clicks and force', () => {
    context('Popover state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Popover: popover element shows up after clicking on "Click to toggle popover" red button', () => {
            cy.get('.btn.btn-lg.btn-danger.action-btn')
            .click()
            
            cy.get('.popover.fade.top.in')
            .should('be.visible')
        })
    })

    context('Canvas state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Canvas: red dots are drawed after clicking on the respective coordinates', () => {
            cy.eyesOpen({
                appName: "Red Dots Drawing",
                testName: "Red Dots drawed on the respective coordinates when clicking",
                browser: { width: 800, height: 600 }
            });
            
            cy.get('#action-canvas')
            .click(80,75)
            cy.eyesCheckWindow("First red dot drawed");

            cy.get('#action-canvas')
            .click(170,75)
            cy.eyesCheckWindow("Second red dot drawed");

            cy.get('#action-canvas')
            .click(80,165)
            cy.eyesCheckWindow("Third red dot drawed");

            cy.get('#action-canvas')
            .click(100,185)
            cy.eyesCheckWindow("Fourth red dot drawed");

            cy.get('#action-canvas')
            .click(125,190)
            cy.eyesCheckWindow("Fifth red dot drawed");

            cy.get('#action-canvas')
            .click(150,185)
            cy.eyesCheckWindow("Sixth red dot drawed");

            cy.get('#action-canvas')
            .click(170,165)
            cy.eyesCheckWindow("Seventh red dot drawed");

            cy.eyesClose();
        })
    })

    context('Multiple clicks state', () =>{
        beforeEach(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        it('Multiple clicks: a popover is displayed for every iterated element when clicked', () => {
            cy.get('.action-labels>.label').each(($el, index, $list) => {
                cy.wrap($el)
                .click()
                .next()
                .should('have.class', "popover fade bottom in")
                .and('be.visible')
            })
        })
    })

    context('Force state', () =>{
        //beforeEach(() => {
        //    cy.visit('https://example.cypress.io/commands/actions')
        //})

        it('Force: a popover is displayed after forcing click on button via script', () => {
            cy.exec('npm run force-script')
            .its('code')
            .should('eq', 0)
            //cy.get('.action-opacity>.btn')
            //.click({ force: true })
            //cy.get('.popover.fade.left.in')
            //.should('be.visible')
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
            
            cy.get('.action-input-hidden.form-control')
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

            cy.get('.rightclick-action-input-hidden.form-control')
            .should('be.visible')
        })
    })
})
