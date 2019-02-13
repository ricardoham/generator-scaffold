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
    const answers = await this.prompt([{
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

    this.log('app name', answers.name);
    this.log('cool feature', answers.cool);
  }

  writing() {
    this.log('cool feature', this.answers.cool);
  }
};
