<template>
<!-- 使用extraClass接受父组件传来的自定义样式 -->
    <i class="iconfont" :class="[iconClass,extraClass]"></i>
</template>

<script>
var map = {
    arrowUp:"icon-shangjiantou",
    arrowDown:"icon-xiajiantou",
    search:"icon-search"
}
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass:{
        type:String,
        default:""
    }
  },
  computed:{
      iconClass(){
          return map[this.type];
      }
  }
};
</script>
<style scoped>
@import "//at.alicdn.com/t/font_2237758_7w8njihz3is.css";
</style>
