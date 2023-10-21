<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="bg-grey-1" name="stock_data" >
      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsStock"
          :columns="columnsStock"
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
          <q-tab name="stock_data" label="个股" />
          <q-tab name="ins_data" label="行业" />
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
      const res = await http.get('https://stock.anno189.com/h5/data/amountdata.json', {})

      this.rowsStock = res.data.data.trend;

      this.loading = true
      }
    },
  setup () {
    
    const rowsStock = ref({});
    
    const columnsStock = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true },
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '成交金额', align: 'center', label: '金额', field: 'amount', sortable: true },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate', sortable: true },
      { name: '5亿', align: 'center', label: '5亿', field: 'time05', sortable: true },
      { name: '10亿', align: 'center', label: '10亿', field: 'time10', sortable: true },
      { name: '指数', align: 'center', label: '指数', field: 'index_', sortable: true }
    ]);

    return { loading:ref(), rowsStock, columnsStock, tab: ref('stock_data')};
      
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









