# 前端入坑指南

1. 首先，你需要安装nodejs，然后推荐安装安装yarn。

2. 设置npm源：
  ```sh
  npm config set registry https://registry.npm.taobao.org --global
  npm config set disturl https://npm.taobao.org/dist --global
  ```
3. 安装`yarn`（必要）和`react-native-cli`
  ```sh
  npm install -g yarn react-native-cli
  
  # 安装完 yarn 后同理也要设置镜像源：
  yarn config set registry https://registry.npm.taobao.org --global
  yarn config set disturl https://npm.taobao.org/dist --global
  ```