<template>
  <v-container fluid>
      <v-layout row>
        <v-slide-y-transition mode="out-in">

        <v-flex xs6 v-if="results"column>
        Product Detail <li v-for="(item, key, index) in results">{{ index }} - {{ item }} - {{ key }}</li>

        <br>
        VALUE:
        <li v-for="(item, key, index) in values">{{ index }} - {{ item }} - {{ key }}</li>
        </v-flex>
        </v-slide-y-transition>

      </v-layout>
      <v-layout row>
      <v-flex xs6 v-show="values">



      </v-flex>
        </v-layout>
  </v-container>
</template>
<script>
  import propertyApi from '@/api/propertyApi'

  export default {
    components: {},
    name: 'Property',
    data () {
      return {
        results: null,
        values: null
      }
    },
    mounted () {
      this.getValue('property/value')
      this.getDetails('property/details')
    },
    methods: {
      getDetails (section) {
        console.log('I am here')
        propertyApi.get(section).then((response) => {
          this.results = response.data[0]['property/details'].result.property
        }).catch((error) => { console.log(error) })
      },
      getValue (section) {
        propertyApi.get(section).then((response) => {
          this.values = response.data[0]['property/value'].result.value
        }).catch((error) => { console.log(error) })
      }
    }
  }
</script>
<!--YHT9D6X11A8W4ZB2PV02-->
<!--b9eoStk09PVDCwgs3ZueqLkGhEv4YJsH-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
