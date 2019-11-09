var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.log('ENTER')


    this.argument('appname', { type: String, required: true });
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  // Async Await
  async prompting() {
    this.log('ENTER2', this.options.appname)
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname, // appname return the default folder name to project
      store: true,
    },
    {
      type: 'confirm',
      name: 'reactRedux',
      message: 'Would you like to use Redux lib?',
    }]);

    // this.log('app name', this.answers.name);
  }

  install() {
    this.npmInstall();
  }

  writing() {
    // this._writingSRCFiles();
    this._writingReactTemplate();
  }
  
  _writingReactTemplate() {
    this.fs.copy(
      this.templatePath('frontend'),
      this.destinationPath('frontend')
    )
  }

  _writingApiTemplate() {
    this.fs.copy(
      this.templatePath('api'),
      this.destinationPath('api')
    )
  }

};
