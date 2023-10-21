<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="detail" class="bg-grey-1">
      <div class="col-12"  v-if="this.rowsEndPrice">
        <div class="text-h6 q-pa-sm">收盘竞价</div>
        <div class="text-sm =q-pa-sm">日内成交大于1亿，收盘竞价成交大于100万</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsEndPrice"
            :columns="columnsEndPrice"
            :rows-per-page-options="[10000]"
            row-key="name"
          >

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.close > 0)?'bg-red-1':(props.row.close < 0)?'bg-green-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
          </q-table>
        </div>

        <q-separator  spaced/>

      </div>
    </q-tab-panel>

    <q-tab-panel name="stocks" class="bg-grey-1">
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
          <q-tab name="detail" label="竞价列表" />
          <q-tab name="stocks" label="竞价统计" />
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
  name: 'GridPreDataView',

  mounted: function () {
    this.getServerMarketData()
  },

  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const response = await http.get('https://stock.anno189.com/h5/data/endprice.json', params)

      this.rowsEndPrice = response.data.data.data
      console.log(this.rowsEndPrice)
      
    }
  },

  setup () {
    const rowsEndPrice = ref(null);

    const columnsEndPrice = ref([
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'left', label: '行业', field: 'industry', sortable: true},
      { name: '指数', align: 'left', label: '指数', field: 'index_', sortable: true},
      { name: '涨幅', align: 'right', label: '竞价涨跌', field: 'close', sortable: true},
      { name: '金额', align: 'right', label: '竞价成交', field: 'last_amount', sortable: true },
      { name: '换手', align: 'right', label: '换手', field: 'hsl', sortable: true },
      { name: '综合', align: 'right', label: '综合', field: 'all', sortable: true },
    ]);

    return { columnsEndPrice, rowsEndPrice,  tab: ref('detail') };
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




