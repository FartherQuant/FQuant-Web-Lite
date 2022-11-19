<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="industryweight_spcorr" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="industryweight_month" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="industrycorr015" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="ins60daylevel2" autoresize/>
  </div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  LineChart,
  BarChart,
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent
])

export default defineComponent({
  name: 'ChartsWidthindexView',
  components: {
    VChart
  },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      
      const res2 = await http.get('https://stock.anno189.com/h5/data/industryweight_month.json', params)
      this.industryweight_month = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/industryweight_spcorr.json', params)
      this.industryweight_spcorr = res3.data

      
      const res5 = await http.get('https://stock.anno189.com/h5/data/industrycorr015.json', params)
      this.industrycorr015 = res5.data
      this.industrycorr015.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};


      const res7 = await http.get('https://stock.anno189.com/h5/data/ins60daylevel2.json', params)
      this.ins60daylevel2 = res7.data
     
      
    }
  },

  setup () {
    const industryweight_month = ref({});
    const industryweight_spcorr = ref({});
    const industrycorr015 = ref({});
    
    const ins60daylevel2 = ref({});
    
    return { industryweight_month, industryweight_spcorr, industrycorr015, ins60daylevel2};

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>