<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="conceptwrweight" autoresize/>
  </div>
  
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { HeatmapChart, SunburstChart, ScatterChart, LineChart, } from 'echarts/charts'
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
      const res2 = await http.get('https://stock.anno189.com/h5/data/conceptwrweight.json', params)
      this.conceptwrweight = res2.data

    }
  },

  setup () {
    const conceptwrweight = ref({});
    
    return { conceptwrweight };
  }
});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>