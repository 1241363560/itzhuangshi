<template>
    <div class="contents">
        <div>
            测试
        </div>
        <router-link to="/jishu">计数器</router-link>
        <router-link to="/xjbl">时间</router-link>
        <ul>
           <li class="content" v-for="(abcd,index) in msssg" :key="index">
               <router-link :to="{path:'/ceshi2',query:{id:abcd.index,name:abcd.name,age:abcd.age,img:abcd.img}}">点击查看物品详情</router-link>
               <div>物品代码：{{abcd.index}}</div>
               <div>物品名称：{{abcd.name}}</div>
               <div>物品价格：{{abcd.age}}</div>
               <img class="imgage" :src="abcd.img" alt="">
           </li>
        </ul>
    </div>
</template>

<style>
 ul li{
    list-style: none;
}
a{
    color: #333;
}
.imgage{
    width: 200px;
    height: 150px;
    margin-top: 10px;
}
.content{
    float: left;
    padding: 10px;
    border: 1px solid #333;
    margin: 10px;
    text-align: center;
    box-shadow: 9px 13px 0px 0px;
}
.contents{
    width: 1250px;
    margin: 0 auto;
}

</style>


<script>
export default {
    name:"ceshi",
   data(){
       return{
           msssg:[{
               index:'1',
               name:'abc',
               age:'18',
               img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1393987749,3422146058&fm=27&gp=0.jpg',
               content:''
           },
           {
               index:'2',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'3',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'4',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'5',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'6',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'7',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'8',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'9',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'10',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }, {
               index:'11',
               name:'def',
               age:'20',
               img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg'
           }
           ]
       }
   },
}


        

</script>
