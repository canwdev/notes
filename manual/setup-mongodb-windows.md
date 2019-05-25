# Windows下安装mongodb

1. 下载mongodb，解压到指定位置（https://www.mongodb.com/download-center/community）
2. 命令行运行mongodb服务器`C:\mongodb\bin\mongod --dbpath c:\data\db`
3. 连接mongodb，可直接运行`mongo.exe`，也可使用 [MongoDB Compass](https://www.mongodb.com/download-center/compass) 或 [NoSQL Manager for MongoDB](https://www.mongodbmanager.com/)
4. 使用nssm安装mongodb为系统服务，自动运行：
   1. 下载`nssm.exe`并放到`C:\Windows\`下，`Ctrl+R`运行`nssm install`命令，会弹出一个图形配置窗口
   2. 在Application选项卡下，Path设为`mongod.exe`的启动路径如`D:\Server\mongodb_server\mongod.exe`，Startup Directory会自动设置为相同目录`D:\Server\mongodb_server`，Arguments可设为` --dbpath D:\Server\mongodb_db`，然后Service Name填一下服务名称`mongod`，点Install Service即可完成安装
   3. 运行`services.msc`打开服务管理器，找到服务名`mongod`，设为自动启动，然后点击启动即可