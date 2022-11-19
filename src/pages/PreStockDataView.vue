<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
      <div class="row" v-if="rowsPreData">

        <div class="col-12 col-md">
          <!-- <div class="text-h6 q-pa-sm">竞价概况</div> -->
          <div class="text-body2 q-pa-sm">
            <b>隔夜一字：</b><br />
            - 撮合：{{ones.amount}}亿<br />
            - 封单：{{ones.fd}}亿<br />
            - TOP10：{{ones.lists}}<br />
            
            <q-separator  spaced/>

            <b>竞价结束：</b><br />
            - 撮合成交：{{twos.allamount}}亿<br />
            
            <q-separator spaced/>

            <b>竞价一字：</b><br />
            - 一字撮合：{{twos.amount}}亿<br />
            - 一字封单：{{twos.fd}}亿<br />
            - TOP10：{{twos.lists}}<br />
          </div>
        </div>


        <!-- 市场资金 -->
        <div class="col-12 col-md">
            <v-chart class="chart" :option="lPreStockDataOption" autoresize/>
        </div>
        
      </div>
    </q-tab-panel>

    <q-tab-panel name="stocks">
      <div class="col-12" v-if="rowsPreData">
        <!-- <div class="text-h6 q-pa-sm">竞价个股</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsPreData"
            :columns="columnsPreData"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0)?'bg-red-1':(props.row.rate < 0)?'bg-green-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel name="top10">
      <div class="col-12" v-if="rowsPreData">
        <!-- <div class="text-h6 q-pa-sm">竞价封单</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsTopData"
            :columns="columnsTopData"
            :rows-per-page-options="[10000]"
            row-key="name"
          />
        </div>
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
          <q-tab name="detail" label="竞价概况" />
          <q-tab name="stocks" label="热门个股" />
          <q-tab name="top10" label="涨停封单" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>

  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
} from 'echarts/components'
import VChart from 'vue-echarts'


use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
])


export default({
  name: 'PreStockDataView',
  components: { VChart },

  mounted: function () {
    this.getServerMarketData()
  },

  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const response = await http.get('https://stock.anno189.com//h5/data/predatastock.json', params)
      
      this.rowsPreData = response.data.data.series
      this.rowsTopData = response.data.data.top

      this.lPreStockDataOption.series[0].data = response.data.data.limit.amount
      this.lPreStockDataOption.series[1].data = response.data.data.limit.fd
      this.lPreStockDataOption.series[2].data = response.data.data.amount
      this.lPreStockDataOption.series[3].data = response.data.data.mean

      this.ones = response.data.data.one
      this.twos = response.data.data.two
      
    }
  },

  setup () {
    const rowsPreData = ref(null);
    const rowsTopData = ref(null);
    const ones = ref(null);
    const twos = ref(null);
    
    const lPreStockDataOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['涨停撮合','涨停封单', '撮合成交', '平均涨幅'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
            axisLine:{onZero:false},
            boundaryGap:false,
          },
          yAxis: [{
              type: 'value',
            },
            {
              type: 'value',
              show: false,
            },
            {
              type: 'value',
              show: false,
            },
          ],
          series: [
            {
              name:'涨停撮合',
              type:'line',
              symbol:'none',
              data:[],
              yAxisIndex: 2,
            },
            {
              name:'涨停封单',
              type:'line',
              symbol:'none',
              data:[],
            },
            {
              name:'撮合成交',
              type:'line',
              symbol:'none',
              data:[],
              yAxisIndex: 2,
            },
            {
              name:'平均涨幅',
              type:'line',
              symbol:'none',
              data:[],
              
              yAxisIndex: 1,

            }
          ]
    });

    const columnsPreData = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'rate', sortable: true},
      { name: '总额', align: 'right', label: '总额', field: 'amount', sortable: true },
      { name: '量比', align: 'right', label: '量比', field: 'volratio', sortable: true },
      { name: '15M价', align: 'right', label: '15M价', field: 'M15close', sortable: true },
      { name: '15M量', align: 'right', label: '15M量', field: 'M15vol', sortable: true },
      { name: '20M价', align: 'right', label: '20M价', field: 'M20close', sortable: true },
      { name: '20M量', align: 'right', label: '20M量', field: 'M20vol', sortable: true },
      { name: '25M价', align: 'right', label: '25M价', field: 'M25close', sortable: true },
      { name: '25M量', align: 'right', label: '25M量', field: 'M25vol', sortable: true },
      { name: '今日', align: 'center', label: '今日', field: 'memos1', sortable: true },
      { name: '昨日', align: 'center', label: '昨日', field: 'blockname', sortable: true }
    ]);

    const columnsTopData = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: 'M15', align: 'right', label: 'M15', field: 'M15', sortable: true },
      { name: 'M16', align: 'right', label: 'M16', field: 'M16', sortable: true },
      { name: 'M17', align: 'right', label: 'M17', field: 'M17', sortable: true },
      { name: 'M18', align: 'right', label: 'M18', field: 'M18', sortable: true },
      { name: 'M19', align: 'right', label: 'M19', field: 'M19', sortable: true },
      { name: 'M20', align: 'right', label: 'M20', field: 'M20', sortable: true },
      { name: 'M21', align: 'right', label: 'M21', field: 'M21', sortable: true },
      { name: 'M22', align: 'right', label: 'M22', field: 'M22', sortable: true },
      { name: 'M23', align: 'right', label: 'M23', field: 'M23', sortable: true },
      { name: 'M24', align: 'right', label: 'M24', field: 'M24', sortable: true },
      { name: 'M25', align: 'right', label: 'M25', field: 'M25', sortable: true },
    ]);
    
    return { lPreStockDataOption, rowsPreData, columnsPreData, rowsTopData, columnsTopData, ones, twos, tab: ref('detail') };
      
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
  height: 280px

</style>




