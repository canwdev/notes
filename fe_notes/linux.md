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

## Ubuntu的Vi/Vim编辑器的方向键变成ABCD问题

```sh
echo "set nocp" >> ~/.vimrc
source ~/.vimrc
```