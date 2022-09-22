const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "Which ESLint config do you want?",
        choices: [
          {
            name: "next"
          },
          {
            name: "gatsby"
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
      if (answers.eslint.includes("next")) {
        this.composeWith(require.resolve("./next"));
      }

      if (answers.eslint.includes("gatsby")) {
        this.composeWith(require.resolve("./gatsby"));
      }
    }

    if (answers.stylelint) {
      if (answers.stylelint.includes("scss")) {
        this.composeWith(require.resolve("./scss"));
      }
    }
  }
};
