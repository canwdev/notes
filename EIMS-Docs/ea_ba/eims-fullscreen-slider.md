# 常用全屏轮播组件

![DEMO](../res/20180510_163942.png)

```html
<!--xn_ba_js_13_banner-->
    <div id="xn_ba_js_13_banner" class="xn_ba_js_13_banner">
<em id="xn_ba_js_13_prev" class="xn_ba_js_13_prev"></em>
<!-- ea_ba_banner_1 -->
<div class="xn_ba_js_13_element" frameindex="1">
  <div class="xn_ba_js_13_bigImg"><a href="#" name="1"><img alt="" data-original="http://0.rc.xiniu.com/g2/M00/80/05/CgAGe1rqi8SAV1vHAASSo7Kwtp0001.jpg" rel="b"></a></div>
</div>
<!-- ea_ba_banner_1 -->
<!-- ea_ba_banner_2 -->
<div class="xn_ba_js_13_element" frameindex="2">
  <div class="xn_ba_js_13_bigImg"> <a href="#" name="2"><img alt="" data-original="http://0.rc.xiniu.com/g2/M00/80/05/CgAGe1rqi8SAV1vHAASSo7Kwtp0001.jpg" rel="b"></a></div>
 </div>
<!-- ea_ba_banner_2 -->
<!-- ea_ba_banner_3 -->
<div class="xn_ba_js_13_element" frameindex="3">
  <div class="xn_ba_js_13_bigImg"> <a href="#" name="3"><img alt="" data-original="http://0.rc.xiniu.com/g2/M00/80/05/CgAGe1rqi8SAV1vHAASSo7Kwtp0001.jpg" rel="b"></a></div>
</div>
         <!-- ea_ba_banner_3 -->
<!-- ea_ba_banner_4 -->
<div class="xn_ba_js_13_element" frameindex="4">
  <div class="xn_ba_js_13_bigImg"> <a href="#" name="4"><img alt="" data-original="http://0.rc.xiniu.com/g2/M00/80/05/CgAGe1rqi8SAV1vHAASSo7Kwtp0001.jpg" rel="b"></a></div>
</div>
         <!-- ea_ba_banner_4 -->
         <em id="xn_ba_js_13_next" class="xn_ba_js_13_next"></em>
<ul class="xn_ba_js_13_btn">
  <!-- JS动态写入 -->
  <!--<li class="xn_ba_js_13_element_btn"></li> -->
</ul>

    </div>
<!--end_xn_ba_js_13_banner-->
```

```css

/*xn_ba_js_13_banner*/
/** 显示宽高 **/
.xn_ba_js_13_banner {
    width: 100%;
    height: 855px;
    visibility: hidden;
    overflow: hidden;
    position: relative;
}

.xn_ba_js_13_bigImg img {
    width: 1920px;
    height: 855px;
    border: 0
}

.xn_ba_js_13_element {
    position: absolute;
}

/** button **/
.xn_ba_js_13_btn {
    top: 795px;
    cursor: pointer;
    position: relative;
    padding: 0;
    margin: 0 auto;
    opacity: 0.7;
}

.xn_ba_js_13_btn li {
    float: left;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 19px;
    height: 19px;
    margin-left: 10px;
    border-radius: 999px;
    border: 1px solid white;
}

.xn_ba_js_13_element_btn {
    width: 19px;
    height: 19px;
    border: 1px solid white;

}

.xn_ba_js_13_element_btn:hover, .xn_ba_js_13_element_btn_on {
    width: 19px;
    height: 19px;
    background: white no-repeat;
}

.xn_ba_js_13_prev {
    width: 40px;
    height: 80px;
    position: absolute;
    top: 350px;
    left: 10%;
    background: url(http://web72-44627.75.xiniuyun.com/Images/res/ba_al.png) no-repeat;
    z-index: 999;
}

.xn_ba_js_13_prev:hover {
    cursor: pointer;

    /*background: url(http://1.rc.xiniu.com/rc/Banners/40257/images/xn_ba_js_13_prev_on.png?d=20180414102921738) no-repeat;*/
}

.xn_ba_js_13_next {
    width: 40px;
    height: 80px;
    position: absolute;
    top: 350px;
    right: 10%;
    background: url(http://web72-44627.75.xiniuyun.com/Images/res/ba_ar.png) no-repeat;
    z-index: 999;
}

.xn_ba_js_13_next:hover {
    cursor: pointer;
    /*background: url(http://1.rc.xiniu.com/rc/Banners/40257/images/xn_ba_js_13_next_on.png?d=20180414102921738) no-repeat;*/
}

/*end_xn_ba_js_13_banner*/

```

