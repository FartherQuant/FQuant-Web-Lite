<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="bg-grey-1" name="IndexScatter_data" >
      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsIndexScatter"
          :columns="columnsIndexScatter"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
        </q-table>
      </div>
      <div class="row">
        <div class="text-sm q-pa-sm">创业50与上证180/上证380/上证150有重叠，此处的创业50行和列是剔除上证180/上证380/上证150的重叠后的数据<br />
        结论：上证150是一个独立的宽指，与其他的重合度不高，可能会独立走强。</div>
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
          <q-tab name="IndexScatter_data" label="指数重叠关系" />
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
      const res = await http.get('https://stock.anno189.com/h5/data/GridIndexScatter.json', {})

      this.rowsIndexScatter = res.data.data.scatter;

      this.loading = true
      }
    },
  setup () {
    
    const rowsIndexScatter = ref({});
    
    ['', '', '', '', '', '', '', '']

    const columnsIndexScatter = ref([
      { name: '指数', align: 'center', label: '指数', field: '指数', sortable: true },
      { name: '上证180', align: 'center', label: '上证180', field: '上证180', sortable: true },
      { name: '上证380', align: 'center', label: '上证380', field: '上证380', sortable: true },
      { name: '上证150', align: 'center', label: '上证150', field: '上证150', sortable: true },
      { name: '深证100', align: 'center', label: '深证100', field: '深证100', sortable: true },
      { name: '深证200', align: 'center', label: '深证200', field: '深证200', sortable: true },
      { name: '深证700', align: 'center', label: '深证700', field: '深证700', sortable: true },
      { name: '科创50', align: 'center', label: '科创50', field: '科创50', sortable: true },
      { name: '其他', align: 'center', label: '其他', field: '其他', sortable: true }
    ]);

    return { loading:ref(), rowsIndexScatter, columnsIndexScatter, tab: ref('IndexScatter_data')};
      
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









