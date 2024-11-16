const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "Select the ESLint configuration you want",
        choices: [
          {
            name: "next"
          }
        ]
      },
      {
        type: "list",
        name: "stylelint",
        message: "Select the Stylelint configuration you want",
        choices: [
          {
            name: "css"
          },
          {
            name: "scss"
          },
          {
            name: "none"
          }
        ]
      }
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes("react")) {
        this.composeWith(require.resolve("./react"));
      }
      if (answers.eslint.includes("next")) {
        this.composeWith(require.resolve("./next"));
      }
      if (answers.eslint.includes("gatsby")) {
        this.composeWith(require.resolve("./gatsby"));
      }
    }

    if (answers.stylelint) {
      if (answers.stylelint.includes("css")) {
        this.composeWith(require.resolve("./css"));
      }
      if (answers.stylelint.includes("scss")) {
        this.composeWith(require.resolve("./scss"));
      }
    }
  }
};
