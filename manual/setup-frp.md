# 安装frp内网穿透工具

https://github.com/fatedier/frp/blob/master/README_zh.md

## 服务器端

到Github上下载对应的版本，解压到例如`/usr/myservice/frp`文件夹下

示例：

```sh
wget https://github.com/fatedier/frp/releases/download/v0.25.3/frp_0.25.3_linux_amd64.tar.gz
tar xzvf frp_0.25.3_linux_amd64.tar.gz
mv frp_0.25.3_linux_amd64 frp
```

https://github.com/fatedier/frp/releases

修改`frps.ini`，直接运行`./frps -c frpc.ini`即可启动成功

附上`frps.ini`基础配置内容

```txt
[common]
bind_port = 7000

# dashboard_addr = 0.0.0.0
# dashboard_port = 7500

# 仪表盘访问的用户名密码，如果不设置，则默认都是 admin
# dashboard_user = admin
# dashboard_pwd = admin

# auth token
token = abcd1234567890
```

## 在Ubuntu上安装frp服务

https://blog.xinshangshangxin.com/2018/06/18/frp/

添加 `/lib/systemd/system/frps.service`

```sh
[Unit]
Description=frps
After=network.target

[Service]
TimeoutStartSec=30
ExecStart=/usr/myservice/frp/frps -c /usr/myservice/frp/frps.ini
ExecStop=/bin/kill $MAINPID

[Install]
WantedBy=multi-user.target
```

启用 `frps.service`

```sh
systemctl enable frps
systemctl start frps
systemctl status frps
```

## 客户端

运行`frpc -c frpc.ini`可启动客户端服务，

* windows可使用NSSM来实现自动运行服务

附上`frpc.ini`内容

```txt
[common]
server_addr = 47.xxx.xxx.xxx 
server_port = 7000
# auth token
token = abcd1234567890


[web]
type = tcp
local_ip = 127.0.0.1
local_port = 80
remote_port = 8080

[ftp]
type = tcp
local_ip = 127.0.0.1
local_port = 21
remote_port = 8082

[ftp_port1]
type = tcp
local_ip = 127.0.0.1
local_port = 5100
remote_port = 5100


[ftp_port2]
type = tcp
local_ip = 127.0.0.1
local_port = 5101
remote_port = 5101


[ftp_port3]
type = tcp
local_ip = 127.0.0.1
local_port = 5102
remote_port = 5102

[rdp]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 3389

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 2222
use_encryption = true
use_compression = false
```
