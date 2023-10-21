<template>
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

      
      </q-table>
    </div>
    
  </div>

  <q-separator />

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
      const response = await http.get('https://stock.anno189.com/h5/data/predataindustry.json', {})

      console.log(response.data)
      this.rowsIndustry = response.data.data.industry
      

    }
  },

  setup () {
    const rowsIndustry= ref(null);

    const columnsIndustry = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code', sortable: true},
      { name: '行业', align: 'center', label: '行业', field: 'name', sortable: true},
      { name: '最大金额', align: 'right', label: '最大金额', field: 'MAmount', sortable: true},
      { name: '成交金额', align: 'right', label: '成交金额', field: 'amount', sortable: true },
      { name: '最大量比', align: 'right', label: '最大量比', field: 'Mrate', sortable: true },
      { name: '竞价量比', align: 'right', label: '竞价量比', field: 'Arate', sortable: true},
      { name: '涨1', align: 'right', label: '涨1', field: 's1', sortable: true },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'r1', sortable: true },
      { name: '涨2', align: 'right', label: '涨2', field: 's2', sortable: true},
      { name: '涨幅', align: 'right', label: '涨幅', field: 'r2', sortable: true },
      { name: '涨3', align: 'right', label: '涨3', field: 's3', sortable: true },
      { name: '涨幅', align: 'right', label: '涨幅', field: 'r3', sortable: true},
    ]);

    return { columnsIndustry, rowsIndustry};
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

</style>




