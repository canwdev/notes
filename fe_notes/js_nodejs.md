# JS · Node.js / NPM / Yarn

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