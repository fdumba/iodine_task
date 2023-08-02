class CareersPage {
    static getJobsIframe() {
        return cy.get('#gnewtonIframe');
    }

    static getSDETposition() {
        return this.getJobsIframe().find('a[ns-qa="Software Development Engineer in Test - SDET"]', {timeout: 10000});
    }

    static applyButton() {
        return cy.get('[ns-qa="applyBtn"]');
    }
}

export default CareersPage;