<template>
  <div>
    <!-- 此处无法处理子组件抛上来的点击事件，于是用$emit继续向上抛出active事件并将被点击的元素id也向上抛出 -->
    <div class="channel-list" :style="{height:`${height}px`}">
      <div
        v-for="item in channels"
        :key="item.id"
        class="item"
        :style="{ width: `${100 / columns}%` }"
      >
        <Channel
          :data="item"
          :isActive="item.id === activeId"
          @active="$emit('active', item.id)"
        ></Channel>
      </div>
    </div>
    <div class="isExpand" @click="isExpand = !isExpand">
      <span>{{ isExpand ? "收起" : "展开" }}</span>
      <!--可以使用extraClass给icon设置一个自定义的样式为icon,在样式中注释掉了-->
      <Icon :type="isExpand ? 'arrowUp' : 'arrowDown'" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import GroupService from "../services/service";
import Icon from "./Icon"
export default {
  name: "channelList",
  components: {
    Channel,
    Icon
  },
  props: {
    activeId: {
      type: Number,
      required: true, //设置父组件必须给子组件传递的数据
    },
    columns: {
      type: Number,
      default: 2, //设置默认2列
    },
  },
  
  data() {
    return {
      channels: [],
      isExpand: true,
    };
  },
  computed: {
    height() {
      var rows = 3;
      if (this.isExpand) {
        rows = Math.ceil(this.channels.length / this.columns);
      }
      return rows * 46;
    },
  },
  //设置组件的生命周期created为异步，该生命周期将在组件创建开始即插入数据，不设置async将无法获取请求的数据
  async created() {
    var dataList = await GroupService.getGroup();
    //两种筛选方式的写法，一种用es6箭头函数方便简洁，一种用常规写法代码多
    this.channels = dataList.filter((item) => item.name !== "热门");
    // this.channels =  dataList.filter(function(item){
    //   if(item.name !=="热门"){
    //     return true;
    //   }
    //   return false;
    // })
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
  transition: 0.3s;
}
.item {
  width: 50%;
  float: left;
}
.isExpand {
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999999;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}
/* 
:extraClass="icon"
.icon{
  font-size: 20px;
  margin-left: 20px;
}*/
</style>