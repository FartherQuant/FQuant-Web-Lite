<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="indexweight_spcorr" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="indexweight_month" autoresize/>
  </div>
  <q-separator inset spaced />
  
  <div class="q-pa-sm">
    <v-chart class="chart" :option="indexcorr015" autoresize/>
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
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
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
      
      const res2 = await http.get('https://stock.anno189.com/h5/data/indexweight_month.json', params)
      this.indexweight_month = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/indexweight_spcorr.json', params)
      this.indexweight_spcorr = res3.data

      
      const res5 = await http.get('https://stock.anno189.com/h5/data/indexcorr015.json', params)
      this.indexcorr015 = res5.data
      this.indexcorr015.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};

    }
  },

  setup () {
    const indexweight_month = ref({});
    const indexweight_spcorr = ref({});
    const indexcorr015 = ref({});
      
    return {  indexweight_month, indexweight_spcorr, indexcorr015 };

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>