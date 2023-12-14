export class EditModal {

  elements = {
    editProfileButton: () => cy.get('button.btn-primary'),
    photoBrowseInput: () => cy.get('input#editProfilePhoto'),
    saveButton: () => cy.contains('button', 'Save')
  }
}