# 多图片联装轮播组件

![DEMO](../res/20180510164149.png)

```html
<!--xn_c_index_95_wrap-->
<div class="xn_c_index_95_wbox">
                        <div class="xn_c_index_95_scroll">
                            <ShoveEIMS3:ShoveWebControl_Data ID="xn_c_index_95_Data" runat="server" DS-NavigateId="3" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Condition="isHot" DS-Orders="[Order],[DateTime] DESC" StP-SplitePage="True" StP-PageSize="15" StP-PageIndex="1" StP-PiParaName="pageindex" ReceiveTypeId="True" ReceivePageIndex="True" ReceivePageSize="True">
                                <ItemTemplate>
                                    <div class="xn_c_index_95_list">
                                        <div class="xn_c_index_95_img">
                                            <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'>
                                                <div class="xn_c_index_95_hvbox">
                                                <img  data-original='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("SmallImageUrl") %>' alt='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %>'>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="xn_c_index_95_content">
                                            <div class="xn_c_index_95_title">
                                                <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'><%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name")%>
                                                </a>
                                            </div>
                                            <div class="xn_c_index_95_time">
                                                <span class="xn_c_index_95_time_t1">
                                                    <!--ea_span_xn_c_index_95_time_t1-->
                                                    <span name="_xn_c_index_95_time_t1">发布时间：</span>
                                                    <!--ea_span_xn_c_index_95_time_t1-->
                                                </span>
                                                <span class="xn_c_index_95_date1">
                                                    <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_95_Text1" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示年" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False">
                                                    </ShoveEIMS3:ShoveWebControl_Text>
                                                </span>
                                                <span class="xn_c_index_95_date2">-</span>
                                                <span class="xn_c_index_95_date3">
                                                    <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_95_Text2" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示月" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False">
                                                    </ShoveEIMS3:ShoveWebControl_Text>
                                                </span>
                                                <span class="xn_c_index_95_date4">-</span>
                                                <span class="xn_c_index_95_date5">
                                                    <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_95_Text3" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示日" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False">
                                                    </ShoveEIMS3:ShoveWebControl_Text>
                                                </span>
                                            </div>
                                            <div class="xn_c_index_95_neirong" ej="edit_span">
                                                <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_95_Text4" runat="server" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Introduce") %>' CutWords="800" IsChange="False" IsFilterHtmlTag="True" IsRemoveImage="True">
                                                </ShoveEIMS3:ShoveWebControl_Text>
                                            </div>
                                            <div class="xn_c_index_95_More">
                                                <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'>
                                                    <!--ea_span_xn_c_index_95_more-->
                                                    <span name="_xn_c_index_95_more">More</span>
                                                    <!--ea_span_xn_c_index_95_more-->
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </ItemTemplate>
                            </ShoveEIMS3:ShoveWebControl_Data>
                        </div>
</div>
<div class="xn_c_index_95_control"></div>
<!--end_xn_c_index_95_wrap-->
```

