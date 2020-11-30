<template>
   <div>
      <ChannelSearch />
      <ListMenuTitle :isActive="activeId === 100" @active="activeId = 100">
        <template v-slot:title> 发现频道 </template>
        <template v-slot:icon> &gt; </template>
      </ListMenuTitle>
      <ChannelList
        :columns="2"
        :activeId="activeId"
        @active="activeId = $event"
      ></ChannelList>
    </div>
</template>

<script>
import ListMenuTitle from "./ListMenuTitle";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";
export default {
  name: "Aside",
  data() {
    return {
      select: true,
      activeId: 100,
    };
  },
  components: {
    ListMenuTitle,
    ChannelList,
    ChannelSearch,
  },
};
</script>

<style scoped>
 .Aside{
     width: 100%;
     overflow: auto;
 }   
</style>