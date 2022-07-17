const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "eslint",
        message: "What ESLint config do you want?",
        when: answers => answers.features.includes("eslint"),
        choices: [
          {
            name: "next"
          }
        ]
      }
    ]);

    if (answers.eslint) {
      if (answers.eslint.includes("next")) {
        this.composeWith(require.resolve("./next"));
      }
    }
  }
};
