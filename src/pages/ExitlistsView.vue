<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="bg-grey-1" name="exit1list" v-if="this.loading">
      <div class="row">
        <div class="text-h6 q-pa-sm">停盘风险</div>
      </div>
      <div class="q-pa-sm">
          应停：{{this.willdata.all.name}} <br />
          将停：{{this.willdata.will.name}}
      </div>

      <q-separator inset spaced />
      <div class="row">
        <div class="q-pa-sm">10日累计超100%</div>
      </div>
      <div class="q-pa-sm">
         <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="this.willdata.day10"
          :columns="columnswillday10"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>

      <q-separator inset spaced />
      <div class="row">
        <div class="q-pa-sm">明日即将超100%</div>
      </div>
      <div class="q-pa-sm">
         <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="this.willdata.day09"
          :columns="columnswillday09"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>

      <q-separator inset spaced />
      <div class="row">
        <div class="q-pa-sm">30日累计超200%</div>
      </div>
      <div class="q-pa-sm">
         <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="this.willdata.day30"
          :columns="columnswillday30"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>

      <q-separator inset spaced />
      <div class="row">
        <div class="q-pa-sm">明日即将累计超200%</div>
      </div>
      <div class="q-pa-sm">
         <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="this.willdata.day29"
          :columns="columnswillday29"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>




      <q-separator inset spaced />

      <div class="row">
        <div class="text-h6 q-pa-sm">面值退市</div>
      </div>
      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsexitprice"
          :columns="columnsexitprice"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>

      <q-separator inset spaced />

      <div class="row">
        <div class="text-h6 q-pa-sm">退市整理</div>
      </div>
      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsclearup"
          :columns="columnsclearup"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
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
          <q-tab name="bond2stock_data" label="退市/停牌" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>
  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref, defineComponent } from 'vue'


export default defineComponent({
  name: 'TrendView',
  
  mounted: function () {
    this.getData()
  },
  methods: {
    getData: async function () {
      const res1 = await http.get('https://stock.anno189.com/h5/data/exitstock.json', {})

      this.rowsexitprice = res1.data.data.price;
      this.rowsclearup = res1.data.data.clearup;

      const res2 = await http.get('https://stock.anno189.com/h5/data/willstoptradeoneday.json', {})
      this.willdata = res2.data.data
      
      console.log(this.willdata)


      this.loading = true

      }
    },
  setup () {
    
    const rowsexitprice = ref({});
    const rowsclearup = ref({});
    const willdata = ref({});
    const rowsday10 = ref({});
    
    const columnsexitprice = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: ' 天数', align: 'center', label: '天数', field: 'days', sortable: true },
    ]);

    const columnsclearup = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
    ]);

    const columnswillday10 = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: '日内涨跌', align: 'center', label: '日内涨跌', field: 'RATE', sortable: true },
      { name: '10日涨幅', align: 'center', label: '10日涨幅', field: 'RATE10', sortable: true },
      { name: '差', align: 'center', label: '差', field: 'wspace', sortable: true },
      
    ]);

    const columnswillday09 = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: '日内涨跌', align: 'center', label: '日内涨跌', field: 'RATE', sortable: true },
      { name: '9日涨幅', align: 'center', label: '9日涨幅', field: 'RATE9', sortable: true },
      { name: '差', align: 'center', label: '差', field: 'wspace', sortable: true },
      
    ]);

    const columnswillday30 = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: '日内涨跌', align: 'center', label: '日内涨跌', field: 'RATE', sortable: true },
      { name: '30日涨幅', align: 'center', label: '30日涨幅', field: 'RATE30', sortable: true },
      { name: '差', align: 'center', label: '差', field: 'wspace', sortable: true },
      
    ]);

    const columnswillday29 = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '价格', align: 'center', label: '价格', field: 'close', sortable: true },
      { name: '日内涨跌', align: 'center', label: '日内涨跌', field: 'RATE', sortable: true },
      { name: '29日涨幅', align: 'center', label: '29日涨幅', field: 'RATE29', sortable: true },
      { name: '差', align: 'center', label: '差', field: 'wspace', sortable: true },
      
    ]);

    return { loading:ref(), columnsexitprice, rowsexitprice, rowsclearup, columnsclearup, tab: ref('exit1list'), willdata, columnswillday10, columnswillday09, columnswillday30, columnswillday29};
      
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









