<!--Channel每个项目主体的基本样式-->
<template>
  <div class="channel">
    <ChannelBackground :isActive="isActive" @active="$emit('active')">
      <div class="bchannel">
        <span class="channel_title">
          <slot name="title"></slot>
        </span>
        <span class="channel_icon">
          <slot name="icon"></slot>
        </span>
      </div>
    </ChannelBackground>
  </div>
</template>

<script>
import ChannelBackground from "./ChannelBackground";
export default {
  props: {
    //判断是否点击的参数
    isActive: {
      type: Boolean,
    },
  },
  components: {
    ChannelBackground,
  },
};
</script>

<style scoped>
.channel {
  height: 46px;
  line-height: 46px;
  cursor: pointer;
}
.channel_icon {
  float: right;
}
.bchannel {
  padding: 0 20px;
}
</style>