```css

/*xn_c_index_95_wrap*/
.xn_c_index_95_wrap{width:1000px; padding-top:48px;height:205px; position:relative;}
.xn_c_index_95_head{ width:300px; height:30px; line-height:30px;}
.xn_c_index_95_eWrap{color:#726d64; font-size:16px; background:url(http://1.rc.xiniu.com/rc/Contents/5890/images/index_tt.png?d=20180425162840155) right center no-repeat; padding-right:15px; margin-right:8px; display:inline-block;}
.xn_c_index_95_dashw{ display:none;}
.xn_c_index_95_cWrap{color:#d0c7b8; font-size:12px; display:inline-block; line-height:30px;text-transform: uppercase;}

.xn_c_index_95_wbox {
    width: 1200px;
    overflow: hidden;
    height: 100px;
    padding: 98px 0;
}

.xn_c_index_95_control {
    text-align: center;
    padding-bottom: 40px;
}

.xn_c_index_95_control span {
    display: inline-block;
    cursor: pointer;
    list-style: none;
    padding: 0;
    width: 17px;
    height: 17px;
    margin: 0px 10px;
    border: 1px solid #cd9d50;
    border-radius: 50%;
}
.xn_c_index_95_lights_active{background: #cd9d50 !important;}
.xn_c_index_95_scroll{width:90000px;}

.xn_c_index_95_list {
    width: 216px;
    float: left;
    height: 161px;
    position: relative;
    margin-right: 26px;
    background: #ededef;
}

.xn_c_index_95_list:hover {
    background: rgba(178, 112, 34, 0.31);
}
.xn_c_index_95_hvbox{width: 230px;height: 161px;top:0px;;position:absolute;}
.xn_c_index_95_hvbox:hover{}
.xn_c_index_95_img{width:230px;position:relative;}
.xn_c_index_95_img img{width:230px;height:161px;}
.xn_c_index_95_neirong{height:66px;line-height:22px;overflow:hidden;}
.xn_c_index_95_time,.xn_c_index_95_neirong,.xn_c_index_95_More{ display:none;}
.xn_c_index_95_title a{ padding-top:70px; display:block; color:#f2f3f7; font-size:14px; font-family:"宋体"; position:relative; text-align:center; display:none; width:230px; height:161px; line-height:20px;white-space: nowrap;
    text-overflow:ellipsis; /*溢出省略号，支持ie、safari（webkit）*/
    -o-text-overflow:ellipsis; /*溢出省略号，支持opera*/
    overflow:hidden;/*溢出隐藏*/
    -moz-binding:url('ellipsis.xml#ellipsis');/*溢出省略号，支持firefox*/}

/* .xn_c_index_95_list:hover .xn_c_index_95_title a {
display: block !important;
color: #f2f3f7;
font-size: 14px;
font-family: "宋体";
background: url(http://1.rc.xiniu.com/rc/Contents/5890/images/index_95_img.png?d=20180425162840155) no-repeat;
} */
.xn_c_index_95_content{ position:absolute; top:0px; left:0px;}
/*end_xn_c_index_95_wrap*/
```

```js
/*xn_c_index_95_wrap*/
$(function(){
    var listLength = $(".xn_c_index_95_list").length;
    var listWidth = $(".xn_c_index_95_list").outerWidth(true);
    var marginR = $(".xn_c_index_95_list").css("margin-right").replace("px","");
    var marginL = $(".xn_c_index_95_list").css("margin-left").replace("px","");
    var boxWidth = $(".xn_c_index_95_wbox").outerWidth(true);
    var showLength = Math.ceil(boxWidth / listWidth);
    var index = Math.ceil(listLength / showLength);
    var scrollWidth = showLength * (listWidth + Number(marginR) + Number(marginL));
    var speed = 500;
    var timeout = 10000;
    var count = 0;
    var IsAutoScroll = false;

    for (var i = 0; i < index; i++) {
        $(".xn_c_index_95_control").append("<span></span>");
    };
    $(".xn_c_index_95_control span").first().addClass("xn_c_index_95_lights_active");

    $(".xn_c_index_95_control span").bind("click",function(){
        var i = $(this).index();
        $(this).addClass("xn_c_index_95_lights_active").siblings().removeClass("xn_c_index_95_lights_active");
        $(".xn_c_index_95_wbox").animate({"scrollLeft":i*(boxWidth + Number(marginR))},speed);
        count = i;
    });

    $(".xn_c_index_95_list").bind("mouseover",function(){
        IsAutoScroll = false;
    });

    $(".xn_c_index_95_list").bind("mouseleave",function(){
        IsAutoScroll = true;
    });

    setInterval(function(){
        if(IsAutoScroll){
            $(".xn_c_index_95_control span").eq(count).click();
            count++;
            if(count >= index){
                count = 0;
            }
        }
    },timeout);

});
/*end_xn_c_index_95_wrap*/
```