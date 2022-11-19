<template>
  <a-input-search
    v-model:value="value"
    placeholder="input search text"
    text='2021-11-22'
    enter-button
    @search="onSearch"
  />

  <div class="flex flex-col w-full md:flex-row">
    <div class="flex basis-1/6 p-2">
      <div class="flex">
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          style="width: 256px"
          mode="vertical"
          @click="handleClick"
        >
          <a-menu-item key="000002">000002
          </a-menu-item>
          <a-menu-item key="000001">000001
          </a-menu-item>
        </a-menu>
      </div>
    </div>
    <div class="flex basis-5/6 p-2">
      <v-chart class="chart" :option="StockOption" autoresize ref="StockChart"/>
    </div>
  </div>

</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  BarChart,
  CandlestickChart,
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent,
  BrushComponent,
  ToolboxComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'


use([
  CanvasRenderer,
  LineChart,
  BarChart,
  CandlestickChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent,
  BrushComponent,
  ToolboxComponent
])

export default defineComponent({
  name: 'StockView',
  components: {
    VChart
  },

  mounted: function () {
    //this.getServerMarketData()
  },
  

  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const res = await http.get('http://s.anno189.com/days/000001/2021-12-31', params)
      //console.log(res.data)

      this.StockOption = res.data
    }
  },

  setup () {
    const StockOption = ref({});
    const value = ref('');

    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return { StockOption, onSearch, value, };

  },
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>