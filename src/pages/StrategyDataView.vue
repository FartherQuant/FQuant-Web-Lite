<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="strategyDeploy01Option" autoresize ref="strategyDeploy01Chart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="strategyDeploy02Option" autoresize ref="strategyDeploy02Chart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="strategyDeploy03Option" autoresize ref="strategyDeploy03Chart"/>
  </div>

</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  TreemapChart
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
  TreemapChart,
  MarkAreaComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])

export default defineComponent({
  name: 'ChartsBaseView',
  components: {
    VChart
  },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {}

      const res1 = await http.get('https://stock.anno189.com/h5/data/strong_strategyDeploy.json', params)
      //console.log(res.data)
      this.strategyDeploy01Option = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/str60_base_strategyDeploy.json', params)
      this.strategyDeploy02Option = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/str20_base_strategyDeploy.json', params)
      this.strategyDeploy03Option = res3.data

    }
  },

  setup () {
    const strategyDeploy01Option = ref({});
    const strategyDeploy02Option = ref({});
    const strategyDeploy03Option = ref({});
    
    return { strategyDeploy01Option, strategyDeploy02Option, strategyDeploy03Option};

  }
});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>