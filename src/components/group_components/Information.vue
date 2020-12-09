<!--信息主体显示页面，具体显示内容由频道列表的点击控制-->
<template>
    <div class="information">
<RecentList></RecentList>
    <!--获取路由传递过来的数据-->
        <p>{{$route.params.name}}</p>
        <p>{{$route.params.count}}</p>
        <ChannelSort></ChannelSort>
    </div>

</template>
<script>
import RecentList from "../para_components/RecentList";
import ChannelSort from '../base_components/ChannelSort';
export default {
    components:{
        RecentList,
        ChannelSort
    }
}
</script>

<style scoped>
.information{
    margin: auto;
    width: 890px;
    height: 100%;
    background: #666666;
}
</style>