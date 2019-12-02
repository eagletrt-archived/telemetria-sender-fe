<template>
  <div class="collections">
    
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p>{{collections}}</p>
        </div>
        <div class="col-sm">
          <p>{{collections}}</p>
        </div>
      </div>
    </div>
    <button @click="download()">Download ME!</button>
    <tech/>
  </div>
</template>

<script>
import * as api from '../collectionService'

export default {
  name: 'collections',
  data(){
    return {
      collections: {},
    }
  },
  props: {
    msg: String
  },
  methods: {
    download(){
      let bodyrequest = {"vadena_25November": ['test0']}
      console.log('Download Started')
      api.exportCollectionsJSON(bodyrequest).then(data => this.downloadFile(data))
    },
    downloadFile(data){
      console.log(data)
      var fileURL = window.URL.createObjectURL(new Blob([JSON.stringify(data)], {type : 'application/json'}));
      var fileLink = document.createElement('a');

      fileLink.href = fileURL;
      fileLink.setAttribute('download', 'imported.json');
      document.body.appendChild(fileLink);

      fileLink.click();
    }
  },
  beforeCreate() {
  },
  mounted() {
    console.log('Calling API...')
    api.getCollections().then(data => this.collections = data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.collections {
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

</style>
