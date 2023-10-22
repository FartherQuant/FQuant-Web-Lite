<template>
  <div class="bg-grey-1" v-if="StockOption.str60_base">
    
    <div class="row">
      <div class="text-h6 q-pa-sm">均线突破({{StockOption.strdays_all.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.strdays_all.plist}}</div>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">日线反包({{StockOption.pinbar_base.pcount}})</div>
    </div>
    <div class="row">
      <div class="q-pa-sm">{{StockOption.pinbar_base.plist}}</div>
    </div>
    
    
  </div>
  
</template>

<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'StockView',
  
  mounted: function () {
    this.getServerMarketData()
  },
  

  methods: {
    getServerMarketData: async function () {
      const res = await http.get('https://stock.anno189.com/h5/data/pools.json', {})
      this.StockOption = res.data
      console.log(res.data)

    }
  },


  setup () {
    const StockOption = ref({});
    
    return { StockOption,};

  },
  

});

</script>
