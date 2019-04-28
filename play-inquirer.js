const inquirer = require('inquirer')
const program = require('commander')

program
    .version('1.0.0')
    .option('--sass [sass]', '启用sass')
    .option('--less', '启用less')
    .parse(process.argv)

program
    .command('module [moduleName]')
    .alias('m')
    .description('创建新模块')
    .action(option => {
        console.log(`option is ${option}`)
        console.log(`program.sass is ${program.sass}`)
        const config = {
            moduleName: null,
            des: '',
            sass: false,
            less: false
        }
        
        const promps = []

        // type: input
        // 问答框类型
        if(config.moduleName !== 'string') {
            promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: function (input) {
                    if(!input) {
                        return '输入不能为空'
                    } 
                    return true
                }
            })
        }

        // type: list
        // 列表选择器类型
        if(!program.sass && !program.less) {
            promps.push({
                type: 'list',
                name: 'cssPretreatment',
                message: '想用什么css预处理器呢',
                choices: [
                    {
                        name: 'Sass',
                        value: 'sass'
                    },
                    {
                        name: 'Less',
                        value: 'less'
                    }
                ]
            })
        }

        inquirer.prompt(promps).then(function (answers) {
            console.log(answers)
        })
    })

program.parse(process.argv)
