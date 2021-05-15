Jasmine-Playwright proof-of-concept
========

Setup for a Jasmine / Playwright BDD-style testing project. Uses the JasmineConsoleReporter for a pretty printed output:

```
Test Suites & Specs:

1. main menu

   2. when loaded

      3. in mobile mode
.         ✔ should show button (2928ms)

      4. in desktop mode
.         ✔ should show button (2517ms)


2 specs, 0 failures
Finished in 9.159 seconds

Randomized with seed 18566


>> Done!


Summary:

👊  Passed
Suites:  4 of 4
Specs:   2 of 2
Expects: 2 (0 failures)
Finished in 9.16 seconds

```




## Usage

Prerequisites
- Node.js 12 

Steps
- Clone the Github project:
```
git clone https://github.com/taulinger/jasmine-play.git
```
- Change to the git repository and run:
```
npm run e2e
```