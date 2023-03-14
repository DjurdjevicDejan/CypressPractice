class createGalleryPage {
  get createGalleryHeading() {
    return cy.get("h1");
  }

  get galleryTitleInput() {
    return cy.get("#title");
  }

  get galleryDescriptionInput() {
    return cy.get("#description");
  }

  get galleryImageInput() {
    return cy.get("input").last();
  }

  get cancelButton() {
    return cy.get("button").last();
  }

  get submitButton() {
    return cy.get("button").eq(-2);
  }

  get addImageButton() {
    return cy.get("button").eq(-3);
  }

  get imageUrlInputWrapper() {
    return cy.get("div[class='input-group mb-3']");
  }

  get deleteGalleryButton() {
    return this.imageUrlInputWrapper.find("button").first();
  }

  get galleryUpButton() {
    return this.imageUrlInputWrapper.find("button").eq(1);
  }

  get galleryDownButton() {
    return this.imageUrlInputWrapper.find("button").eq(2);
  }

  createGallery(title, description, imageUrl) {
    this.galleryTitleInput.type(title);
    this.galleryDescriptionInput.type(description);
    this.galleryImageInput.type(imageUrl);
    this.submitButton.click();
  }
}

export const createGalleryPage = new createGalleryPage();
