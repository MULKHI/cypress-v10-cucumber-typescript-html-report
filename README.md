# cypress-v10-cucumber-typescript-html-reporter
Cypress Automation framework for Typescript based apps using BDD-Gherkin style (Cucumber) 

## Purpose of the project
Cypress awesomness and its power can be enhanced if it is integerated with BDD (Cucumber) so that the tests can be written in natural language and test definitions can be written in Typescript. This project provides two different types of reporting features. with basic executable tests to demonstrate how Cypress  + Cucumber works hand in hand.

### Why cypress with BDD Framework
Cypress automation tests can be written directly in Typescript or Javascript and easy test case writing (written format can be understood by anyone). This project also provides buisness oriented reporting of tests in natural language that can be understood by different stakeholders (Devs + QA + Business Analyst + Product Owner).


## Installation
```
npm install @badeball/cypress-cucumber-preprocessor
```
```
npm install typescript
```
```
npm install @cypress/webpack-preprocessor
```
```
npm install ts-loader
```
```
npm install webpack
```
## Execute Tests
Run the Cypress Tests in headmode
```
npx cypress open
```
Or

Run the Cypress Test in headless mode
```
npx run cypress run --e2e
```
## Test Reports
This project provides two different types of reporting features.
- Command line output
- HTML Reporting using Cucumber

### Command line output
When tests are executed simply using "npx run cypress run --e2e", the command line prints the following output after the successfull execution of tests, will get a report in the form of a video if Passing, and will get a report in the form of a video + screenshot if Failing.

![Screenshot (311)](https://user-images.githubusercontent.com/80143004/191597604-3c1f2f09-77e9-4a87-bdff-8067e548c4ce.png)

### Cucumber HTML Test Report
```
node generate-cucumber-html-reporter.js
```

An HTML report is generated in the folder "output" directory that gives the following output. 

![Screenshot (312)](https://user-images.githubusercontent.com/80143004/191599458-00c42573-7f2b-4066-be52-1747e11ae0b0.png)

Report is generated using JSON + HTML and it is very useful if we want to integerate our project test results output with any system (e.g: configure the test with CI tool and generate the report using pipeline and email it to the user).
