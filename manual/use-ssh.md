# SSH 笔记

## Linux 服务端安装SSH服务

安装ssh服务器

```sh
sudo apt install openssh-server
```

启动服务

```sh
sudo /etc/init.d/ssh start
```

## 一种简单的公钥登录的方式

https://serverfault.com/a/241593

在客户端操作

```sh
ssh-keygen -t rsa -b 2048
ssh-copy-id root@xxx.com
```


## 如何创建ssh秘钥并连接远程服务器

在客户端创建秘钥对，会在`~/.ssh/`目录下生成一对秘钥，带`.pub`后缀的是公钥，同名不带的是私钥

```
ssh-keygen
```

查看本机ssh公钥，修改私钥权限（可选）

```
cat .ssh/id_rsa.pub
chmod 0600 .ssh/id_rsa
```

在服务端创建一个文件，并粘贴客户端的公钥内容

```sh
touch ~/.ssh/authorized_keys
# 粘贴客户端的~/.ssh/id_rsa.pub内容
vi ~/.ssh/authorized_keys
```

关闭服务端ssh的密码验证，只使用客户端公钥验证登录（更安全）

```sh
# 打开配置文件
sudo vi /etc/ssh/sshd_config

# PasswordAuthentication，默认值yes改为no
# PasswordAuthentication no
```

重启ssh服务

```sh
sudo /etc/init.d/ssh restart
```

连接

```
ssh root@xxx.com
```