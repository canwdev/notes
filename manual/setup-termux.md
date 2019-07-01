https://tonybai.com/2017/11/09/hello-termux/

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