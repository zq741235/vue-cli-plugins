<% if (demoAxios) { %>
<template>
  <div class="about"> 
    <h1>This is an axios demo page</h1>
    <button @click="getAboutData">点击请求</button>
    <h4>请求结果:</h4>
     {{resObj}}
  </div>
</template>
<script>
import { GET_ABOUT } from '@/api' 
export default {
  name: 'about',
  data(){
    return{
      resObj:{}
    }
  },
  components: { 
  },
  mounted() {},
  methods: {
    getAboutData() {
      this.$_get(GET_ABOUT, {}).then(res => {
        console.log(res)
        this.resObj = res
      }).catch(res=>{
        // success : false
        console.log(res)
        this.resObj = res
      })
    }
  }
}
</script>
<style scoped>
button {
  font-size: 20px;
  border:1px solid #f00;
}
</style>
<% } %>