<template>
  <div class="q-pa-sm">
    <v-chart class="chart" :option="moneryfocus1Option" autoresize ref="moneryfocus1Chart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="moneryfocus2Option" autoresize ref="moneryfocus2Chart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="moneryfocus3Option" autoresize ref="moneryfocus3Chart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="moneryfocus4Option" autoresize ref="moneryfocus4Chart"/>
  </div>
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="moneryfocus5Option" autoresize ref="moneryfocus5Chart"/>
  </div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  ScatterChart,
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
  ScatterChart,
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
      const res1 = await http.get('https://stock.anno189.com/h5/data/moneryfocus.json', params)
      this.moneryfocus1Option = res1.data
      this.moneryfocus1Option.tooltip.formatter = function (params) {return params.value[2] + ':' + params.value[3] + '亿';};


      const res2 = await http.get('https://stock.anno189.com/h5/data/moneryfocus2.json', params)
      this.moneryfocus2Option = res2.data
      this.moneryfocus2Option.tooltip.formatter = function (params) {return params.value[2] + ':' + params.value[3] + '亿';};

      const res3 = await http.get('https://stock.anno189.com/h5/data/moneryfocus3.json', params)
      this.moneryfocus3Option = res3.data
      this.moneryfocus3Option.tooltip.formatter = function (params) {return params.value[2] + ':' + params.value[3] + '亿';};

      const res4 = await http.get('https://stock.anno189.com/h5/data/moneryfocus4.json', params)
      this.moneryfocus4Option = res4.data
      this.moneryfocus4Option.tooltip.formatter = function (params) {return params.value[2] + ':' + params.value[3] + '亿';};

      const res5 = await http.get('https://stock.anno189.com/h5/data/moneryfocus5.json', params)
      this.moneryfocus5Option = res5.data
      this.moneryfocus5Option.tooltip.formatter = function (params) {return params.value[2] + ':' + params.value[3] + '亿';};
    }
  },

  setup () {
    const moneryfocus1Option = ref({});
    const moneryfocus2Option = ref({});
    const moneryfocus3Option = ref({});
    const moneryfocus4Option = ref({});
    const moneryfocus5Option = ref({});
    
    return { moneryfocus1Option, moneryfocus2Option, moneryfocus3Option, moneryfocus4Option, moneryfocus5Option };

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>