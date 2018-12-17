# JS用法收集

## 如何批量修改（追加）页面底部的JS

使用Sublime，Ctrl+Shift+F，第一个参数`</body>`，第二个参数`<open folders>`，第三个参数：

```html
<script type="text/javascript" src="Js/addEffects.js"></script>
</body>
```

## 改链接

```javascript
var links = $('.xn_c_index_15_listUl a');
    links[0].href=links[1].href='sv.aspx?TypeId=36&FId=t8:36:8';
```

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

## 自定义CSS

```javascript
$('.n_content_right_name_r a:last').css({"color":"#aa8129"});

$('.bk6_n_content_right_name_r a:last').css({"color":"#aa8129"});

var color = $('.index_dy_box1 p').attr({"class":"a1"});
color.each(function(i){
        if (i%2==0) {
            $(this).attr({"class":"a3"});
        }
        if (i%3==0) {
            $(this).attr({"class":"a5"});
        }
    })
```

## 追加元素

```javascript
$('.n_main').append('<div class="placeholder122"></div>');
$('.n_main').append('<div class="add_left122"></div><div class="add_right122"></div>');
$('.n_main').append('<div class="add_bottom122"><img src="http://0.rc.xiniu.com/g2/M00/61/DD/CgAGe1qeU0SAPfBnAAAMZ1rzPMs531.png"></div>');
```

## 获取元素高度

```javascript
var mainHight = document.getElementById("ea_c").offsetHeight;   // '567'
var height = $('#ea_c').css('height');    // '567px'
```

## 手机号验证

```javascript
var reg = /^1[0-9]{10}$/;
var number = $('#EIMS_C_40032_mobile').get(0).value;
if (reg.test(number)) {
    EIMS_C_40032.SubmitAdvisorys();
} else {
    alert('请输入正确的手机号');
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

## 土制链接解析器（有斜杠bug，别用。）

```js
var link = 'https://www.example.com/test?arg1=123&argb=456';

var domain = link.slice(0,link.lastIndexOf('/')).split('');
domain.splice(0,domain.lastIndexOf('/')+1);
domain = domain.join('');
console.log(domain)         // www.example.com

var temp = link.split('');
temp.splice(0,link.lastIndexOf('?')+1);
var attrString = temp.join('');
console.log(attrString);    // arg1=123&argb=456

var attr = {};
var args = attrString.split('&');
for (var i=0;i<args.length;i++) {
  var temp = args[i].split('=');
  attr[temp[0]] = temp[1];
}
console.log(attr);      // Object { arg1: "123", argb: "456" }
```

## 链接参数解析器

```js
if (location.search) {
    var search = location.search.substring(1);
    var obj = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })

    console.log(obj)
}
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

## 页面跳转

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
// --gg--
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