```js
/*xn_ba_js_13_banner*/
var xn_ba_js_13_autoPlay = true;
var xn_ba_js_13_interval = 6000;
var bannerW = "100%";
var xn_ba_js_13_nextfunc;
var xn_ba_js_13_timer;
$(document).ready(function () {
    if ($("#xn_ba_js_13_banner").length>0) {
        xn_ba_js_13_start();
    };
});
var xn_ba_js_13_start = function () {
    var maxLen = 0;
    var index = 0;
    var prev = -1;
    var imgW, imgH, sizeW, sizeH = 0;
    var running = false;
    maxLen = $(".xn_ba_js_13_element").length;
    imgW = $(".xn_ba_js_13_bigImg").find("img").eq(0).width();
    imgH = $(".xn_ba_js_13_bigImg").find("img").eq(0).height();
    for (var i = 0; i < $(".xn_ba_js_13_element").length; i++) {
        var ele = $(".xn_ba_js_13_element").eq(i).find("img");
        ele.attr("src", ele.attr("data-original"));
    }
    var btnData = "";
    for (var i = 0; i < maxLen; i++) btnData += '<li class="xn_ba_js_13_element_btn">';
    $(".xn_ba_js_13_btn").html(btnData);
    var btn = $(".xn_ba_js_13_btn").find("li").eq(0);
    // var btnW = btn.width() + Math.round(btn.css("margin-left").replace(/[a-zA-Z]/g, ""));
    var btnW = 31;
    $(".xn_ba_js_13_btn").css("width", maxLen * btnW);
    btn.attr("class", "xn_ba_js_13_element_btn_on");
    $(".xn_ba_js_13_banner").css("visibility", "visible");
    for (var i = 0; i < maxLen; i++) {
        $(".xn_ba_js_13_element").eq(i).attr("id", "ea_ba_no_b_" + i);
        var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
        if (i == index) _opa = 1;
        if (_pos > sizeW) {
            _pos -= maxLen * imgW
        } else if (_pos < -imgW) {
            _pos += maxLen * imgW
        }
        $(".xn_ba_js_13_element").eq(i).css({
            left: _pos,
            opacity: 0
        }).animate({
            opacity: _opa
        }, {
            duration: 400,
            easing: 'linear'
        })
    }
    onResize();
    $(window).resize(onResize);
    function onResize() {
        for (var i = 0; i < maxLen; i++) {
            if (bannerW == "100%") {
                sizeW = $(window).width();
            } else {
                sizeW = parseInt(bannerW);
            }
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_13_element").eq(i).stop().css({
                left: _pos,
                opacity: _opa
            })
        }
    };
    $(".xn_ba_js_13_btn li").each(function (i) {
        $(this).click(function () {clearInterval(xn_ba_js_13_timer);
            skipHandler((i));
        });
    });
    $("#xn_ba_js_13_prev").hover(function(){
        clearInterval(xn_ba_js_13_timer);
    },function(){
        xn_ba_js_13_timer = setInterval(xn_ba_js_13_nextfunc, xn_ba_js_13_interval);
    });
    //左右切换
    $("#xn_ba_js_13_prev").click(function(){
        var cur = index;
        cur--;
        if (cur < 0) cur = maxLen - 1;
        skipHandler(cur);
    });
    $("#xn_ba_js_13_next").click(function(){
        var cur = index;
        cur++;
        if (cur > maxLen - 1) cur = 0;
        skipHandler(cur);

    });
    timerRepeat();
    function skipHandler(target) {
        if (target == index) return;
        var d = 1;
        var pure = index;
        if (target < pure) d = -1;
        var btn = $(".xn_ba_js_13_btn").find("li");
        btn.eq(pure).attr("class", "xn_ba_js_13_element_btn");
        btn.eq(target).attr("class", "xn_ba_js_13_element_btn_on");
        var len;
        if (d == 1) {
            len = target - pure;
            if (len <= 1) {
                index = target;
                nextPage();
            } else {
                for (var k = pure; k <= target; k++) {
                    index = k;
                    nextPage();
                }
            }
        } else {
            len = index - target;
            if (len <= 1) {
                index = target;
                prevPage();
            } else {
                for (var k = index; k >= target; k--) {
                    index = k;
                    prevPage();
                }
            }
        }
    }
    function timerRepeat() {
        if (!xn_ba_js_13_autoPlay) return;
        xn_ba_js_13_nextfunc = isPause;
        xn_ba_js_13_timer = setInterval(xn_ba_js_13_nextfunc, xn_ba_js_13_interval);
    }
    function isPause() {
        var isRun = true;
        if (typeof parent.runonce != 'undefined') {
            isRun = parent.runonce;
        }
        if (isRun) {
            var cur = index;
            cur++;
            if (cur > maxLen - 1) cur = 0;
            skipHandler(cur);
            return false;
        } else {
            return true;
        }
    }
    function nextPage() {
        if (xn_ba_js_13_timer) {
            clearInterval(xn_ba_js_13_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        _pict = $(".xn_ba_js_13_element");
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            } else if (_pos < -imgW * 2) {
                _pos += maxLen * imgW
            }
            _pict.eq(i).stop().css({
                left: _pos + imgW
            }).animate({
                left: _pos,
                opacity: _opa
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
    function prevPage() {
        if (xn_ba_js_13_timer) {
            clearInterval(xn_ba_js_13_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            if (_pos < -imgW) {
                _pos += maxLen * imgW
            } else if (_pos > sizeW + imgW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_13_element").eq(i).stop().css({
                left: _pos - imgW
            }).animate({
                left: _pos
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuint',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});
/*end_xn_ba_js_13_banner*/
```