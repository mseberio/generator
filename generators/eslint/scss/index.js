const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "stylelint",
        "stylelint-scss",
        "stylelint-order",
        "stylelint-config-standard-scss"
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
