<template>
  <q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
      <div class="q-pa-sm" v-if="rowsindex3updata">
        <!-- <div class="text-h6 q-pa-sm">指数多空</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsindex3updata"
            :columns="columnsindex3updata"
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
        <v-chart class="chart" :option="indexweight_wr" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexweight_month" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexweight_spcorr" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexweight_corr" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexcorr015" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexcorr0111" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="indexcorr0121" autoresize/>
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
          <q-tab name="detail" label="宽指概况" />
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
import {
  HeatmapChart,
  SunburstChart,
  ScatterChart,
  LineChart,
  } from 'echarts/charts'
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
  name: 'ChartsWidthindexView',
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
      const res14 = await http.get('https://stock.anno189.com/h5/data/index3updata.json', params)
      this.rowsindex3updata = res14.data.data.index3

      const res1 = await http.get('https://stock.anno189.com/h5/data/indexweight_wr.json', params)
      this.indexweight_wr = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/indexweight_month.json', params)
      this.indexweight_month = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/indexweight_spcorr.json', params)
      this.indexweight_spcorr = res3.data

      const res4 = await http.get('https://stock.anno189.com/h5/data/indexweight_corr.json', params)
      this.indexweight_corr = res4.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/indexcorr015.json', params)
      this.indexcorr015 = res5.data
      this.indexcorr015.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};

      const res6 = await http.get('https://stock.anno189.com/h5/data/indexcorr0121.json', params)
      this.indexcorr0121 = res6.data
      this.indexcorr0121.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};


      const res7 = await http.get('https://stock.anno189.com/h5/data/indexcorr0111.json', params)
      this.indexcorr0111 = res7.data
      this.indexcorr0111.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};

    }
  },

  setup () {
    const indexweight_wr = ref({});
    const indexweight_month = ref({});
    const indexweight_spcorr = ref({});
    const indexweight_corr = ref({});
    const indexcorr015 = ref({});
    const indexcorr0111 = ref({});
    const indexcorr0121 = ref({});

    const rowsindex3updata = ref(null);

    const columnsindex3updata = ref([
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
    ]);
      
    return { indexweight_wr, indexweight_month, indexweight_spcorr, indexweight_corr, indexcorr015, indexcorr0111, indexcorr0121, rowsindex3updata, columnsindex3updata, tab: ref('detail') };

  }
  

});

</script>

<style scoped>
.chart {
  height: 520px;
}
</style>