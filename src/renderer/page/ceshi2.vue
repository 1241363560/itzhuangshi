<template>
    <div>
        <ul>
            <li>
                 <router-link to="/">返回</router-link>
            </li>
           <li><h1>商品代码{{page}}</h1></li>
           <li>商品名称{{name}}</li>
           <li>商品价格{{age}}</li>
           <li><img :src="img" alt=""></li>
        </ul>

    </div>
</template>
 <style scoped>
 </style>
 
<script>
export default {
    name:'ceshi2',
    data(){
        return{
             page:this.$route.query.id,
             name:this.$route.query.name,
             age:this.$route.query.age,
             img:this.$route.query.img
        }
    }
}
</script>
