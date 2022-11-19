<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="cntyatyOption" autoresize ref="cntyatyChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="rmbusOption" autoresize ref="rmbusChart"/>
  </div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  MarkAreaComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  LineChart,
  MarkAreaComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])

export default defineComponent({
  name: 'ChartsOuterView',
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
      const res1 = await http.get('https://stock.anno189.com/h5/data/cnty-aty-300.json', params)
      //console.log(res.data)
      this.cntyatyOption = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/rmbus.json', params)
      this.rmbusOption = res2.data

    
    }
  },

  setup () {
    const cntyatyOption = ref({});
    const rmbusOption = ref({});
    
    return { cntyatyOption, rmbusOption };

  }
});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>