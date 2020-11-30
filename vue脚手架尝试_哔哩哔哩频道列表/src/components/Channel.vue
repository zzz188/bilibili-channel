<template>
  <div class="channel">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <span class="name">{{ data.name }}</span>
        <span class="count">{{ data.channel_count }}</span>
      </div>
    </Item>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  name: "Channel",
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是Boolean
      // required:true, //约束该属性必须要传递
      default: true, //设置默认值为true
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Item,
  },
};
</script>
<style scoped>
.group {
  width: 100%;
}
.count {
  color: #999999;
  font-size: 12px;
  margin-left: 6px;
}
.name {
  color: #222222;
  font-size: 14px;
}
</style>