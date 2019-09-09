# 配置 nginx

## 安装

```shell script
sudo apt install nginx
```

## 一般情况 nginx 的配置

```sh
# 编辑配置文件
vi /etc/nginx/sites-enabled/default
# 重新加载配置
nginx -s reload
```

### 托管静态文件

```text
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
  listen 8099;
  server_name localhost;

  location / {
    root /usr/www/node-blog-management-ui/;
    index index.html;
  }
}

```

### 使用 SSL(HTTPS)

由于我的服务器没有备案，只能使用非80/443端口

```text
server {
  listen 81 ssl;
  listen 8080;
  server_name example.com;

  # HTTP强制跳转HTTPS
  error_page 497  https://$host:$server_port$request_uri;

  ssl_certificate /usr/www/ssl/certificate.crt;
  ssl_certificate_key /usr/www/ssl/private.key;

  location / {
    autoindex on;
    root /usr/myservice/app8080/;
    index index.html;
  }
}
```

### 代理应用端口（如Node.js、Jenkins）

```text
# jenkins
server {
  listen 8098 ssl;
  server_name example.com;

  error_page 497  https://$host:$server_port$request_uri;
  ssl_certificate /usr/www/ssl/certificate.crt;
  ssl_certificate_key /usr/www/ssl/private.key;

  location / {
    proxy_set_header        Host $host:$server_port;
    proxy_set_header        X-Real-IP $remote_addr;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header        X-Forwarded-Proto $scheme;
    proxy_pass http://localhost:3001;
  }
}

# node-blog-server
server {
  listen 9002 ssl;
  server_name example.com;

  ssl_certificate /usr/www/ssl/certificate.crt;
  ssl_certificate_key /usr/www/ssl/private.key;

  location / {
  proxy_set_header        Host $host:$server_port;
    proxy_set_header        X-Real-IP $remote_addr;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header        X-Forwarded-Proto $scheme;
    # 默认请求body只有2M，调大可避免上传大文件时的报错！
    client_max_body_size 200M;
    proxy_pass http://localhost:3102;
  }
}
```
