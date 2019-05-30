<template>
    <div>
        <div><router-link to="/">返回</router-link></div>
        {{msgaaaa}}
        <div>
            <ul>
                <li v-for="(indexs,index) in inde" :key="index">
                    <router-link :to="{path:'/cnode',query:{itme:indexs.title,content:indexs.content}}">
                    <div class="title">
                        <img src="" alt="">
                        <span>{{indexs.reply_count}}/{{indexs.visit_count}}</span>
                        <h3>{{indexs.title}}</h3>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
a{
    color: #333;
     text-decoration:none;
     /* out-line: none; */
}
li{
    border-bottom:1px solid #333;
}
.title{
    display: flex;
    justify-content: flex-start;
}
.title span{
    display: block;
    width: 100px;
    line-height: 60px;
}
.contents{
    width: 100%;
    height: 60px;
    overflow: hidden;
}
</style>

<script>
import { error } from 'util';
export default {
    name:'xjbl',
    data(){
        return{
          msgaaaa: new Date().toLocaleString(),
          inde:[]
        }
    },
    created(){
        this.$axios({
            method:'get',
            url:' https://cnodejs.org/api/v1/topics',
        }).then((response)=>{
            console.log(response.data)
           this.inde=response.data.data;
        }).catch((error)=>{
            console.log(error)
        })
    },
}

</script>
