<template>
  <div class="collections">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div v-for="(db, index) of databases" :key="db">
            <h2 @click="selectDb(index)">{{db}}</h2>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="collection of currentCollections" :key="collection">
            <input
              v-show="false"
              type="checkbox"
              :id="collection"
              :checked="toExport[currentDbName].indexOf(collection) !== -1"
              @change="setCollection(collection)"
            />
            <label
              :for="collection"
              :style="{ color: (toExport[currentDbName].indexOf(collection) !== -1 ? 'green' : 'gray') }"
            >{{collection}}</label>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="db of selectedDatabases" :key="db">
            <h4>{{db}}</h4>
            <div v-for="collection of toExport[db]" :key="collection">
              <span>{{ collection }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <button @click="download()">Download ME!</button>
    </div>
  </div>
</template>

<script>
import * as api from "../collectionService";

export default {
  name: "collections",
  data() {
    return {
      collections: {},
      currentDb: 0,
      toExport: {},
      selectedDatabases: []
    };
  },
  props: {
    msg: String
  },
  computed: {
    databases: function() {
      return Object.keys(this.collections);
    },
    currentCollections: function() {
      return this.collections[this.currentDbName];
    },
    currentDbName: function() {
      return this.databases[this.currentDb];
    }
  },
  watch: {
    databases: function() {
      this.toExport = {};
      this.databases.forEach(db => (this.toExport[db] = []));
    },
    toExport: {
      deep: true,
      handler: function() {
        this.selectedDatabases = Object.keys(this.toExport).filter(
          key => this.toExport[key].length > 0
        );
      }
    }
  },
  methods: {
    selectDb(index) {
      this.currentDb = index;
    },
    setCollection(collection) {
      const db = this.databases[this.currentDb];
      if (this.toExport[db].includes(collection)) {
        this.toExport[db] = this.toExport[db].filter(
          coll => coll !== collection
        );
      } else {
        this.toExport[db] = [...this.toExport[db], collection];
      }
      this.toExport = { ...this.toExport };
    },
    download() {
      api
        .exportCollectionsJSON(this.toExport)
        .then(data => this.downloadFile(data));
    },
    downloadFile(data) {
      console.log(data);
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "zip.zip");
      document.body.appendChild(link);
      link.click();
    }
  },
  mounted() {
    console.log("Calling API...");
    api.getCollections().then(data => (this.collections = data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collections {
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
