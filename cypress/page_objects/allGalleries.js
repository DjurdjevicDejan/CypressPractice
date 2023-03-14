class AllGalleriesPage {
  get loadMore() {
    return cy.get("button");
  }

  get allGalleriesHeading() {
    return cy.get("h1");
  }

  get searchInput() {
    return cy.get("input[aria-describedby='basic-addon2']");
  }

  get filterButton() {
    return cy.get("button").first();
  }

  get loadMoreButton() {
    return cy.get("button").last();
  }

  get galleriesGrid() {
    return cy.get(".grid");
  }

  get singleGallery() {
    return cy.get(".cell").first();
  }

  get singleGalleryHeading() {
    return this.singleGallery.find("h2");
  }

  get singleGalleyAuthor() {
    return this.singleGallery.find("p");
  }

  get singleGalleryDate() {
    return this.singleGallery.find("small");
  }

  get singleGalleryImage() {
    return this.singleGallery.find("img");
  }

  search(searchTerm) {
    this.searchInput.type(searchTerm);
    this.filterButton.click();
  }
}

export const allGalleriesPage = new AllGalleriesPage();
