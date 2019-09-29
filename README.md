###  安装npm 第三方库

npm install commander download-git-repo inquirer handlebars ora chalk log-symbols -S

- commander.js，可以自动的解析命令和参数，用于处理用户输入的命令。

- download-git-repo，下载并提取 git 仓库，用于下载项目模板。

- Inquirer.js，通用的命令行用户界面集合，用于和用户进行交互。

- handlebars.js，模板引擎，将用户提交的信息动态填充到文件中。

- ora，下载过程久的话，可以用于显示下载中的动画效果。

- chalk，可以给终端的字体加上颜色。

- log-symbols，可以在终端上显示出 √ 或 × 等的图标。


### 注册npm 账号

    https://www.npmjs.com/

#### npm 操作

-  2.npm init 生成package.json，如果已存在，就不用
-  3.npm adduser （添加用户）Username:Password:Email:
-  3.npm login（您在npm官网注册的账号，密码，邮箱）
-  4.npm whoami  （查看是否登录成功，成功后返回账户名）
-  5.npm publish [floder] //不带参数默认是当前目录

### 通过node 写 一个创建文件 index.js 用来发布到npm

-  使用第三方插件编写代码。克隆github仓库的模板、展示下载、提问写入 package.json 等操作 具体详情看index.js

!> download-git-repo 注意写法。
- GitHub - github:owner/name or simply owner/name
- GitLab - gitlab:owner/name
- Bitbucket - bitbucket:owner/name



### 如何下载项目

- `npm install maxt-vue -g`

- `maxt-vue init <name>`

- 看项目提示
