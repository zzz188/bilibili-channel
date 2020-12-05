<!--图标封装-->
<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
var map = {
  arrowUp: "icon-shangjiantou",
  arrowDown: "icon-xiajiantou",
  arrowRight: "icon-youjiantou",
  search:"icon-search"
};
export default {
  props: {
    //传递的图标名
    type: {
      type: String,
      required: true,
    },
    //传递的图标自己设置的样式，增强复用性
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2237758_7w4fhy1u9to.css";
</style>