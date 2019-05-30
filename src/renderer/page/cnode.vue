<template>
    <div>
        <div class="madd"> 
            <div><router-link to="/xjbl">返回</router-link></div> 
            <h2>{{time}}</h2>
            <div class="contentss" v-html="content"></div>
         </div>
    </div>
</template>

<script>
export default {
    name:'cnode',
    data(){
        return{
            time:this.$route.query.itme,
            content:this.$route.query.content
        }
    }
}
</script>

<style scoped>
.contentss{
    width: 100%;
    overflow: hidden;
}
img{
    width: 100%;
}
.madd{
    padding: 20px;
}
</style>
