<!--频道列表组件-->
<template>
  <div>
    <div class="channel_list" :style="{height:`${height}px`}">
      <div
        class="list"
        v-for="item in items"
        :key="item.id"
        :style="{ width: `${100 / column}%` }"
      >
        <BChannelBackground
          :isActive="activeId === item.id"
          @active="$emit('active', item.id)"
        >
          <BChannelItem :items="item">
            <template v-slot:name></template>
            <template v-slot:count></template>
          </BChannelItem>
        </BChannelBackground>
      </div>
    </div>
    <div class="heightChange" @click="isExpand = !isExpand">
      <span>{{ isExpand ? "折叠" : "展开" }}</span>
      <Icon :type="isExpand ? 'arrowUp' : 'arrowDown'"></Icon>
    </div>
  </div>
</template>

<script>
import BChannelBackground from "../base_components/ChannelBackground";
import BChannelItem from "../base_components/ChannelItem";
import service from "@/services/service";
import Icon from "../base_components/Icon"
export default {
  props: {
    //设置有几列，默认两列，可以更好的复用
    column: {
      type: Number,
      default: 2,
    },
    //获取被点击的item的id，由父组件传入
    activeId: {
      type: Number, //设置参数样式为Boolean
    },
  },
  components: {
    BChannelItem,
    BChannelBackground,
    Icon
  },
  data() {
    return {
      items: [],
      isExpand: true,
    };
  },
  computed: {
    height() {
      var rows = 3;
      if (this.isExpand) {
       rows = Math.ceil(this.items.length / this.column)
      }
      return rows * 40
    },
  },
  async created() {
    var group = await service.getGroup();
    this.items = group.filter((item) => item.name !== "热门");
  },
};
</script>

<style scope>
.channel_list {
  overflow: hidden;
  transition: 0.5s;
}
.list {
  height: 40px;
  float: left;
  line-height: 40px;
}
.heightChange {
  font-size: 14px;
  color: #999999;
  line-height: 40px;
  text-align: center;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-bottom: 0.5px solid #e7e7e7;
}
</style>