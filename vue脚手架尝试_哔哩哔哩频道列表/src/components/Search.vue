<template>
  <form class="search-area" @submit.prevent="handSearch">
    <input type="text" v-model="searchValue" :placeholder="placeholder"  />
    <div class="icon" @click="handSearch">
      <Icon type="search" />
    </div>
  </form>
</template>
<script>
import Icon from "./Icon";
export default {
  components: {
    Icon,
  },
  props: {
    placeholder: {
      type: String,
      default: "搜索关键字",
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handSearch() {
      if (this.searchValue) {
       this.$emit("search", this.searchValue);
      }
    },
  },
};
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.search-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.search-area input {
  width: 100%;
  height: 100%;
  padding: 0 45px 0 5px;
  border: none;
  outline: none;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  box-sizing: border-box;
}
.search-area input::placeholder{
    color: #999999;
}
.search-area .icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  /*background: red; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
}
</style>