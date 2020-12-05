<template>
    <div class="information">
    <!--获取路由传递过来的数据-->
        <p>{{$route.params.name}}</p>
        <p>{{$route.params.count}}</p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.information{
    margin: auto;
    width: 850px;
    height: 100%;
    background: #666666;
}
</style>