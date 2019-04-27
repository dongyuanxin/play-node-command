const program = require('commander')

// 分为2种操作, 2种操作互相冲突

// Options 操作
program
    .version('0.0.1')
    .option('-t, --types [type]', 'test options')
    // option这句话必须加
    .parse(process.argv)

// Commands 操作
program
    // 命令与参数: <> 必填; [] 选填
    .command('exec <cmd> [env]')
    // 别名
    .alias('ex')
    // 帮助信息
    .description('execute the given remote cmd')
    // 没用，option和command是冲突的
    .option("-e, --exec_mode <mode>", "Which exec mode to use")
     // 执行的操作
    .action((cmd, env, options) => {
        // 参数可以拿到
        console.log(`env is ${env}`)
        console.log('exec "%s" using %s mode', cmd, options.exec_mode)
    })
    // 自定义help信息
    .on('--help', function() {
        console.log('自定义help信息');
    });

// 参数长度不够, 打印帮助信息
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

if (program.types) {
    console.log(program.types)
}

// 解析命令行参数
program.parse(process.argv)
