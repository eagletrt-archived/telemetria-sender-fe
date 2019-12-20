<template>
  <div id="home">
    <div class="home">
      <h1 class="title">{{ msg }}</h1>
      <collections/>
    </div>
  </div>
</template>

<script>
import * as api from '../collectionService';
import Collections from './Collections.vue';

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

<style scoped>
.title {
  color: #F4F4F4;
  font-weight: bold;
}
</style>