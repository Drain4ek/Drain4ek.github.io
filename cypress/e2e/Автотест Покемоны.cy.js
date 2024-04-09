describe('Тестирование Покемонов', function () {
    
    it('Прокупка аватара e2e', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.credit').type('4620869113632996');            
        cy.get('.k_input_ccv').type('125');                
        cy.get('.k_input_date').type('1225');                         
        cy.get('.k_input_name').type('Renat');                           
        cy.get('.pay-btn').click();                                    
        cy.get('#cardnumber').type('56456');                            
        cy.get('.payment__submit-button').click();                      
        cy.contains('Покупка прошла успешно').should('be.visible')
        })
})
