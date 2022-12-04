<template>
    

    <div class="bg-grey-1" v-if="StockOption.str60_base">
      <div class="row">
        <div class="text-h6 q-pa-sm">策略组合</div>
      </div>
      <div class="row">
          <v-chart class="chart" :option="v1lineOption" autoresize/>
      </div>
      <q-separator inset spaced />

      <div class="row">
        <div class="text-h6 q-pa-sm">策略 I</div>
      </div>
      <div class="row">
        <div class="q-pa-sm">{{StockOption.strong.plist}}</div>
      </div>
      
      <q-separator inset spaced />

      <div class="row">
        <div class="text-h6 q-pa-sm">策略 II</div>
      </div>
      <div class="row">
        <div class="q-pa-sm">{{StockOption.breakthrough.plist}}</div>
      </div>

      <q-separator inset spaced />

      <div class="row">
        <div class="text-h6 q-pa-sm">策略 III</div>
      </div>
      <div class="row">
        <div class="q-pa-sm">{{StockOption.strdays_all_1.plist}}</div>
      </div>

      <q-separator inset spaced />
      
    </div>
  
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, SunburstChart, } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  MarkAreaComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  SunburstChart,
  LineChart,
  GridComponent,
  MarkAreaComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])

export default defineComponent({
  name: 'StockView',
  components: { VChart },

  
  mounted: function () {
    this.getServerMarketData()
  },
  

  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const res1 = await http.get('https://stock.anno189.com/h5/data/showpools.json', params)
      this.StockOption = res1.data
      console.log(res1.data)
      

      const res2 = await http.get('https://stock.anno189.com/h5/data/fundowner_show.json', params)
      this.v1lineOption = res2.data

    }
  },


  setup () {
    const StockOption = ref({});
    const v1lineOption = ref({});
    
    return { StockOption, v1lineOption};

  },
  

});

</script>

<style lang="sass">
.chart 
  height: 300px
</style>
