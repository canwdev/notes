# JS · Node.js / NPM / Yarn

## Linux 上安装 Node.js

```sh
# Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：
wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
tar xvf node-v10.16.3-linux-x64.tar.xz
# 将目录移动至 /usr/software/nodejs/

# 设置环境变量（如果使用zsh，vi ~/.zshrc）
sudo vi /etc/profile
# 在文件末尾加上：
# export PATH="$PATH:/usr/sofrware/nodejs/bin"
# 立即生效（如果使用zsh，source ~/.zshrc）
source /etc/profile

# 使用 ln 命令来设置软连接(如果设置了环境变量则不需要设置)：
ln -s /usr/software/nodejs/bin/npm /usr/local/bin/ 
ln -s /usr/software/nodejs/bin/npx /usr/local/bin/
ln -s /usr/software/nodejs/bin/node /usr/local/bin/
# 查看版本
node -v
npm -v
```

## debian 安装 npm & yarn

```sh
sudo apt install nodejs
sudo apt install npm

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## 设置npm淘宝镜像源

```sh
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## 设置yarn淘宝镜像源

```sh
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

## 安装VueCLI3

```sh
sudo apt install @vue/cli
vue ui
```

## node-sass 安装慢

```sh
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

## 加速electron在国内的下载速度

设置环境变量：`export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`

## 如何解决NodeJS Error: ENOSPC

```sh
# 方法一：提高系统允许监听文件数
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## 升级npm到最新版

```sh
# 清除npm缓存
npm cache clean -f
npm install -g npm
```
