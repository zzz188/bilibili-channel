<template>
  <div class="p_channel">
    <BChannelTitle :isActive="isActive" @active="$emit('active',100)">
      <template v-slot:title>发现频道</template>
       <template v-slot:icon>&gt;</template>
    </BChannelTitle>
  </div>
</template>

<script>
import BChannelTitle from "../base_components/ChannelTitle";
export default {
  props:{
     isActive:{
          type:Boolean,    //设置参数样式为Boolean
      }
  },
  components: {
    BChannelTitle
  },
  data() {
    return {
      select: true
    };
  },
};
</script>

<style scoped>
</style>