<template>
  <div class="bg-grey-1">
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合</div>
  </div>
  <div class="row">
      <v-chart class="chart_big" :option="vlineOption" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="flex-break"></div>
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合（对照组）</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v1lineOption" autoresize/>
    </div>
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v1pieOption" autoresize/>
    </div>
  </div>
  <q-separator inset spaced />
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合（增强组）</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v2lineOption" autoresize/>
    </div>
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v2pieOption" autoresize/>
    </div>
  </div>
  <q-separator inset spaced />
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合（超级组）</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v3lineOption" autoresize/>
    </div>
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v3pieOption" autoresize/>
    </div>
  </div>
  <q-separator inset spaced />
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合（应用组）</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v4lineOption" autoresize/>
    </div>
    <div class="col-12 col-md">
      <v-chart class="chart" :option="v4pieOption" autoresize/>
    </div>
  </div>
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
  name: 'ChartsFundViewView',
  components: { VChart },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {}
      const res1 = await http.get('https://stock.anno189.com/h5/data/str60p20_echarts_lines.json', params)
      this.v1lineOption=res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/str60p20_echarts_pie.json', params)
      this.v1pieOption=res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/str60p20_empty_echarts_lines.json', params)
      this.v2lineOption=res3.data

      const res4 = await http.get('https://stock.anno189.com/h5/data/str60p20_empty_echarts_pie.json', params)
      this.v2pieOption=res4.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_echarts_lines.json', params)
      this.v3lineOption=res5.data

      const res6 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_echarts_pie.json', params)
      this.v3pieOption=res6.data

      const res7 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_amount_echarts_lines.json', params)
      this.v4lineOption=res7.data

      const res8 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_amount_echarts_pie.json', params)
      this.v4pieOption=res8.data

      const res9 = await http.get('https://stock.anno189.com/h5/data/fundowner.json', params)
      this.vlineOption=res9.data
    }
  },
  
  setup () {
    const v1lineOption = ref({});
    const v1pieOption = ref({});
    const v2lineOption = ref({});
    const v2pieOption = ref({});
    const v3lineOption = ref({});
    const v3pieOption = ref({});
    const v4lineOption = ref({});
    const v4pieOption = ref({});
    const vlineOption = ref({});
    
    return { v1lineOption, v1pieOption, v2lineOption, v2pieOption, v3lineOption, v3pieOption, v4lineOption, v4pieOption, vlineOption };

  },

});

</script>


<style scoped>
.chart {
  height: 300px;
}
.chart_big {
  height: 480px;
}
</style>




