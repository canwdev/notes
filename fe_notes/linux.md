# System note

> 包括一些常用的系统命令

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

## git 分支操作

```sh
# 查看所有分支
git branch -a

# 当远程分支显示不正常时使用：
git fetch -p

# 创建分支并切换到
git checkout -b <分支名>

# 删除本地分支
git branch -d <分支名>

# 删除远程分支
git push origin --delete <分支名>

# 清理远程分支，把本地不存在的远程分支删除
git remote prune origin

# 推送所有分支到远程
git push origin '*:*'
git push origin --all

# 拉取远程所有分支
git fetch --all
git pull --all
```

## Linux 死机分析与解决

在一些特殊情况下，执行 `git pull` 拉取最新代码时卡死，然后服务器硬盘写入100%，只能重启来解决。

重启之后别忘了手动启动 `pm2` 服务，还有 `docker` 容器 `docker start $(docker ps -a -q)`。

## Mint 安装后配置

首先配置软件源和输入法框架fcitx，打开设置可以找到配置项

```sh
# 安装完输入法框架后，全局字体会变成楷体，可以安装文泉驿字体解决
sudo apt install ttf-wqy-zenhei

# Linux Mint 下禁用 Alt 拖拽窗口 
sudo apt install dconf-tools
# 然后在 org -> cinnamon > desktop > wm > preferences 下面的 mouse-button-modifier 中修改 <Alt> 变为 <Super> 或者 <Ctrl>。

# 把capslock改为ctrl键
System Settings →  Keyboard Layouts →  Options → Caps Lock key behavior → Select Make Caps Lock an additional

# 解决 Linux Mint PC 前面板没声音的问题
sudo apt-get install pavucontrol

# 设置鼠标滚动速度
sudo apt install imwheel
## Download the code below http://www.nicknorton.net/mousewheel.sh
## Save it into your home folder, make it executable. Run it and enjoy.

# 主题美化下载
https://github.com/topics/cinnamon-theme
```

## 解决WIN10 1803及以后版本的蓝牙音量（绝对音量）问题

```text
1、win+r，输入regedit，打开注册表
2、进入路径：计算机\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Bluetooth\Audio\AVRCP\CT
3、找到DisableAbsoluteVolume值，修改为1，如果没有，右键新建DWORD32位，建立对应值。
4、重启。
```

## 刷新安卓设备媒体

```sh
# 如果要彻底重置，请清除 com.android.providers.media 的数据
adb shell am broadcast -a android.intent.action.MEDIA_MOUNTED -d file:///sdcard
```

## 一般情况nginx的配置

```sh
# 编辑配置文件
vi /etc/nginx/sites-enabled/default
# 重新加载配置
nginx -s reload
```

```txt
server {
  listen 8080;
  server_name localhost;

  location / {
    autoindex on;
    root /usr/myservice/app8080/;
    index index.html;
  }
}


server {
  listen 8097;
  server_name localhost;

  location / {
    root /root/remo_stock/dist/;
    index index.html;
  }
}

server {
  listen 8099;
  server_name localhost;

  location / {
    root /usr/www/node-blog-management-ui/;
    index index.html;
  }
}

```
