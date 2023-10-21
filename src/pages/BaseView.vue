<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketIndustry2CountOption" autoresize ref="marketIndustry2CountChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketIndustry3CountOption" autoresize ref="marketIndustry3CountChart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketIndustry1Amount" autoresize ref="marketIndustry1AmountChart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketIndustry2Amount" autoresize ref="marketIndustry2AmountChart"/>
  </div>
  
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketAmountCount" autoresize ref="marketAmountCountChart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketInsOneCount" autoresize ref="marketInsOneCountChart"/>
  </div>
  
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  BarChart,
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
  LineChart,
  BarChart,
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

      const res1 = await http.get('https://stock.anno189.com/h5/data/marketIndustry2Count.json', params)
      //console.log(res.data)
      this.marketIndustry2CountOption = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/marketIndustry3Count.json', params)
      this.marketIndustry3CountOption = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/industry_amount_industry1.json', params)
      this.marketIndustry1Amount = res3.data

      const res4 = await http.get('https://stock.anno189.com/h5/data/industry_amount_industry2.json', params)
      this.marketIndustry2Amount = res4.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/marketAmountCount.json', params)
      this.marketAmountCount = res5.data

      const res6 = await http.get('https://stock.anno189.com/h5/data/marketInsOneCount.json', params)
      this.marketInsOneCount = res6.data

    }
  },

  setup () {
    const marketIndustry2CountOption = ref({});
    const marketIndustry3CountOption = ref({});
    const marketIndustry1Amount = ref({});
    const marketIndustry2Amount = ref({});
    const marketAmountCount = ref({});
    const marketInsOneCount = ref({});
    
    return { marketIndustry2CountOption, marketIndustry3CountOption, marketIndustry1Amount, marketIndustry2Amount, marketAmountCount, marketInsOneCount };

  }
});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>