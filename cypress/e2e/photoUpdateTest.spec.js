/// <reference types="cypress"/>

import { Site } from '../pages/SiteLogIn.spec.js';
import { EditModal } from '../pages/EditProfileModal.spec.js';

describe('Photo upload test', () => {
  const site = new Site();
  const editModal = new EditModal();

  it('photo upload check', () => {
    site.open();
    site.userLogIn();
    site.open();
    site.profileTabOpen();
    site.waitForSuccessfullCurrentRequest().then((response) => {
      expect(response.status).to.eq(200);
      editModal.elements.editProfileButton().click();
      editModal.elements.photoBrowseInput().selectFile('cypress/media/logo2.jpg');
      editModal.elements.saveButton().click();
      site.waitForSuccessfullPhotoUpload().then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});