const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("pnpm", [
      "add",
      "-D",
      "stylelint",
      "stylelint-scss",
      "stylelint-order",
      "stylelint-config-standard-scss"
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".stylelintrc.json"),
      this.destinationPath(".stylelintrc.json")
    );
  }
};
