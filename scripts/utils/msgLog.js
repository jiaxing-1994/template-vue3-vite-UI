const chalk = require('chalk');

const log = (chalkFunc) => {
  return (args) => console.log(chalkFunc(args));
}

const errorLog = log(chalk.red);

const successLog = log(chalk.green);

const infoLog = log(chalk.yellow);

module.exports = {
  errorLog,
  successLog,
  infoLog,
}
