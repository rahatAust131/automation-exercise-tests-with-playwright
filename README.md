# 🧪 Automation Exercise Tests with Playwright

Automated end-to-end test suite for [AutomationExercise.com](https://www.automationexercise.com), built using **Playwright** with **JavaScript**.  
This project demonstrates modular test automation following the **Page Object Model (POM)** structure, covering multiple user journeys such as authentication, contact forms, and more.

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

## 🚀 Getting Started

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- Recommended: VS Code + Playwright Test extension

### 2️⃣ Installation
```bash
git clone https://github.com/rahatAust131/automation-exercise-tests-with-playwright.git
```
```bash
cd automation-exercise-tests-with-playwright
```
```bash
npm install
```

### 3️⃣ Run Tests
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

### 🧱 Architecture & Design
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
🧾 Test Reporting
Playwright automatically generates beautiful HTML reports.

Generate a test report:

```bash
npx playwright show-report
