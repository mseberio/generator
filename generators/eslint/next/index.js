const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-prettier",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin"
      ],
      { "save-dev": true }
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc.json"));
  }
};
