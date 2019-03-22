# 如何创建ssh秘钥并连接远程服务器

1. 创建

```
ssh-keygen
```

2. 查看本机ssh公钥，修改私钥权限

```
cat .ssh/id_rsa.pub
chmod 0600 .ssh/id_rsa
```

3.连接

```
ssh root@xxx.com
```