<template>
  <div class="bg-grey-1" v-if="loading">
  <div class="row">
    <div class="text-h6 q-pa-sm">菜篮子组合</div>
  </div>
  <div class="row">
      <v-chart class="chart_big" :option="v1lineOption" autoresize/>
  </div>
  <q-separator inset spaced />
  <div class="flex-break"></div>

  <q-card class="bg-grey-1">
  
    <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="left"
        narrow-indicator
      >
      <q-tab name="detail" label="持仓情况" />
      <q-tab name="stocks" label="交易记录" />
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="detail" class="bg-grey-1">
        <div class="row">
          <div class="text-h6 q-pa-sm">菜篮子组合（对照组）</div>
        </div>
        <div class="row">
          <div class="col-12 col-md q-pa-sm">
            <q-table
                class="my-sticky-column-table q-pr-sm"
                dense
                bordered
                :rows="rowsM"
                :columns="columnsM"
                :rows-per-page-options="[10000]"
                row-key="name"
              />
          </div>
          <div class="col-12 col-md" >
            <v-chart class="chart" :option="v1pieOption" autoresize/>
          </div>
          
        </div>
      </q-tab-panel>

      <q-tab-panel name="stocks" class="bg-grey-1">
        <div class="col-12">
          <q-table
                class="my-sticky-column-table q-pr-sm"
                dense
                bordered
                :rows="rowsN"
                :columns="columnsN"
                :rows-per-page-options="[15]"
                row-key="name"
              />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>

  <q-separator inset spaced />
  
  <div class="row">
    <div v-html="rawHtml"/>
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
  name: 'ChartsFund01View',
  components: { VChart },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {}
      const res1 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_003_echarts_lines.json', params)
      this.v1lineOption=res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_003_echarts_pie.json', params)
      this.v1pieOption=res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_003_position.json', params)
      
      this.rowsM = res3.data.data.position
      this.rowsN = res3.data.data.tradelog
      
      const res9 = await http.get('https://stock.anno189.com/h5/data/str60p20_super_003.html', params)
      this.rawHtml=res9.data

      this.loading = true
    }
  },
  
  setup () {
    const v1lineOption = ref({});
    const v1pieOption = ref({});
    
    const rawHtml = ref({});
    
    const columnsM = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: false},
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: false},
      { name: '时间', align: 'center', label: '时间', field: 'date', sortable: false },
      { name: '买入价', align: 'center', label: '买入价', field: 'values', sortable: false },
      { name: '浮盈', align: 'center', label: '浮盈', field: 'networth', sortable: false },
    ]);

    const columnsN = ref([
      { name: '近5日交易记录', align: 'left', label: '近5日交易记录', field: 'tradelog', sortable: false},
    ]);

    return { loading:ref(), v1lineOption, v1pieOption, rawHtml, columnsM, columnsN, tab: ref('detail') };

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


