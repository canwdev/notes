# Aria2 终极下载神器 · 安装与配置

## 服务端安装

### Ubuntu

```shell script
sudo apt install aria2
sudo mkdir /etc/aria2
# 新建session文件
sudo touch /etc/aria2/aria2.session
sudo chmod 777 /etc/aria2/aria2.session 
# 创建配置文件
sudo vi /etc/aria2/aria2.conf
```
配置文件参考：[aria2.conf](./images/aria2.conf)

### Windows

Windows可以直接使用懒人包，无需安装，自带配置，[下载 Windows 设置懒人包](https://link.zhihu.com/?target=http%3A//aria2c.com/archiver/aria2.zip)

## WebUI安装

WebUI是用于管理Aria2服务的图形化界面，这里推荐使用AriaNg：

- [AriaNg](https://github.com/mayswind/AriaNg)
- [webui-aria2](https://github.com/ziahamza/webui-aria2)

## 测试torrent下载速度

配置文件参考：[aria2.conf](./images/aria2.conf)

可以使用热门种子测试下载速度 [Ubuntu Alternative downloads](https://ubuntu.com/download/alternative-downloads)

最全的tracker列表：https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt

## 参考

- [Ubuntu18.04安装配置及使用aria2](https://www.jianshu.com/p/2f7e087f452b)
- [Termux使用Aria2打造自己的下载工具](https://www.sqlsec.com/2018/05/termux.html#toc-heading-86)
- [抛弃迅雷，Aria2 新手入门](https://zhuanlan.zhihu.com/p/37021947)
- [解决Aria2 BT下载速度慢没速度的问题](http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/)
