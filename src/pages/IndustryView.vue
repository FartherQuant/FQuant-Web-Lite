<template>
  <q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
    <div class="q-pa-sm" v-if="rowsins3updata">
      <!-- <div class="text-h6 q-pa-sm">行业多空</div> -->
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsins3updata"
          :columns="columnsins3updata"
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
        <v-chart class="chart" :option="industryweight_wr" autoresize/> 
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industryweight_month" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industryweight_spcorr" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industryweight_corr" autoresize/>
      </div>
      
    </q-tab-panel>

    <q-tab-panel name="corr">
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industrycorr015" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industrycorr0111" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="industrycorr0121" autoresize/>
      </div>
      
    </q-tab-panel>

    <q-tab-panel name="percent">
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins60daylevel2" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins2060daylevel2" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins60daylevel3" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins2060daylevel3" autoresize/>
      </div>
      
    </q-tab-panel>

    <q-tab-panel name="mins">
      
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins15minlevel2" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins30minlevel2" autoresize/>
      </div>
      <q-separator inset spaced />
      <div class="q-pa-sm">
        <v-chart class="chart" :option="ins60minlevel2" autoresize/>
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
          <q-tab name="detail" label="行业概况" />
          <q-tab name="charts" label="热门图表" />
          <q-tab name="mins" label="分时趋势" />
          <q-tab name="percent" label="百分位" />
          <q-tab name="corr" label="趋势相关性" />
          
          
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
  HeatmapChart,
  SunburstChart,
  ScatterChart,
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
  name: 'ChartsIndustryView',
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

      const res14 = await http.get('https://stock.anno189.com/h5/data/ind3updata.json', params)
      this.rowsins3updata = res14.data.data.ind3


      const res1 = await http.get('https://stock.anno189.com/h5/data/industryweight_wr.json', params)
      this.industryweight_wr = res1.data

      const res2 = await http.get('https://stock.anno189.com/h5/data/industryweight_month.json', params)
      this.industryweight_month = res2.data

      const res3 = await http.get('https://stock.anno189.com/h5/data/industryweight_spcorr.json', params)
      this.industryweight_spcorr = res3.data

      const res4 = await http.get('https://stock.anno189.com/h5/data/industryweight_corr.json', params)
      this.industryweight_corr = res4.data

      const res5 = await http.get('https://stock.anno189.com/h5/data/industrycorr015.json', params)
      this.industrycorr015 = res5.data
      this.industrycorr015.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};

      const res15 = await http.get('https://stock.anno189.com/h5/data/industrycorr0111.json', params)
      this.industrycorr0111 = res15.data
      this.industrycorr0111.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};


      const res6 = await http.get('https://stock.anno189.com/h5/data/industrycorr0121.json', params)
      this.industrycorr0121 = res6.data
      this.industrycorr0121.tooltip.formatter = function (params) {return params.value[3] + '(' + params.value[2] + ')';};

      const res7 = await http.get('https://stock.anno189.com/h5/data/ins60daylevel2.json', params)
      this.ins60daylevel2 = res7.data
      const res8 = await http.get('https://stock.anno189.com/h5/data/ins2060daylevel2.json', params)
      this.ins2060daylevel2 = res8.data
      const res9 = await http.get('https://stock.anno189.com/h5/data/ins60daylevel3.json', params)
      this.ins60daylevel3 = res9.data
      const res10 = await http.get('https://stock.anno189.com/h5/data/ins2060daylevel3.json', params)
      this.ins2060daylevel3 = res10.data
      const res11 = await http.get('https://stock.anno189.com/h5/data/ins15minlevel2.json', params)
      this.ins15minlevel2 = res11.data
      const res12 = await http.get('https://stock.anno189.com/h5/data/ins30minlevel2.json', params)
      this.ins30minlevel2 = res12.data
      const res13 = await http.get('https://stock.anno189.com/h5/data/ins60minlevel2.json', params)
      this.ins60minlevel2 = res13.data


    }
  },

  setup () {
    const industryweight_wr = ref({});
    const industryweight_month = ref({});
    const industryweight_spcorr = ref({});
    const industryweight_corr = ref({});
    const industrycorr015 = ref({});
    const industrycorr0111 = ref({});
    const industrycorr0121 = ref({});

    const ins60daylevel2 = ref({});
    const ins2060daylevel2 = ref({});
    const ins60daylevel3 = ref({});
    const ins2060daylevel3 = ref({});
    const ins15minlevel2 = ref({});
    const ins30minlevel2 = ref({});
    const ins60minlevel2 = ref({});

    const rowsins3updata = ref(null);

    const columnsins3updata = ref([
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
    
    return { industryweight_wr, industryweight_month, industryweight_spcorr, industryweight_corr, industrycorr015, industrycorr0111, industrycorr0121, ins60daylevel2, ins2060daylevel2, ins60daylevel3, ins2060daylevel3, ins15minlevel2, ins30minlevel2, ins60minlevel2, rowsins3updata, columnsins3updata, tab: ref('detail')};

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
