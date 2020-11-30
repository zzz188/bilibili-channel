<template>
  <div id="app">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="icon">
          <slot name="icon"></slot>
        </div>
      </div>
    </Item>
  </div>
</template>


<script>
import Item from "./Item";

export default {
  name: "App",
  props: {
    isActive: false,
  },
  data() {
    return {
      select: true,
    };
  },
  components: {
    Item,
  },
};
</script>

<style>
.inner {
  padding: 0 20px;
}
.title {
  font-size: 16px;
  float: left;
}
.icon {
  float: right;
}
</style>
