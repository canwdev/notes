# 如何使用 pm2

pm2 是一个超级好用的 Node.js 服务管理工具

## 安装

```shell script
npm i pm2 -g
```

## 常用命令

- 查看运行中的列表 `pm2 ls`
- 启动服务 `pm2 start <id|name>`
- 停止服务 `pm2 stop 1`
- 重启服务 `pm2 restart 1`
- 删除服务 `pm2 delete 1`
- 重命名服务 `pm2 restart <id|name> --name NEW_NAME`
- 托管静态文件（index.html）`pm2 serve /usr/www/ --name YOUR_NAME`

## 使用配置文件

在你的 Node.js 项目目录创建一个文件：`ecosystem.config.js`

```js
// PM2 Config File
// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
module.exports = {
  apps: [{
    name: 'YOUR_SERVICE_NAME',
    script: 'npm',
    args: 'run start',
    instances: 3, // 同时启动几个服务（实例）
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
 }]
}
```

最后使用 pm2 start ./ecosystem.config.js 添加配置文件

## 保存

执行添加/修改操作后，别忘了使用 `pm2 save` 保存！，这样服务器重启就会自动运行保存的服务。
