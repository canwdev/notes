# Termux 配置笔记

## 参考资料

- https://tonybai.com/2017/11/09/hello-termux/
- https://www.jianshu.com/p/2e6c8152a2ba

HOME路径：`/data/data/com.termux/files/home`

## 更换国内镜像

`vi /data/data/com.termux/files/usr/etc/apt/sources.list`

```
# The main termux repository:
# deb http://termux.net stable main
deb http://mirrors.tuna.tsinghua.edu.cn/termux stable main
```

`apt update`

## 安装 on-my-zsh

```sh
apt install git
apt install zsh
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
chsh zsh
```

## 设置sshd

1. 手机上安装openssh：`apt install openssh`，启动服务：`sshd`
2. 在电脑上生成key：运行 `ssh-keygen -t rsa` 交互式地生成一个key，默认保存在~/.ssh/下，两个文件id_rsa和id_rsa.pub，pub是公钥，另一个是私钥。
3. 发送id_rsa：通过各种方式将id_rsa发送到手机上 `/data/data/com.termux/files/home/.ssh/id_rsa.pub`
4. 手机上设置授权key：`cat ./id_rsa.pub >> authorized_keys`
5. 手机上查看termux用户名：`whoami`
6. 电脑连接手机：` ssh u0_a170@192.168.2.108 -p 8022`
