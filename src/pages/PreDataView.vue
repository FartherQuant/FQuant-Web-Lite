<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
      <div class="col-12"  v-if="this.data">
        <div class="text-h6 q-pa-sm">9:25 成交金额</div>
        <div class="text-body2 q-pa-sm">
          - TOP50：{{this.data.T925.amount50}}亿 / 总金额：{{this.data.T925.amountall}}亿<br />          
        </div>
        
        <q-separator  spaced/>
        <div class="q-pa-sm">
          <v-chart class="chart" :option="predataAmountOption" autoresize ref="predataAmountChart"/>
        </div>
        <q-separator inset spaced />

        <div class="text-h6 q-pa-sm">涨幅大于7%</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsHigh"
            :columns="columnsHigh"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.amount > 0.3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>

        <q-separator  spaced/>

        <div class="text-h6 q-pa-sm">跌幅大于7%</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsLow"
            :columns="columnsLow"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.amount > 0.3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>

        <q-separator  spaced/>

        <div class="text-h6 q-pa-sm">TOP 50</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsHead"
            :columns="columnsHead"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>


      </div>
    </q-tab-panel>

    <q-tab-panel name="stocks">
      <div class="col-12" v-if="rowsIndustry">
        <div class="text-h6 q-pa-sm">行业统计</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsIndustry"
            :columns="columnsIndustry"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate50 >0 & props.row.rate50 < 5)?'bg-red-1':(props.row.rate50 >=5 & props.row.rate50 < 9)?'bg-red-2':(props.row.rate50 >=9)?'bg-red-3':(props.row.rate50 < 0 & props.row.rate50 > -7 )?'bg-green-1':(props.row.rate50 <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>
        <div class="text-body2 q-pa-sm">以前50涨幅标识颜色</div>
        
        <q-separator  spaced/>

        <div class="text-h6 q-pa-sm">指数统计</div>

        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsIndex"
            :columns="columnsIndex"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate50 >0 & props.row.rate50 < 5)?'bg-red-1':(props.row.rate50 >=5 & props.row.rate50 < 9)?'bg-red-2':(props.row.rate50 >=9)?'bg-red-3':(props.row.rate50 < 0 & props.row.rate50 > -7 )?'bg-green-1':(props.row.rate50 <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>
        <div class="text-body2 q-pa-sm">以前50涨幅标识颜色</div>
        
        <q-separator  spaced/>

        <div class="text-h6 q-pa-sm">市场统计</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsSse"
            :columns="columnsSse"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate50 >0 & props.row.rate50 < 5)?'bg-red-1':(props.row.rate50 >=5 & props.row.rate50 < 9)?'bg-red-2':(props.row.rate50 >=9)?'bg-red-3':(props.row.rate50 < 0 & props.row.rate50 > -7 )?'bg-green-1':(props.row.rate50 <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>
        <div class="text-body2 q-pa-sm">以前50涨幅标识颜色</div>
        
        <q-separator  spaced/>

        <div class="text-h6 q-pa-sm">风格统计</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsTag"
            :columns="columnsTag"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate50 >0 & props.row.rate50 < 5)?'bg-red-1':(props.row.rate50 >=5 & props.row.rate50 < 9)?'bg-red-2':(props.row.rate50 >=9)?'bg-red-3':(props.row.rate50 < 0 & props.row.rate50 > -7 )?'bg-green-1':(props.row.rate50 <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>
        <div class="text-body2 q-pa-sm">以前50涨幅标识颜色</div>
        
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
          <q-tab name="detail" label="前50列表" />
          <q-tab name="stocks" label="前50统计" />
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
  name: 'GridPreDataView',
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
      const response = await http.get('https://stock.anno189.com/h5/data/predatatop.json', params)

      this.data = response.data.data
      
      this.rowsHigh = response.data.data.T925.higt
      this.rowsLow = response.data.data.T925.low
      this.rowsHead = response.data.data.T925.head

      this.rowsIndustry = response.data.data.T925.industry
      this.rowsTag = response.data.data.T925.tag
      this.rowsSse = response.data.data.T925.sse
      this.rowsIndex = response.data.data.T925.index_

      const res1 = await http.get('https://stock.anno189.com/h5/data/open_data_amount.json', params)
      this.predataAmountOption = res1.data
      
    }
  },

  setup () {
    const rowsHigh = ref(null);
    const rowsLow = ref(null);
    const rowsHead = ref(null);
    const rowsIndustry= ref(null);
    const rowsTag = ref(null);
    const rowsSse = ref(null);
    const rowsIndex = ref(null);
    const data = ref(null);
    const predataAmountOption = ref({});

    const columnsHigh = ref([
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'rate', sortable: true},
      { name: '金额', align: 'right', label: '金额', field: 'amount', sortable: true },
      { name: '指数', align: 'right', label: '指数', field: 'index_', sortable: true },
      { name: '风格', align: 'right', label: '风格', field: 'tag', sortable: true },
    ]);

    const columnsLow = ref([
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'rate', sortable: true},
      { name: '金额', align: 'right', label: '金额', field: 'amount', sortable: true },
      { name: '指数', align: 'right', label: '指数', field: 'index_', sortable: true },
      { name: '风格', align: 'right', label: '风格', field: 'tag', sortable: true },
    ]);

    const columnsHead = ref([
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'rate', sortable: true},
      { name: '金额', align: 'right', label: '金额', field: 'amount', sortable: true },
      { name: '指数', align: 'right', label: '指数', field: 'index_', sortable: true },
      { name: '风格', align: 'right', label: '风格', field: 'tag', sortable: true },
    ]);

    const columnsIndustry = ref([
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true},
      { name: '前10金额', align: 'right', label: '前10金额', field: 'amount10', sortable: true},
      { name: '前10涨幅', align: 'right', label: '前10涨幅', field: 'rate10', sortable: true },
      { name: '前10数量', align: 'right', label: '前10数量', field: 'count10', sortable: true },
      { name: '前20金额', align: 'right', label: '前20金额', field: 'amount20', sortable: true},
      { name: '前20涨幅', align: 'right', label: '前20涨幅', field: 'rate20', sortable: true },
      { name: '前20数量', align: 'right', label: '前20数量', field: 'count20', sortable: true },
      { name: '前50金额', align: 'right', label: '前50金额', field: 'amount50', sortable: true},
      { name: '前50涨幅', align: 'right', label: '前50涨幅', field: 'rate50', sortable: true },
      { name: '前50数量', align: 'right', label: '前50数量', field: 'count50', sortable: true },
      { name: '总金额', align: 'right', label: '总金额', field: 'amount', sortable: true},
      { name: '总涨幅', align: 'right', label: '总涨幅', field: 'rate', sortable: true },
      { name: '总数量', align: 'right', label: '总数量', field: 'count', sortable: true },
      
    ]);

    const columnsIndex = ref([
      { name: '指数', align: 'center', label: '指数', field: 'index_', sortable: true},
      { name: '前10金额', align: 'right', label: '前10金额', field: 'amount10', sortable: true},
      { name: '前10涨幅', align: 'right', label: '前10涨幅', field: 'rate10', sortable: true },
      { name: '前10数量', align: 'right', label: '前10数量', field: 'count10', sortable: true },
      { name: '前20金额', align: 'right', label: '前20金额', field: 'amount20', sortable: true},
      { name: '前20涨幅', align: 'right', label: '前20涨幅', field: 'rate20', sortable: true },
      { name: '前20数量', align: 'right', label: '前20数量', field: 'count20', sortable: true },
      { name: '前50金额', align: 'right', label: '前50金额', field: 'amount50', sortable: true},
      { name: '前50涨幅', align: 'right', label: '前50涨幅', field: 'rate50', sortable: true },
      { name: '前50数量', align: 'right', label: '前50数量', field: 'count50', sortable: true },
      { name: '总金额', align: 'right', label: '总金额', field: 'amount', sortable: true},
      { name: '总涨幅', align: 'right', label: '总涨幅', field: 'rate', sortable: true },
      { name: '总数量', align: 'right', label: '总数量', field: 'count', sortable: true },
      
    ]);

    const columnsTag = ref([
      { name: '风格', align: 'center', label: '风格', field: 'tag', sortable: true},
      { name: '前10金额', align: 'right', label: '前10金额', field: 'amount10', sortable: true},
      { name: '前10涨幅', align: 'right', label: '前10涨幅', field: 'rate10', sortable: true },
      { name: '前10数量', align: 'right', label: '前10数量', field: 'count10', sortable: true },
      { name: '前20金额', align: 'right', label: '前20金额', field: 'amount20', sortable: true},
      { name: '前20涨幅', align: 'right', label: '前20涨幅', field: 'rate20', sortable: true },
      { name: '前20数量', align: 'right', label: '前20数量', field: 'count20', sortable: true },
      { name: '前50金额', align: 'right', label: '前50金额', field: 'amount50', sortable: true},
      { name: '前50涨幅', align: 'right', label: '前50涨幅', field: 'rate50', sortable: true },
      { name: '前50数量', align: 'right', label: '前50数量', field: 'count50', sortable: true },
      { name: '总金额', align: 'right', label: '总金额', field: 'amount', sortable: true},
      { name: '总涨幅', align: 'right', label: '总涨幅', field: 'rate', sortable: true },
      { name: '总数量', align: 'right', label: '总数量', field: 'count', sortable: true },
      
    ]);

    const columnsSse = ref([
      { name: '市场', align: 'center', label: '市场', field: 'sse', sortable: true},
      { name: '前10金额', align: 'right', label: '前10金额', field: 'amount10', sortable: true},
      { name: '前10涨幅', align: 'right', label: '前10涨幅', field: 'rate10', sortable: true },
      { name: '前10数量', align: 'right', label: '前10数量', field: 'count10', sortable: true },
      { name: '前20金额', align: 'right', label: '前20金额', field: 'amount20', sortable: true},
      { name: '前20涨幅', align: 'right', label: '前20涨幅', field: 'rate20', sortable: true },
      { name: '前20数量', align: 'right', label: '前20数量', field: 'count20', sortable: true },
      { name: '前50金额', align: 'right', label: '前50金额', field: 'amount50', sortable: true},
      { name: '前50涨幅', align: 'right', label: '前50涨幅', field: 'rate50', sortable: true },
      { name: '前50数量', align: 'right', label: '前50数量', field: 'count50', sortable: true },
      { name: '总金额', align: 'right', label: '总金额', field: 'amount', sortable: true},
      { name: '总涨幅', align: 'right', label: '总涨幅', field: 'rate', sortable: true },
      { name: '总数量', align: 'right', label: '总数量', field: 'count', sortable: true },
      
    ]);


    return { data, columnsHigh, columnsLow, columnsHead, columnsIndustry, columnsTag, columnsSse, columnsIndex, rowsHigh, rowsLow, rowsHead, rowsIndustry, rowsTag, rowsSse, rowsIndex, predataAmountOption, tab: ref('detail') };
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
  height: 260px

</style>




