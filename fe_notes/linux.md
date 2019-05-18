# Linux note

## 初始化Git

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## 解决git pull/push每次都需要输入密码问题

```
git config --global credential.helper store
```

## 修改了GitHub/码云账号密码后，git操作提示 `remote: Incorrect username or password ( access token )` 的问题

```sh
# windows：控制面板删除凭据

# macOS
git credential-osxkeychain erase

# Linux
rm ~/.git-credentials
```

## Ubuntu的Vi/Vim编辑器的方向键变成ABCD问题

```sh
echo "set nocp" >> ~/.vimrc
source ~/.vimrc
```

## Ubuntu安装wine

```sh
#sudo apt install wine64
sudo dpkg --add-architecture i386
wget -qO- https://dl.winehq.org/wine-builds/Release.key | sudo apt-key add -
sudo apt-add-repository 'deb http://dl.winehq.org/wine-builds/ubuntu/ artful main'
apt update
sudo apt-get install --install-recommends winehq-stable
wine --version
winecfg
# 安装winetricks（Wine的辅助配置工具，超级便利，可以解决中文字体方块问题）
sudo apt install --install-recommends winetricks
```

## 双显卡笔记本NVIDIA独显安装Ubuntu时卡死

进入`grub`界面后，在选中的默认启动项按`E`键进入编辑，将`quite splash`改为`quite splash nomodeset`，按`F10`启动系统，此时启动的系统使用集显并且关闭了显卡加速（软件渲染）

装完系统后，重启需要再次按照上述操作执行一遍，进入新系统之后只需在驱动管理器里选择`NVIDIA Corporation`提供的专用驱动即可彻底解决问题

## Linux 权限数字

```txt
dudo chmod -R 774 ./folder

644的意思是本用户有可读可写权限，群组有只读权限，其他用户为只读权限。
解释：
数字的三位分别代表：当前用户，群组用户，其他用户。
然后权限可以分为：读r=4，写w=2，执行x=1
所以：644为（4+2）（4）（4），即〔当前用户〕读，写权限，〔群组用户〕读权限，〔其它〕读权限

rwx = 4 + 2 + 1 = 7
rw = 4 + 2 = 6
rx = 4 +1 = 5
```

## Windows 递归修改文件夹权限为Everyone

```cmd
icacls "D:\CodeArchive" /grant Everyone:M /t
```
