<% if (demoAxios) { %>
<template>
  <div class="about"> 
    <h1>This is an axios demo page</h1>
    <button @click="getAboutData">点击请求</button>
  </div>
</template>
<script>
import { GET_ABOUT } from '@/api' 
export default {
  name: 'about',
  components: { 
  },
  mounted() {},
  methods: {
    getAboutData() {
      this.$_get(GET_ABOUT, {}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<% } %>