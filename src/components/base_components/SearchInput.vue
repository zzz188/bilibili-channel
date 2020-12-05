<template>
  <form class="search_form" @submit.prevent="handClick">
    <input style="text" v-model="plackHolderValue" :placeholder="placeHolder"  />
    <div class="icon" @click="handClick()">
      <Icon :type="'search'" ></Icon>
    </div>
  </form>
</template>

<script>
import Icon from "./Icon";
export default {
  props: {
    placeHolder: {
      type: String,
    },
  },
  data(){
    return{
      plackHolderValue:"",
    }
  },
  components: {
    Icon,
  },
  methods:{
    handClick(){
      console.log("搜索",this.plackHolderValue)
      // this.plackHolderValue=""  发起搜索请求后清空输入框中的数据
    }
  }
};
</script>

<style scopde>
.search_form {
  width: 100%;
  height: 100%;
  position: relative;
}
.search_form input {
  height: 100%;
  width: 100%;
  padding: 0 45px 0 5px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  outline: none;
}
.icon {
  width: 50px;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>