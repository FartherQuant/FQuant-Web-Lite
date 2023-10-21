<template>
  <div class="bg-grey-1" v-if="loading">
    <div class="row">
      <div class="text-h6 q-pa-sm">多仓位观察</div>
    </div>
    <div class="row">
        <v-chart class="chart_big" :option="foallOption" autoresize/>
    </div>
    <q-separator inset spaced />

    <div class="row">
      <div class="text-h6 q-pa-sm">长周期观察</div>
    </div>
    <div class="row">
        <v-chart class="chart_big" :option="falongOption" autoresize/>
    </div>
  </div>

</template>


<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, } from 'echarts/charts'
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
  name: 'ChartsFund01View',
  components: { VChart },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {}
      const res1 = await http.get('https://stock.anno189.com/h5/data/fundowner_show.json', params)
      this.foallOption=res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/fundowner_show_10years.json', params)
      this.falongOption=res2.data
      
      this.loading = true
    }
  },
  
  setup () {
    const foallOption = ref({});
    const falongOption = ref({});
    

    return { loading:ref(), foallOption, falongOption };

  },
});

</script>


<style lang="sass">
.chart 
  height: 300px

.chart_big
  height: 480px

.container h1
  size: 30px

.container h4
  size: 20px

.right h3
  size: 20px

.my-sticky-column-table
  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #f5f5dc

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1

.top-title
  z-index: 100
</style>


