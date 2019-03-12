# JS Note

[JsSimpleNote](./js/js_note_simple.md)

## AJAX

[AJAX](https://github.com/canwdev/learn-front-end/tree/master/JavaScript/ajax-test)

## 动态加载CSS

```javascript

loadAltCss();

function loadAltCss() {
    // 根据页面地址选择响相应的css
    var url = window.location.href;
    var pages = ['pro.aspx', 'recruitment.aspx'];
    var loadAlt = false;
    for (var i = 0; i <= pages.length; i++) {
        if (url.match(pages[i])) {
            loadAlt = true;
            break;
        }
    }

    if (loadAlt) {
        loadCss('./Css/c_mbxs_alt.css');
    } else {
        loadCss('./Css/c_mbxs.css');
    }
}

function loadCss(url) {/*JavaScript动态加载Css文件*/
    var cssNode = document.createElement('link');
    cssNode.rel = 'stylesheet';
    cssNode.type = 'text/css';
    cssNode.media = 'screen';
    cssNode.href = url + '?t=' + new Date().getTime();/*附带时间参数，防止缓存*/
    document.head.appendChild(cssNode);
    console.log('Load CSS: '+url);
}
```


## 页面加载后执行

```javascript
// 页面元素完全加载之后执行
window.onload = function(){};
$(window).load(function() {});

// 页面框架加载完成后执行
$(document).ready(function(){})
```

## 土制链接解析器v2(fix)

```js
var paramStr = location.search.split('?')[1];
console.log(paramStr);    // arg1=123&argb=456

var obj = {};
var args = paramStr.split('&');
for (var i=0;i<args.length;i++) {
  var temp = args[i].split('=');
  obj[temp[0]] = temp[1];
}
console.log(obj);      // Object { arg1: "123", argb: "456" }
```

## location.search 解析器

```js
if (location.search) {
    var search = location.search.substring(1);
    var obj = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
    console.log(obj)
}
```

## location.search 解析器2


```js
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
```


## JavaScript对象复制

```js
var oldObj = {
    aa:1
}
var newObj = Object.assign({}, oldObj)
```

## IE

```html
<!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond./static/js/1.4.2/respond.min.js"></script>
    <![endif]-->

```

## 使用HTML的方式进行页面跳转

```html
<meta http-equiv="refresh" content="0;http://www.bing.com"/>
```

```js
location.href="/"
```

## Google Analysis

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-#########-#"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-#########-#');
</script>
```

```js
// Google 统计
$(document).ready(function(){
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=UA-#########-#';
  document.body.append(ga);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-#########-#');
})
```

```js
// min
$(document).ready(function(){function b(){dataLayer.push(arguments)}var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://www.googletagmanager.com/gtag/js?id=UA-#########-#";document.body.append(a);window.dataLayer=window.dataLayer||[];b("js",new Date);b("config","UA-#########-#")});
```

## 获取该元素相对于视口的坐标
```js
let rect = Element.getBoundingClientRect()
```