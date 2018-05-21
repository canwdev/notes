# 类别到内容筛选

```html
<ShoveEIMS3:ShoveWebControl_Data id="xn_c_index_275_tData" runat="server" DS-Condition="" DS-Orders="[Order]" DS-TableType="类别数据" DS-Id="" DS-TypeId="" DS-NavigateId="3" StP-SplitePage="True" StP-PageSize="10" StP-PageIndex="1" DS-DataType="PC数据" DisplayLevel="第一层"><ItemTemplate>
<!--这里写类别数据-->

    <ShoveEIMS3:ShoveWebControl_Data id="xn_c_index_275_subData" runat="server" DS-Condition="" DS-Orders="[Order]" DS-TableType="类别数据" DS-Id="" DS-TypeId="" DS-NavigateId="3" StP-SplitePage="true" StP-PageSize="10" StP-PageIndex="1" DS-DataType="PC数据" DisplayLevel="第一层"><ItemTemplate>

        <ShoveEIMS3:ShoveWebControl_Data ID="xn_c_index_275_cData" runat="server" ReceiveTypeId="True" ReceivePageIndex="True" LNo-EnabledLineNo="True" StP-SplitePage="true" StP-PageSize="50" StP-PageIndex="1" StP-PiParaName="pageindex" StP-PagingerId="" DS-DataType="PC数据" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Orders="[Order]" DS-Condition="[isHot]" DS-NavigateId="3" ReceivePageSize="True" RtF-LevelField="" RtF-EqualField="3.c.TypeId" RtF-IsReleSelfNavi="False"><ItemTemplate> 
        <!--这里写内容数据-->
        </ItemTemplate>
        </ShoveEIMS3:ShoveWebControl_Data>

    </ItemTemplate>
    </ShoveEIMS3:ShoveWebControl_Data>

</ItemTemplate>
</ShoveEIMS3:ShoveWebControl_Data>
```