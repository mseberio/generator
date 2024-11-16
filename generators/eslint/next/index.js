const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "prettier",
        "prettier-plugin-tailwindcss",
        "eslint-plugin-prettier",
        "eslint-config-prettier"
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
