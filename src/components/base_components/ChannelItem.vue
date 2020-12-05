<!--Channel每个项目主体的基本样式-->
<template>
  <div class="channel_list">
    <ChannelBackground>
      <div class="inner">
        <span class="name">
          <slot name="name">{{ items.name }}</slot>
        </span>
        <span class="count">
          <slot name="count">{{ items.channel_count }}</slot>
        </span>
      </div>
    </ChannelBackground>
  </div>
</template>

<script>
import ChannelBackground from "./ChannelBackground";
export default {
  props: {
    //传过来的item数组
    items: {
      type: Object, //设置参数为一个对象
    },
  },
  components: {
    ChannelBackground,
  },
};
</script>

<style scoped>
.name {
  font-size: 14px;
  padding-right: 6px;
  color: #222222;
}
.count {
  font-size: 12px;
  color: #999999;
}
.inner {
  width: 100%;
  padding: 0 20px;
}
</style>
