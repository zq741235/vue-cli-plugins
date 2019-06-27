<% if (demoVuex) { %>
<template>
  <div class="demo-vuex"> 
    <h1>This is an vuex page</h1>
    <button @click="setStoreData">increment store value</button>
    <div>store value: {{count}}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('home') 
export default {
  name: 'home',
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  components: {},
  mounted() { 
  },
  methods: {
    ...mapMutations(['increment']),
    setStoreData() {
        this.increment()  
    }
  }
}
</script>
<% } %>