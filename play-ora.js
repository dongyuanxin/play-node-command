// ora 的用法很简单，不再冗赘
const ora = require('ora')

const spinner = ora({
    text: 'Loding unicorns'
}).start()
setTimeout(() => {
    spinner.color = 'yellow'
    spinner.text = 'logging'
}, 500)

setTimeout(() => {
    spinner.text = 'fail'
    spinner.color = 'red'
    spinner.fail()
}, 1000)

setTimeout(() => {
    spinner.text = 'red'
    spinner.start()
}, 1500) 

setTimeout(() => {
    spinner.stop()
}, 2000)