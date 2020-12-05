<template>
  <div id="app">
    <div class="left">
      <Channel></Channel>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Channel from "./components/group_components/Channel";
import Informarion from "./components/group_components/Information";
export default {
  name: "App",
  components: {
    Channel,
    Informarion,
  },
};
</script>

<style>
#app {
  display: flex;
}
.right {
  width: 100%;
  height: 500px;
  padding: 0 20px;
  background: rgb(233, 0, 0);
}
</style>
