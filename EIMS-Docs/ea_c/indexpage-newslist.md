# 首页新闻列表

```html
<!--xn_c_index_138_wrap-->
<div class="xn_c_index_138_wrap" id="xn_c_index_138_wrap"     >
    <div class="xn_c_index_138_head">
        <!--ea_span_xn_c_index_138_eName-->
        <span name="_xn_c_index_138_eName">新闻资讯</span>
        <!--ea_span_xn_c_index_138_eName-->
    </div>
    <!--首页新闻展示带选项卡效果开始-->
    <div class="xn_c_index_138_wbox">
        <ShoveEIMS3:ShoveWebControl_Data id="xn_c_index_138_Data" runat="server" DS-NavigateId="2" DS-DataType="PC数据" DS-TypeId="" DS-Id="" DS-TableType="类别数据" DS-Orders="[Order]" DS-Condition="ishome" StP-SplitePage="True" StP-PageSize="4" StP-PageIndex="1" StP-PiParaName="pageindex">
            <ItemTemplate>
                <div class="xn_c_index_138_typeList">
                    <div class="xn_c_index_138_typeName">
                        <%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %>
                    </div>
                    <div class="xn_c_index_138_contType">
                        <ul class="xn_c_index_138_headUl">
                            <ShoveEIMS3:ShoveWebControl_Data id="xn_c_index_138_headData" runat="server" DS-NavigateId="2" DS-DataType="PC数据" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Orders="[Order],[DateTime] DESC" DS-Condition="ishead" StP-SplitePage="True" StP-PageSize="1" StP-PageIndex="1" StP-PiParaName="pageindex" RtF-EqualField="2.c.TypeId">
                                <ItemTemplate>
 <li class="xn_c_index_138_headLi">
       <div class="xn_c_index_138_headImg">
           <a title='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title") %>' href='news_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&Fid=t2:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:2' target="_blank">
           <img  data-original='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("SmallImageUrl") %>' alt='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title") %>' title='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title") %>' />
           </a>
       </div>
     <div class="xn_c_index_138_headTitle">
         <a title='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title") %>' href='news_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&Fid=t2:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:2' target="_blank">
             <%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title")%>
         </a>
     </div>
 </li>
                                </ItemTemplate>
                            </ShoveEIMS3:ShoveWebControl_Data>
                        </ul>
                        <ul class="xn_c_index_138_hotUl">
                            <ShoveEIMS3:ShoveWebControl_Data id="xn_c_index_138_hotData" runat="server" DS-NavigateId="2" DS-DataType="PC数据" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Orders="[Order],[DateTime] DESC" DS-Condition="isHot" StP-SplitePage="True" StP-PageSize="7" StP-PageIndex="1" StP-PiParaName="pageindex" RtF-EqualField="2.c.TypeId">
                            <ItemTemplate>
                                <li class="xn_c_index_138_list">
 <div class="xn_c_index_138_Title">
     <a title='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title") %>' href='news_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&Fid=t2:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:2' target="_blank">
         <%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Title")%>
     </a>
 </div>
 <div class="xn_c_index_138_indDate">
     <span class="xn_c_index_138_indMonth">
         <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_138_indMonthText" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示月" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False">
         </ShoveEIMS3:ShoveWebControl_Text>
     </span>
     <span class="xn_c_index_138_indLine">-</span>
     <span class="xn_c_index_138_indDay">
         <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_138_indDayText" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示日" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False">
         </ShoveEIMS3:ShoveWebControl_Text>
     </span>
 </div>
                                </li>
                            </ItemTemplate>
                        </ShoveEIMS3:ShoveWebControl_Data>
                        </ul>
                    </div>
                </div>
            </ItemTemplate>
        </ShoveEIMS3:ShoveWebControl_Data>
    </div>
</div>
<!--end_xn_c_index_138_wrap-->
```

```css
/*xn_c_index_138_wrap*/
.xn_c_index_138_wrap{width:100%;height: 462px;border: 1px solid #bebebe;position: relative;box-sizing:border-box;}
.xn_c_index_138_head{    width: 100%;
    height: 60px;
    position: relative;
    padding: 0px 22px 0px 50px;
    box-sizing: border-box;
    line-height: 60px;
    color: #bd0000;
    font-size: 22px;
    background: #ededed;}
.xn_c_index_138_head:before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 25px;
    left: 25px;
    display: block;
    background: #bd0000;
}
.xn_c_index_138_wbox{width:570px;position:relative;height: 400px;float: right;margin: 0px 40px 0px 0px;padding-top: 30px;box-sizing: border-box;}
.xn_c_index_138_contType{display:none;position:absolute;top:70px;left:0px;}
.xn_c_index_138_typeName{width:auto;height:24px;line-height:20px;float:left;position:relative;top:0px;text-align:center;cursor:pointer;border-bottom: 4px solid #FFF;color: #000000;margin-right: 40px;}
.xn_c_index_138_typeName_cur{color:#bd0000;border-bottom:4px solid #bd0000;}
.xn_c_index_138_contType_cur{display:block;}
.xn_c_index_138_img,.xn_c_index_138_Count,.xn_c_index_138_newsMore{display:none;}
.xn_c_index_138_context{height:80px;line-height:20px;overflow:hidden;}
.xn_c_index_138_hotUl{overflow: hidden;padding-top: 12px;position: relative;}
.xn_c_index_138_list{width:100%;height:45px;float:left;position: relative}
.xn_c_index_138_Title{width: 505px;height: 45px;position: relative;float: left;line-height: 45px;}
.xn_c_index_138_Title a{color: #383737;font-size: 15px;}
.xn_c_index_138_indDate{width: auto;position: relative;float: right;color: #383737;font-size: 13px;line-height: 45px;}
.xn_c_index_138_indDate span{display: block;float: left;}
.xn_c_index_138_headUl{width: 505px;height: 390px;position: absolute;top: -55px;left: -575px;}
.xn_c_index_138_headLi{width: 505px;height: 390px;position: relative;}
.xn_c_index_138_headTitle{width: 100%;height: 40px;line-height: 40px;}
.xn_c_index_138_headTitle a{display: block;width: 100%;height: 100%;line-height: 40px;color: #808080;font-size: 14px;text-align: center}
.xn_c_index_138_wrap a:hover{color: #bd0000;}
.xn_c_index_138_headImg,.xn_c_index_138_headImg img{width: 505px;height: 340px}
.xn_c_index_138_headCount{}
.xn_c_index_138_headDate{}
.xn_c_index_138_hcontext{display: none;}
.xn_c_index_138_hMore{}
/*end_xn_c_index_138_wrap*/
```

```js
/*xn_c_index_138_wrap*/
$(function(){
	$(".xn_c_index_138_typeName").first().addClass("xn_c_index_138_typeName_cur");
	$(".xn_c_index_138_contType").first().addClass("xn_c_index_138_contType_cur");
	$(".xn_c_index_138_typeName").hover(function(){
		$(this).addClass("xn_c_index_138_typeName_cur");
		$(this).next(".xn_c_index_138_contType").addClass("xn_c_index_138_contType_cur");
		$(this).parent().siblings().children(".xn_c_index_138_typeName").removeClass("xn_c_index_138_typeName_cur");
		$(this).parent().siblings().children(".xn_c_index_138_contType").removeClass("xn_c_index_138_contType_cur");
	});
});
/*end_xn_c_index_138_wrap*/
```