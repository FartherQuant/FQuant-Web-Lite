<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
      <div class="q-pa-sm" v-if="rowscon3updata">
        <!-- <div class="text-h6 q-pa-sm">概念多空</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowscon3updata"
            :columns="columnscon3updata"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.Today == '看多')?'bg-red-3':(props.row.Today == '高位整理')?'bg-red-1':(props.row.Today == '震荡上行')?'bg-red-2':(props.row.Today == '看空')?'bg-green-3':(props.row.Today == '震荡下行')?'bg-green-2':(props.row.Today == '低位整理')?'bg-green-1':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel name="charts">

      <div class="q-pa-sm">
        <v-chart class="chart" :option="conceptspcorrweight" autoresize/>  
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="conceptwrweight" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="conceptcorrweight" autoresize/>
      </div>
  </q-tab-panel>
  </q-tab-panels>
  
  <q-page-sticky expand position="top" class="top-title">
    <q-toolbar class="bg-red-3 text-white ">
      <q-tabs
          v-model="tab"
          dense
          class="text-white"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="detail" label="概念概况" />
          <q-tab name="charts" label="热门图表" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>

  <q-separator />

</q-page> 
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { HeatmapChart, SunburstChart, ScatterChart, LineChart, } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])

export default defineComponent({
  name: 'ChartsConceptView',
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
      const res14 = await http.get('https://stock.anno189.com/h5/data/con3updata.json', params)
      this.rowscon3updata = res14.data.data.con3

      const res1 = await http.get('https://stock.anno189.com/h5/data/conceptspcorrweight.json', params)
      this.conceptspcorrweight = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/conceptwrweight.json', params)
      this.conceptwrweight = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/conceptcorrweight.json', params)
      this.conceptcorrweight = res3.data
    }
  },

  setup () {
    const conceptspcorrweight = ref({});
    const conceptwrweight = ref({});
    const conceptcorrweight = ref({});

    const rowscon3updata = ref(null);

    const columnscon3updata = ref([
      { name: '行业', align: 'left', label: '行业', field: 'name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '数量', align: 'right', label: '数量', field: 'count', sortable: true },
      { name: '多空', align: 'left', label: '多空', field: 'U', sortable: true },
      { name: 'D-4', align: 'left', label: 'D-4', field: 'D-4', sortable: true },
      { name: 'D-3', align: 'left', label: 'D-3', field: 'D-3', sortable: true },
      { name: 'D-2', align: 'left', label: 'D-2', field: 'D-2', sortable: true },
      { name: 'D-1', align: 'left', label: 'D-1', field: 'D-1', sortable: true },
      { name: '今天', align: 'left', label: '今天', field: 'Today', sortable: true },
      { name: '方向', align: 'left', label: '方向', field: 'direction', sortable: true },
      { name: '年线', align: 'left', label: '年线', field: 'MA250', sortable: true },
      { name: '趋势', align: 'right', label: '趋势', field: 'BMOUNT20', sortable: true },
      { name: '量', align: 'right', label: '量', field: 'AMOUNT20', sortable: true },
      { name: 'J', align: 'right', label: 'J', field: 'J1', sortable: true },
      { name: 'RPS10', align: 'right', label: 'RPS10', field: 'RPS10', sortable: true },
      { name: 'RPS20', align: 'right', label: 'RPS20', field: 'RPS20', sortable: true },
      { name: 'RPS60', align: 'right', label: 'RPS60', field: 'RPS60', sortable: true },
      { name: 'RPS120', align: 'right', label: 'RPS120', field: 'RPS120', sortable: true },
      { name: 'RPS250', align: 'right', label: 'RPS250', field: 'RPS250', sortable: true },
      { name: '多头', align: 'right', label: '多头', field: 'mac2060', sortable: true },
      { name: '空头', align: 'right', label: '空头', field: 'ma6020c', sortable: true },
      { name: '换手', align: 'right', label: '换手', field: 'Vol100', sortable: true },
      { name: '新高', align: 'right', label: '新高', field: 'h250', sortable: true },
      { name: '新高率', align: 'right', label: '新高率', field: 'h250rate', sortable: true },
      { name: '新低', align: 'right', label: '新低', field: 'l250', sortable: true },
      { name: '新低率', align: 'right', label: '新低率', field: 'l250rate', sortable: true },
    ]);
    
    return { conceptspcorrweight, conceptwrweight, conceptcorrweight, rowscon3updata, columnscon3updata, tab: ref('detail')  };
  }
});

</script>

<style lang="sass">
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

.chart 
  height: 520px

</style>
