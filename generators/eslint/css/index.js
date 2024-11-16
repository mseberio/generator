const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "stylelint",
        "stylelint-config-standard",
        "stylelint-config-tailwindcss",
        "stylelint-order"
      ],
      {
        "save-dev": true
      }
    );
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".stylelintrc.json"),
      this.destinationPath(".stylelintrc.json")
    );
  }
};
