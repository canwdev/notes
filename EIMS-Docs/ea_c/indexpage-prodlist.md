# 首页产品列表

```html
<ShoveEIMS3:ShoveWebControl_Data ID="xn_c_index_64_Data" runat="server" DS-NavigateId="3" ReceivePageIndex="True" ReceiveTypeId="True" ReceivePageSize="True" DS-Condition="isNew" DS-Orders="[Order],[DateTime] DESC" DS-TableType="内容数据" DS-Id="" DS-TypeId="" StP-PagingerId="" StP-PiParaName="pageindex" StP-PageIndex="1" StP-PageSize="7" StP-SplitePage="True">
    <ItemTemplate>
    <li>
        <div class="xn_c_index_64_box">
            <div class="xn_c_index_64_img">
                <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'>
                    <img  data-original='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("IndexImage") %>' alt='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %>' title='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %>' />
                </a>
            </div>
            <div class="xn_c_index_64_content">
                <div class="xn_c_index_64_title">
                    <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'>
                    <%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Name") %>
                    </a>
                </div>
                <div class="xn_c_index_64_time">
                    <span class="xn_c_index_64_date1">
                        <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_64_Text1" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示年" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False"></ShoveEIMS3:ShoveWebControl_Text>
                    </span>
                    <span class="xn_c_index_64_date2">-</span>
                    <span class="xn_c_index_64_date3">
                        <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_64_Text2" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示月" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False"></ShoveEIMS3:ShoveWebControl_Text>
                    </span>
                    <span class="xn_c_index_64_date4">-</span>
                    <span class="xn_c_index_64_date5">
                        <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_64_Text3" runat="server" DateShowType="1974-03-07" ShowDateContent="只显示日" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("DateTime") %>' IsChange="False"></ShoveEIMS3:ShoveWebControl_Text>
                    </span>
                </div>
                <div class="xn_c_index_64_neirong" ej="edit_span">
                    <ShoveEIMS3:ShoveWebControl_Text ID="xn_c_index_64_coentText" Text='<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("Introduce")%>' runat="server"  IsFilterHtmlTag="True" IsRemoveImage="True" CutWords="400" IsChange="False">
                    </ShoveEIMS3:ShoveWebControl_Text>
                </div>
                <div class="xn_c_index_64_gdmore">
                <a target="_blank" href='prod_view.aspx?TypeId=<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>&Id=<%# ((DataHelper.IData)Container.DataItem).ID %>&FId=t3:<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("TypeId") %>:3'>
                    <!--ea_span_index_64_gdmore-->
                    <span name="_index_64_gdmore">查看更多>></span>
                    <!--ea_span_index_64_gdmore-->
                </a>
            </div>
            </div>
        </div>
    </li>
</ItemTemplate>
</ShoveEIMS3:ShoveWebControl_Data>
```