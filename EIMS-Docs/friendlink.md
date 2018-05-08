# 友情链接

```html
<!--xn_f_21_wrap-->
                <div id="xn_f_21_wrap" class="xn_f_21_wrap" ds_block_id="1434" ds_number="xn_f_21_wrap" ds_v="170786583491793" is_design_source="true" design_source_area="ea_b" eims="xny">
                <div class="xn_f_21_xhbox">友情链接：</div>
                    <!--2014-05-21底部友情链接（文字）-->
                    <ShoveEIMS3:ShoveWebControl_Data id="xn_f_21_data" runat="server" DS-Condition=""  DS-Orders="[Order],[DateTime] DESC" DS-TableType="内容数据" DS-Id="" DS-TypeId="" DS-DataType="PC数据" DS-NavigateId="12" StP-SplitePage="True" StP-PageSize="1" StP-PageIndex="1" StP-PiParaName="pageindex" StP-PagingerId="">
                        <ItemTemplate>
                        <div class="xn_f_21_xhbox">
                            <a target="_blank" href='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Url") %>' ><%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %></a>
                        </div>
                        </ItemTemplate>
                    </ShoveEIMS3:ShoveWebControl_Data>
                    <c_attribute r_database="nid:12; type_ids:*; t_fields:ParentId,Name,Order,Id,NavigateId,LinkUrl,isShow; c_fields:*=TypeId,Id,Order,DateTime,isShow,Name,Url" url=""></c_attribute>
                </div>
<!--end_xn_f_21_wrap-->
```

```css
/*xn_f_21_wrap*/
.xn_f_21_wrap{
    width: 540px;
    height: 25px;
    margin: 0px auto;
    position: absolute;
    top: 232px;
}
.xn_f_21_xhbox{float:left;width:80px;height:30px;margin:5px;overflow:hidden;text-align:center;}
/*end_xn_f_21_wrap*/
```