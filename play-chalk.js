const chalk = require('chalk')
const print = console.log

print(chalk.blue('Hello' )+ ' World' + chalk.red('!'))

print(chalk.blue.bgRed.bold('Hello World!'))