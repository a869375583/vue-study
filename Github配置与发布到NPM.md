# Github配置

### 安装git
https://git-scm.com/

```$ git --version```

### 设置账号

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

### 创建SSH

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```
在用户主目录下的.ssh目录，`id_rsa`和`id_rsa.pub`这两个文件
也可以用puTTYGen软件自动生成

> 或者安装github桌面版，以上过程自动帮你实现了

### 登陆github 添加ssh key
填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容
GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。

> 或者安装github桌面版，以上过程自动帮你实现了

### 将本地仓库关联远程库
1. 可以直接 clone远程空白仓库，然后将.git目录 复制到本地仓库根目录
2. .gitignore 设置git忽略的文件或目录
3. 本地直接执行
```
$ git init
$ git remote add origin git@github.com:pengteling/vue-simple-player-1710.git
```
远程库的名字 origin是git默认的叫法，也可以改成变的，一般用这个

### 推送和拉取
```
$ git push -u origin master
$ git fetch
$ git pull
```

# 发布到npm

### 登陆npm
```
$ npm login
$ npm whoami 
```
### 检查registry是否为官方的
```
$ npm config get registry
$ npm config set registry https://registry.npmjs.org/
```
### package 设置

name: 项目名称 不能与npm上已有模块名称相同
main: 项目入口文件
repository: 可以设置项目的源码地址 github
version: 新的publish一定要 高于之前的版本

### 写文档
根目录下 README.md

### publish
```
$ npm publish
```