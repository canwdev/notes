# 手机首页显示产品列表

```html
<!--xn_mc_index_3_wrap-->
            <div class='xn_mc_index_3_wrap' id='xn_mc_index_3_wrap'>
                <!--产品类别列表 2014-06-13-->
                <div class='xn_mc_index_3_col'>
                    <span class='xn_mc_index_3_colName'>产品类别</span>
                </div>
                <div class='xn_mc_index_3_main'>
                    <ul class='xn_mc_index_3_ul'>
                      <ShoveEIMS3:ShoveWebControl_Data id="xn_mc_index_3_data" runat="server" DS-NavigateId="3" DS-Orders="Order,DateTime desc" DS-DataType="PC数据" ReceiveTypeId="True" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Condition="isHome" StP-SplitePage="True" StP-PageSize="50" StP-PageIndex="1" StP-PiParaName="pageindex" StP-PagingerId="">
                            <itemtemplate>
                                <li class='xn_mc_index_3_li' id='xn_mc_index_3_li' runat='server'>
                                    <div class='xn_mc_index_3_img'>
                                       <a href='<%# string.IsNullOrEmpty(((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl").ToString()) ? "prod_view.aspx?TypeId=" + ((DataHelper.IData)Container.DataItem).ID + "&id="+((DataHelper.IData)Container.DataItem).ID+"&fid=t" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId") + ":" + ((DataHelper.IData)Container.DataItem).ID + ":" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId")  :((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl")  %>'>
                                            <img data-original='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("SmallImageUrl") %>'>
                                        </a>
                                    </div>
                                    <div class='xn_mc_index_3_cont'>
                                        <div class='xn_mc_index_3_name'>
                                            <a href='<%# string.IsNullOrEmpty(((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl").ToString()) ? "prod_view.aspx?TypeId=" + ((DataHelper.IData)Container.DataItem).ID + "&id="+((DataHelper.IData)Container.DataItem).ID+"&fid=t" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId") + ":" + ((DataHelper.IData)Container.DataItem).ID + ":" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId")  :((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl")  %>'>
                                                <%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("M_Name") %>
                                            </a>
                                        </div>
                                        <div class='xn_mc_index_3_intro'>
                                            <a href='<%# string.IsNullOrEmpty(((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl").ToString()) ? "prod_view.aspx?TypeId=" + ((DataHelper.IData)Container.DataItem).ID + "&id="+((DataHelper.IData)Container.DataItem).ID+"&fid=t" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId") + ":" + ((DataHelper.IData)Container.DataItem).ID + ":" + ((DataHelper.IData)Container.DataItem).GetPropertyToString("NavigateId")  :((DataHelper.IData)Container.DataItem).GetPropertyToString("LinkUrl")  %>'>
                                                <shoveeims3:shovewebcontrol_text id='xn_mc_index_3_introText' runat='server' cutwords='1000' text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("M_Introduce") %>' ischange='False' isfilterhtmltag='true'></shoveeims3:shovewebcontrol_text>
                                            </a>
                                        </div>
                                    </div>
                                    <div class='cle'></div>
                                </li>
                            </itemtemplate>
                        </shoveeims3:shovewebcontrol_data>
                    </ul>
                    <div class='ix_pro'>
                        <a href='pro.aspx?FId=n3:3:3'>MORE+</a>
                    </div>
                </div>
                <c_attribute r_database='nid:3; type_ids:*; t_fields:M_Name,M_isShow,LinkUrl,Order,Id,NavigateId,ParentId,M_ImageUrl,M_Introduce; c_fields:*=Id,TypeId,DateTime,Order,M_isShow' url='products.aspx'></c_attribute>
            </div>
            <!--end_xn_mc_index_3_wrap-->
```

```css
/*xn_mc_index_3_wrap*/
.xn_mc_index_3_wrap{width:100%; margin:10px auto 24px;position: relative;}
.xn_mc_index_3_col{width: 320px;height: 62px;font-size: 0;background:url(http://www.cossla.com/m/Images/xn_mc_index_3_col.png) top center no-repeat;margin: 0 auto;background-size: 320px 62px;}
.xn_mc_index_3_ul{overflow: hidden;width: 100%;box-sizing: border-box;margin-top: 5px;margin-bottom: 14px;}
.xn_mc_index_3_ul li{width: 48%;float: left;background: #fafafa;margin-bottom: 4%;}
.xn_mc_index_3_ul li:nth-child(2n){float: right;}
.xn_mc_index_3_img{width:100%; min-height: 80px; overflow: hidden;}
.xn_mc_index_3_img img{width:100%;}
.xn_mc_index_3_cont{width:90%;margin: 0 auto;padding: 4px 0 8px;text-align: center;}
.xn_mc_index_3_name{width:100%; height:24px; line-height:24px; overflow: hidden;font-size:0.4rem; color:#333;}
.xn_mc_index_3_name a{display: block;width:100%; height:24px; line-height:24px;color:#333;white-space: nowrap; 
	text-overflow:ellipsis; /*溢出省略号，支持ie、safari（webkit）*/
	-o-text-overflow:ellipsis; /*溢出省略号，支持opera*/
	overflow:hidden;/*溢出隐藏*/
	-moz-binding:url('ellipsis.xml#ellipsis');/*溢出省略号，支持firefox*/}
.xn_mc_index_3_intro{width:100%; height:22px; line-height:22px; overflow: hidden;font-size:0.3rem; color:#333;}
.xn_mc_index_3_intro a{color:#333;width:100%;display: block; height:22px; line-height:22px;white-space: nowrap; 
	text-overflow:ellipsis; /*溢出省略号，支持ie、safari（webkit）*/
	-o-text-overflow:ellipsis; /*溢出省略号，支持opera*/
	overflow:hidden;/*溢出隐藏*/
	-moz-binding:url('ellipsis.xml#ellipsis');/*溢出省略号，支持firefox*/}
.ix_pro{width: 160px;height: 30px;line-height: 30px;text-align: center;border: 1px solid #1d2853;margin: 0 auto;font-size: 0.4rem;color: #1d2853;}
.ix_pro a{display: block;color: #1d2853;}
.in_img{width: 100%;overflow: hidden;position: relative;margin-bottom: 10px;}
.in_img img{width: 100%;}
/*end_xn_mc_index_3_wrap*/
```

```js
/*xn_mc_index_3_wrap*/
function setImageindex1(){
            var img_height=$('.xn_mc_index_3_ul img:eq(0)').height();
            $('.xn_mc_index_3_ul img').each(function(){
                $(this).parent().height(img_height); 
            });
            $('.xn_mc_index_3_ul img').unbind('load').bind('load',function(){
                setTimeout(function() {
                    var img_height=$('.xn_mc_index_3_ul img:eq(0)').height();
                    $('.xn_mc_index_3_ul img').each(function(){
                       $(this).parent().height(img_height); 
                    });
                }, 1000);
            });
        }
$(function(){
    if($("#xn_mc_index_3_wrap").length > 0){
        setImageindex1();
        $(window).resize(function(){ setImageindex1();})
    }  
});
/*end_xn_mc_index_3_wrap*/
```