describe('App.js', () => {
    context('Add comment', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/');
            cy.get(':nth-child(2) > div.py-2 > .container > #comment').as('commentInput');
            cy.get(':nth-child(2) > div.py-2 > .container > .bg-indigo-dark').as('commentSubmit');
            cy.get('.block').as('chars');
            cy.get(':nth-child(3) > article.mb-2 > .text-grey-dark').as('commentName');
            cy.get(':nth-child(4) > article.mb-2 > .text-grey-dark').as('Zac');
        });
        it('will add comment first from Morgana then from Zac', () => {
            cy.get('@chars').select('Morgana');
            cy.get('@commentInput').type('Hello, World from Morgana');
            cy.get('@commentSubmit').click();
            cy.get('@commentName').contains('Morgana');
            cy.get('@chars').select('Zac');
            cy.get('@commentInput').type('Hello, World from Zac');
            cy.get('@commentSubmit').click();
            cy.get('@Zac').contains('Zac');
        });
    });
    context('Add post', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/');
        });
        it('should add post', () => {
            cy.get('.block').select('Morgana');
            cy.get('#title').type('OH YES POSTMAN!');
            cy.get('#content').type('This is post content');
            cy.get('.flex-wrap > :nth-child(1) > .bg-indigo-dark').click();
            cy.get('.flex-wrap > :nth-child(2)').contains('OH YES POSTMAN!');
            cy.get('.flex-wrap > :nth-child(2)').contains('This is post content');

            cy.get('.block').select('Zac');
            cy.get('#title').type('OH YES POSTMAN!');
            cy.get('#content').type('This is post content');
            cy.get('.flex-wrap > :nth-child(1) > .bg-indigo-dark').click();
            cy.get('.flex-wrap > :nth-child(2)').contains('OH YES POSTMAN!');
            cy.get('.flex-wrap > :nth-child(2)').contains('This is post content');
        })
    });

});