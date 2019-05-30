<template>
  <div id="app">
    <div class="head">
       <div class="is">当前时间 {{msgaaaa}}</div>
       <div>
            <button @click="min" class="btn">最小化</button>
        <button @click="close" class="btn">关闭</button>
       </div>
       
    </div>
    <div class="con">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import {remote, ipcRenderer} from 'electron'
import { setInterval } from 'timers';

  const {BrowserWindow} = remote
  export default {
    name: 'electron-vue-demo',
    data(){
        return{
             msgaaaa:'',
             timer:null
        }
    },
    methods:{
        // 当点击的时候传给主进程要传递的信息
        min(){
            ipcRenderer.send('min')
        },
        close(){
            ipcRenderer.send('close')
        },
    },
     created: function() {
            if(this.timer == null){
                this.timer = setInterval( ()=>{
                    this.msgaaaa=new Date().toLocaleString() 
                },1)
            }
        }
  }  
</script>

<style scoped>
  /* CSS */
  button {
  -webkit-app-region: no-drag;
}
  .head{
      -webkit-app-region: drag;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background: #333;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
  }
  .head button{
      height: 20px;
      margin: 10px;
      font-size: 12px;
      padding: 0 5px;
      border:none;
      outline: none;
      background: #abcdef;
  }
  .con{
      margin-top: 40px;
  }
  .is{
      color: #fff;
      width: 300px;
      margin: 0 auto;
  }
</style>
