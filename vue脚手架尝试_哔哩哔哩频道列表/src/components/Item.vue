<template>
  <div class="Item" :class="{ active: isActive }" @click="clickHandClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是Boolean
      // required:true, //约束该属性必须要传递
      default: false, //设置默认值为true
    },
  },
  components: {
    name: "Item",
  },
  methods: {
    //监听点击事件，但是由于子组件不知点击事件该如何处理，于是向上抛出active事件
    clickHandClick() {
      this.$emit("active");
    },
  },
};
</script>
<style scoped>
.active {
  background: #e7e7e7;
}
.Item {
  height: 46px;
  width: 100%;
  line-height: 46px;
  cursor: pointer;
  transition: 0.5s;
}
.Item:hover {
  background: #e7e7e7;
}
</style>
