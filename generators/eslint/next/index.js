const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("pnpm", [
      "add",
      "-D",
      "prettier",
      "prettier-plugin-tailwindcss",
      "eslint-plugin-prettier",
      "eslint-config-prettier"
    ]);
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
  }
};
