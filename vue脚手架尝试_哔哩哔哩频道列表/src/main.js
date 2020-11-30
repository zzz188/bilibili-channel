import Vue from 'vue'
import App from './App.vue'
import groupService from "./services/service"

// async function test(){
//  var group =  await groupService.getGroup();
//  console.log(group);
// }
// test();
new Vue({
  render: h => h(App),
}).$mount('#app');
