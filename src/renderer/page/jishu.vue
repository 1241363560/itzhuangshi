<template>
    <div>
            <div><router-link to="/">返回</router-link></div>
        <p>当前运行了{{dey}}时{{msgabc}}分{{msgab}}秒{{msg}}</p>
        <button @click="msg++">点击加1</button>
        <button @click="msg--">点击减1</button>
        <button @click="click">暂停</button>
        <button @click="jia">开始</button>
        <!-- <button @click="ting">停止</button> -->
        <div style="padding-top:20px;">
            <button v-on:click='say(123)'>123</button>
            <button v-on:click='say(456)'>456</button>
        </div>
        <div style="padding:20px;">
            <input type="checkbox" id="1" value="1" v-model="chen">
            <label for="1">1</label>
            <input type="checkbox" id="2" value="2" v-model="chen">
            <label for="2">2</label>
            <input type="checkbox" id="3" value="3" v-model="chen">
            <label for="3">3</label>
            <input type="checkbox" id="4" value="4" v-model="chen">
            <label for="4">4</label>
            <input type="checkbox" id="5" value="5" v-model="chen">
            <label for="5">5</label>
            <p>{{ chen }}</p>
        </div>
        <div style="padding:20px">
            <div @click="show = !show">
                点击切换
            </div>
            <transition name="slide-fade">
                <p v-if="show">
                    sadjksha
                </p>
                <p v-else>ssssss</p>
            </transition>
        </div>
        <div style="padding:20px">
                <span @click="view='v-a'">A</span>
                <span @click="view='v-b'">B</span>
                <span @click="view='v-c'">C</span>
            <transition name="component-fade" mode="out-in">
                <component v-bind:is="view"></component>
            </transition>
        </div>
    </div> 
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import { setTimeout, clearInterval } from 'timers';
export default {
    name:'jishu',
    data(){
        return{
            msg:0,
            msgab:0,
            msgabc:0,
            dey:0,
            chen:[],
            show:true,
            view:'v-a',
            shu:true
        }
    },
    methods:{
        say(msss){
            alert(msss)
        },
        jia(){
            if(this.shu){
                this.shu=false
                   this.ding=setInterval(()=>{
                    if(this.msg<99){
                        this.msg++
                    }else if(this.msg==99){
                        this.msg='0'
                        this.msgab++
                    }
                    if (this.msgab==59) {
                        this.msgab='0'
                        this.msgabc++
                    }else if(this.msgabc==59){
                        this.msgabc='0'
                        this.dey++
                        console.log("已经过去"+this.dey+"小时")
                        
                    }
                },10)  
                }
               
           
        },
        click(){
            window.clearInterval(this.ding)
            this.shu=true
        }
    },
    components:{
        'v-a':{
            template:'<div>A</div>'
        },
        'v-b':{
            template:'<div>b</div>'
        },
        'v-c':{
            template:'<div>c</div>'
        }
    }
};

</script>
