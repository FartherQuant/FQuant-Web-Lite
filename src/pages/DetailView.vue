<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketamountpercentOption" autoresize ref="marketamountpercentChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketamountpercentbmsOption" autoresize ref="marketamountpercentbmsChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="martetlinestatusOption" autoresize ref="martetlinestatusChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketstrcountOption" autoresize ref="marketstrcountChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketrzrq00Option" autoresize ref="marketrzrqChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketrzrq01Option" autoresize ref="marketrzrqChart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="markettonOption" autoresize ref="markettonChart"/>
  </div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
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
      const res1 = await http.get('https://stock.anno189.com/h5/data/market_amount_percent.json', params)
      this.marketamountpercentOption = res1.data

      const res8 = await http.get('https://stock.anno189.com/h5/data/market_amount_percent_bms.json', params)
      this.marketamountpercentbmsOption = res8.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/market_line_status.json', params)
      this.martetlinestatusOption = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/market_str_count.json', params)
      this.marketstrcountOption = res3.data

      const res4 = await http.get('https://stock.anno189.com/h5/data/market_rzrq_00.json', params)
      this.marketrzrq00Option = res4.data

      const res6 = await http.get('https://stock.anno189.com/h5/data/market_rzrq_01.json', params)
      this.marketrzrq01Option = res6.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/market_ton.json', params)
      this.markettonOption = res5.data


    }
  },

  setup () {
    const marketamountpercentOption = ref({});
    const marketamountpercentbmsOption = ref({});
    const martetlinestatusOption = ref({});
    const marketstrcountOption = ref({});
    const marketrzrq00Option = ref({});
    const marketrzrq01Option = ref({});
    const markettonOption = ref({});
    
    return { marketamountpercentOption, marketamountpercentbmsOption, martetlinestatusOption, marketstrcountOption, marketrzrq00Option, marketrzrq01Option, markettonOption};

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>