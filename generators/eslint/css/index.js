const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("pnpm", [
      "add",
      "-D",
      "stylelint",
      "stylelint-config-standard",
      "stylelint-config-tailwindcss",
      "stylelint-order"
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".stylelintrc.json"),
      this.destinationPath(".stylelintrc.json")
    );
  }
};
