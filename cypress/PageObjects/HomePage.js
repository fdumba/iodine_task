class HomePage {
    static getCompanyMenu() {
        return cy.get('a[href="#"]').first();
    }
    static careersLink() {
        return cy.get('h4.submenu__link-title').first();
    }

    static iodineLogo() {
        return cy.get('.iodine-logo');
    }

    static hamburgerMenu() {
        return cy.get('.hamburger-box')
    }
}

export default HomePage;