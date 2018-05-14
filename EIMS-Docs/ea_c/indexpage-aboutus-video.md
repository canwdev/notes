# 首页关于我们&视频

```html
<div class="index_cnt_m_about_more"><a href="about.aspx?FId=n1:1:1"></a></div>


<ShoveEIMS3:ShoveWebControl_Text ID="ShoveWebControl_Text1" runat="server" CutWords="1000" IsRemoveImage="False" IsFilterHtmlTag="True" DataSource="1&amp;&amp;T_News&amp;&amp;&amp;" BindField="Content"></ShoveEIMS3:ShoveWebControl_Text>


<ShoveEIMS3:ShoveWebControl_Data ID="ShoveWebControl_Data_video001" runat="server" DS-NavigateId="15" DS-TypeId="" DS-Id="" DS-TableType="内容数据" DS-Orders="[Order],[DateTime] DESC" DS-Condition="isShow" StP-SplitePage="True" StP-PageSize="1" StP-PageIndex="1" StP-PiParaName="pageindex" StP-PagingerId="" ReceiveTypeId="True" ReceivePageSize="True" ReceiveCondition="True">
        <ItemTemplate>
        <video id="videoshow" src="<%# ((DataHelper.IData)Container.DataItem).GetPropertyToString("FileUrl") %>" controls="controls"></video>
        </ItemTemplate>
</ShoveEIMS3:ShoveWebControl_Data>
```