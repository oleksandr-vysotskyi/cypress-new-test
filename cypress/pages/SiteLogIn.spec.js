export class Site {

  open() {
    const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthPassword')}`;
    return cy.visit(`https://${userAndPass}@qauto.forstudy.space/`);
  }

  userLogIn() {
    cy.request('POST', '/api/auth/signin', {
      'email': Cypress.env('user'),
      'password': Cypress.env('password'),
      'remember': false,
    });
  }

  profileTabOpen() {
    const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthPassword')}`;
    return cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile/`);
  }

  waitForCurrentRequest() {
    return cy.request('https://qauto.forstudy.space/api/users/current');
  }

  SuccessfullPhotoUpload() {
    return cy.request('https://qauto.forstudy.space/api/users/profile');
  }
}
