<template>
  <div id="home">
    <div class="home">
      <h1>{{ msg }}</h1>
      <collections/>
    </div>
  </div>
</template>

<script>
import * as api from '../collectionService'
import Collections from './Collections.vue'

export default {
  name: 'Home',
  components: {
    Collections
  },
  data(){
    return {
      test: {},
    }
  },
  props: {
    msg: String
  },
  methods: {
    print(){
      }
  },
  beforeCreate() {
  },
  mounted() {
    console.log('Mounted...')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
