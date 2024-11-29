
# PlaywrightTypeScriptLearn

![Playwright](https://img.shields.io/badge/Playwright-2D6DB5?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

A TypeScript-based Playwright project for learning and experimenting with browser automation. This repository includes tests for platforms like AliExpress and Amazon, with modular test organization and trace results for debugging.

---

## 🚀 Features

- **Playwright Tests**: TypeScript implementation of Playwright for browser automation.
- **Trace Results**: Includes Playwright trace files for debugging and analysis.
- **Organized Structure**: Modular test cases for different platforms (e.g., AliExpress, Amazon).
- **Step-by-Step Learning**: Focused on exploring automation through examples.

---

## 📥 Installation

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (bundled with Node.js)
- **Visual Studio Code**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ChatGTHB/PlaywrightTypeScriptLearn.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PlaywrightTypeScriptLearn
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Open the project in VS Code:
   ```bash
   code .
   ```

---

## ⚙️ Usage

### Running Tests

To run all Playwright tests:
```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test tests/training/typescript.spec.ts
```

### Trace Analysis

1. After running tests, trace files are generated in the `test-results` folder.
2. To open and debug the trace:
   ```bash
   npx playwright show-trace test-results/<trace-folder-name>/trace.zip
   ```

---

## 📂 Project Structure

```
PlaywrightTypeScriptLearn/
├── node_modules/            # Project dependencies
├── test-results/            # Playwright test trace files
│   ├── tests-aliexpress...  # Trace results for AliExpress tests
│   ├── trace.zip            # Example trace file
├── tests/                   # Test files
│   ├── training/            # Training-focused test files
│   │   ├── testgenerator.spec.ts
│   │   ├── typescript.spec.ts
│   │   ├── writetest.spec.ts
│   ├── aliexpress.spec.ts   # AliExpress-specific tests
│   ├── amazon.spec.js       # Amazon-specific tests
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lockfile
```

---

## 💡 Recommended Tools

- **Visual Studio Code**
- **Extensions**:
  - **Playwright Test**: Debug and run Playwright tests directly from VS Code.
  - **ESLint**: For TypeScript linting.
  - **Prettier**: For consistent code formatting.

---

## 🙌 Contributing

1. **Fork this repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push the branch**:
   ```bash
   git push origin feature-branch
   ```
5. **Submit a Pull Request**.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ❓ Contact

For questions or issues, open an issue in this repository.
