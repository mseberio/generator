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
      }
    ]);

    if (answers.eslint.includes("next")) {
      this.composeWith(require.resolve("./next"));
    }

    if (answers.eslint.includes("gatsby")) {
      this.composeWith(require.resolve("./gatsby"));
    }
  }
};
