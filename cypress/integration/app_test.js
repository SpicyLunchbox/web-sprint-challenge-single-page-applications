describe('Sprint App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
    })

    // Implement the following tests in Cypress:

    // test that you can add text to the box
    // test that you can select multiple toppings
    // test that you can submit the form

    it('name input test', () => {
        cy.get('input[name=name]')
            .should('have.value', '')
            .type('weston')
            .should('have.value', 'weston')
    })


    it('multiple toppings test', () => {
        cy.get('input[name=pepperoni]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        cy.get('input[name=sausage]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('submit form test', () => {
        cy.get('input[name=name]')
            .should('have.value', '')
            .type('weston')
            .should('have.value', 'weston')

        cy.get('select[name=pizzaSize]')
            .should('have.value', '')
            .select('small')
            .should('have.value', 'small')


        cy.get('input[name=pepperoni]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        //it is necessary to fill out input fields and check the checkbox before
        //you are able to click the submit button,
        // hence the prior code in this function

        cy.get('button')
            .click()
    })
})