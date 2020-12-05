<!--Channel每个item的背景样式-->
<template>
  <div class="channel_background" :class="{ change: isActive }" @click="$emit('active')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
      isActive:{
          type:Boolean,    //设置参数样式为Boolean
          default:false
      }
  }
};
</script>

<style scope>
.channel_background {
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  box-sizing: border-box;
}
.change {
  background: #e7e7e7;
}
.channel_background:hover {
  background-color: #e7e7e7;
}
</style>