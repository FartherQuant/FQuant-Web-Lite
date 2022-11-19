<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketrzrqOption" autoresize ref="marketrzrqChart"/>
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

      const res4 = await http.get('https://stock.anno189.com/h5/data/market_rzrq.json', params)
      this.marketrzrqOption = res4.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/market_ton.json', params)
      this.markettonOption = res5.data

    }
  },

  setup () {
    const marketrzrqOption = ref({});
    const markettonOption = ref({});
    
    return { marketrzrqOption, markettonOption,  };

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>