//设置网络连接获取哔哩哔哩的频道数据
export default {
    /*设置函数为异步函数async */   async getGroup(){
           var resp =/*与异步函数相匹配的等待数据的定义await */ await fetch('/x/web-interface/web/channel/category/list');
           var data = await resp.json();
           return data.data.categories;
       }
   }