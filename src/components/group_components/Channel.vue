<!--频道组合组件-->
<template>
  <div style="width: 261px">
    <div class="search_input">
      <SearchInput
        :placeHolder="'频道搜索'"
      ></SearchInput>
    </div>

    <PChannelTitle
      :isActive="activeId == 100"
      @active="activeId = $event"
    ></PChannelTitle>
    <PChannelList
      :column="2"
      :activeId="activeId"
      @active="activeId = $event"
    ></PChannelList>
  </div>
</template>

<script>
import PChannelList from "../para_components/ChannelList";
import PChannelTitle from "../para_components/ChannelTitle";
import SearchInput from "../base_components/SearchInput";
export default {
  components: {
    PChannelTitle,
    PChannelList,
    SearchInput,
  },
  data() {
    return {
      activeId: null,
    };
  },
};
</script>

<style scoped>
/*.search_input /deep/ .icon{
background:#888888 ;
}*/
/*.search_form /deep/ .icon{
background:#888888 ;
}*/
.search_input {
  height: 36px;
  margin: 20px 20px 10px 18px;
  box-sizing: border-box;
}

</style>