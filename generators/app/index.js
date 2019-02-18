var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = class extends Generator {
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  // Async Await
  async prompting() {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname, // appname return the default folder name to project
      store: true,
    },
    {
      type: 'confirm',
      name: 'cool',
      message: 'Would you like to use Cool Feature',
    }]);

    // this.log('app name', this.answers.name);
  }

  install() {
    this.npmInstall();
  }

  writing() {
    this._writingSRCFiles();
  }

  _writingSRCFiles() {
    this._writingIndexJS();
    this._writingAppComponent();
    this._writingIndexHTML();
    this._writingGitignore();
    this._writingPackageJSON();
    this._writingReadme();
  }

  _writingIndexJS() {
    this.fs.copy(this.templatePath('src/index.js'), this.destinationPath('src/index.js'));
  }

  _writingAppComponent() {
    this.fs.copy(this.templatePath(
      'src/components/App.js'),
       this.destinationPath('src/components/App.js')
    );
  }

  _writingIndexHTML() {
    this.fs.copy(this.templatePath('public/index.html'), this.destinationPath('public/index.html'));
  }

  _writingGitignore() {
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
  }

  _writingPackageJSON() {
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
  }

  _writingReadme() {
    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'));
  }
};
