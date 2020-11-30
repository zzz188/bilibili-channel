<template>
    <div class="channel-search">
        <Search placeholder="搜索频道" @search="search"/>
    </div>
</template>
<script>
 import Search from "./Search"
export default {
    name:"ChannelSearch",
   components:{
       Search
   },
   methods: {
     search(e){
         console.log("搜索",e);
     }  
   },
}
</script>
<style scoped>
.channel-search{
    width: 100%;
    height: 34px;
    padding: 0 18px;
    margin: 18px 0;
    box-sizing: border-box;
}
</style>
