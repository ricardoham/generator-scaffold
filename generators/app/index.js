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
      type: 'list',
      name: 'templateType',
      message: 'Select the template wanted:',
      choices: ['Front-End React', 'Node API builder', 'FullStack Application']
    }]);

    // this.log('app name', this.answers.name);
    this.log('CHOCE', this.answers.templateType)


  }

  install() {
    this.npmInstall();
  }

  writing() {
    if (this.answers.templateType === 'Front-End React') {
      this._writingReactTemplate();
    } else if (this.answers.templateType === 'Node API builder') {
      this._writingApiTemplate()
    }
    else {
      this._writingReactTemplate()
      this._writingApiTemplate()
    }
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

  end() {
    this.log('Jobs is Done!')
  }

};
