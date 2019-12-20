<template>
  <div class="collections">
    <div class="charging" v-if="loading">
      <random-spinner />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div v-for="(db, index) of databases" :key="db" class="database">
            <span @click="selectDb(index)" :class="{ selected: (db === currentDbName) }">{{db}}</span>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="collection of currentCollections" :key="collection" class="collection">
            <input
              v-show="false"
              type="checkbox"
              :id="collection"
              :checked="toExport[currentDbName].indexOf(collection) !== -1"
              @change="setCollection(collection)"
            />
            <label
              :for="collection"
              :class="{ selected: (toExport[currentDbName].indexOf(collection) !== -1) }"
            >{{collection}}</label>
          </div>
        </div>
        <div class="col-sm">
          <div v-for="db of selectedDatabases" :key="db" class="repilogue">
            <h4 class="selected">{{db}}</h4>
            <div v-for="(collection, index) of toExport[db]" :key="collection">
              <span class="collection-repilogue" @click="remove(db, index)">{{ collection }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container button-container">
      <button @click="downloadJson()" class="btn btn-outline-primary">JSON</button>
      <button @click="downloadCsv()" class="btn btn-outline-primary">CSV</button>
    </div>
  </div>
</template>

<script>
import * as api from "../collectionService";
import RandomSpinner from "./RandomSpinner";

export default {
  name: "collections",
  data() {
    return {
      collections: {},
      currentDb: 0,
      loading: false,
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
  components: {
    RandomSpinner
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
    remove(db, index) {
      this.toExport[db].splice(index, 1);
    },
    async downloadJson() {
      this.loading = true;
      const data = await api.exportCollectionsJSON(this.toExport);
      this.downloadFile(data);
      this.loading = false;
    },
    async downloadCsv() {
      this.loading = true;
      const data = await api.exportCollectionsCSV(this.toExport);
      this.downloadFile(data);
      this.loading = false;
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
.btn-outline-primary {
  border-color: #ffec00 !important;
  color: #ffec00 !important;
}

.btn-outline-primary:hover {
  background-color: #ffec00 !important;
  color: black !important;
}

.collections {
  margin: 40px;
}

.database span {
  font-size: 24px;
  cursor: pointer;
  color: #757575;
}

.collection label {
  font-size: 18px;
  cursor: pointer;
  color: #bcbcbc;
}

.repilogue {
  margin: 5px;
}

.collection-repilogue {
  color: #bcbcbc;
  cursor: pointer;
}

.selected {
  color: #ffec00 !important;
}

.button-container {
  margin: 40px 0;
}

.button-container button {
  margin: 8px;
}

.charging {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
