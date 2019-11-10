var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: true });
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
      type: 'list',
      name: 'templateType',
      message: 'Select the template wanted:',
      choices: ['Front-End React', 'Node API builder', 'FullStack Application']
    }]);
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
    this.fs.copyTpl(
      this.templatePath('frontend/public/index.html'),
      this.destinationPath('frontend/public/index.html'),
      { title: 'Template Test' } // Embedded JavaScript templating.
      
    )
  }

  _writingApiTemplate() {
    this.fs.copy(
      this.templatePath('api'),
      this.destinationPath('api')
    )
  }

  end() {
    this.log(chalk.green('------------'))
    this.log(chalk.magenta('***---***'))
    this.log(chalk.blue('Jobs is Done!'))
    this.log(chalk.green('------------'))
    this.log(chalk.magenta('***---***'))
  }

};
