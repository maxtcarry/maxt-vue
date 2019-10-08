#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
program.version('1.1.0', '-v, --version')
    .command('init <name>')
    .action((name,version) => {
      // console.log(name,version)
        if(!fs.existsSync(name)){inquirer.prompt([
                {
                    name: 'description',
                    message: '请输入项目描述'
                },
                {
                    name: 'author',
                    message: '请输入作者名称'
                },
                {
                    name: 'version',
                    message: '请输入版本号'
                }
            ]).then((answers) => {
                const spinner = ora('正在下载模板...');
                spinner.start();
                download('direct:https://github.com/maxtcarry/mxt-vuecli3.git', name, {clone: true}, (err) => {
                    if(err){
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    }else{
                        spinner.succeed();
                        const fileName = `${name}/package.json`;
                        //console.log(fileName)
                        fs.readFile(fileName, function (err, data) {
                         if (err) {
                             return console.error(err);
                         }
                         const newData =JSON.parse(data.toString());
                         newData.name = name;
                         newData.author= answers.author;
                         newData.description=answers.description;
                         newData.version = answers.version;
                         fs.writeFile(fileName ,JSON.stringify(newData,null,2), function(err) {
                          if (err) {
                              return console.error(err);
                          }
                       });
                      });
                        console.log(symbols.success, chalk.green('项目初始化完成'));

                        console.log(symbols.warning, chalk.green('注意 修改< vue.config.js >来满足自己的项目需求'));
                        console.log('||       cd '+ name +'');
                        console.log('||       npm install 安装集成的控件等');
                        console.log('||       npm run serve 启动本地环境');
                        console.log('||       npm run build 构建生产环境');
                    }
                })
            })
        }else{
            // 错误提示项目已存在，避免覆盖原有项目
            console.log(symbols.error, chalk.red('项目已存在'));
        }
    })

program.parse(process.argv);
