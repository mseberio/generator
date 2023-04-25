const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-import",
        "eslint-plugin-prettier",
        "eslint-plugin-react",
        "@typescript-eslint/parser",
        "eslint-plugin-react-hooks",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin"
      ],
      { "save-dev": true }
    );
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
  }
};
