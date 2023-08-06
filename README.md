# iodine_task
Pre-requisites:
- On terminal or VS Code, git clone https://github.com/fdumba/iodine_task.git
- open cloned iodine_task folder on Visual Studio Code 

Steps to run cypress test
1. inside iodine_task folder run command npm install to install cypress
2. To run on Cypress runner
    - On terminal, run command npx cypress open
    - Click on E2E Testing option
    - Choose Chrome as a browser
    - Click on Start E2E Testing on Chrome button
    - Click on apply.cy.js file to run the test 
3. To run on headless mode
    - npx cypress run cypress/e2e/careers/apply.cy.js --browser chrome


NOTES:
- This test involves client side form navigationin which the warning popup changes based on the navigation
- Test retries have been set to 2
- 