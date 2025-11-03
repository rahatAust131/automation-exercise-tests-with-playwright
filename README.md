# 🧪 Automation Exercise Tests with Playwright

![Playwright](https://img.shields.io/badge/Framework-Playwright-45ba4b?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)

Automated end-to-end tests for [AutomationExercise.com](https://www.automationexercise.com),  
built with **Playwright + JavaScript**, following **Page Object Model (POM)** architecture.

---

## 📑 Table of Contents
- [About the Project](#-about-the-project)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)
- [Running Tests](#-running-tests)
- [Architecture & Design](#-architecture--design)
- [Test Reporting](#-test-reporting)
- [CI/CD Integration](#-cicd-integration)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 📘 About the Project

This repository contains Playwright automation scripts that test the core workflows of [AutomationExercise.com](https://www.automationexercise.com). It demonstrates:

- UI automation using Playwright (JavaScript)

- Reusable and modular Page Object Model (POM) design

- HTML and JUnit reporting

- Organized test structure with fixtures and utilities

---

## 📂 Project Structure
```bash

automation-exercise-tests-with-playwright/
│
├── pages/ # Page Object classes (LoginPage, SignupPage, ContactPage, etc.)
├── tests/ # Test suites organized by feature
│ ├── auth/ # Authentication-related tests
│ ├── contact/ # Contact Us form tests
│ └── ...
│
├── fixtures/ # Test data and reusable constants
├── utils/ # Helper utilities (custom functions, waits, etc.)
├── playwright.config.js # Playwright test configuration
└── package.json # Project dependencies and scripts
```

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- Recommended: VS Code + Playwright Test extension

### 2️⃣ Installation
```bash
git clone https://github.com/rahatAust131/automation-exercise-tests-with-playwright.git

cd automation-exercise-tests-with-playwright

npm install
```

---

## 🚀 Running Tests
Run all tests:
```bash
npx playwright test
```
Run specific test file:
```bash
npx playwright test tests/auth/signup.spec.js
```
Run tests in headed mode (browser visible):
```bash
npx playwright test --headed
```
Run with UI test explorer:
```bash
npx playwright test --ui
```

---

## 🧱 Architecture & Design
This framework follows Page Object Model (POM) principles:

<ul>
  <li>Each web page is represented by a class under /pages/ </li>

  <li>Tests import and use these page classes for cleaner, reusable code </li>

  <li>Locator definitions and user actions (fill, click, assert) are encapsulated within page objects </li>
</ul>

Example:
```bash
js
// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.automationexercise.com/login');
  }

  async login(email, password) {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
    await this.page.click('[data-qa="login-button"]');
  }
}
```

---

## 🧾 Test Reporting
Playwright automatically generates detailed HTML reports.

Generate a test report:
```bash
npx playwright show-report
```
You can also add JUnit or Allure reports for CI/CD environments:

```bash
reporter: [['html'], ['junit', { outputFile: 'results.xml' }]],
```
Example Test Output:
```bash
Running 2 tests using 1 worker


✓ [chromium] › tests/auth/signup.spec.js:5:1 › Signup with valid credentials (12s)
✓ [chromium] › tests/auth/signup.spec.js:14:1 › Signup with invalid email (7s)


2 passed (19s)
```
## 🔄 CI/CD Integration

You can integrate this project into GitHub Actions for automated test runs.

Example workflow file ".github/workflows/playwright.yml":
```bash
name: Playwright Tests
on:
push:
branches: [ main ]
pull_request:


jobs:
test:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v3
- uses: actions/setup-node@v3
with:
node-version: 18
- run: npm ci
- run: npx playwright install
- run: npx playwright test
- run: npx playwright show-report
```
---

## 🚀 Future Enhancements

- [ ] Add Allure report integration
- [ ] Extend test coverage (Product, Cart, Checkout)
- [ ] Implement data-driven testing using fixtures
- [ ] Integrate GitHub Actions for continuous testing
- [ ] Add badges and screenshots for improved documentation

---

## 👨‍💻 Author

**Rahat Chowdhury**  
📧 [rahatAust131@gmail.com](mailto:rczisan@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/rahat-chowdhury-zisan/)  
💻 [GitHub](https://github.com/rahatAust131)

---

⭐ **If you find this project helpful, please give it a star!**  
📝 Contributions, feedback, and pull requests are always welcome.

---
