describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    
    })
    it('неВерный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dopnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   
   })
   it('проверка валидации поля логина', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

    cy.get('#mail').type('germandopnikov.ru'); // Ввели неверный логин, без "@"
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // нажал войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})

it('Проверка Востановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

    cy.get('#forgotEmailButton').click(); // нажал Забыли пароль

    cy.get('#mailForgot').type('german@dopnikov.ru'); // вводим почту для востановления
    cy.get('#restoreEmailButton').click(); // нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст на совпадение
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})
it('приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // проверяю цвет кнопки восстановить пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})
 })
  