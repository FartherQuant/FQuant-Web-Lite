<template>
<q-page style="padding-top: 46px">
  
  <q-tab-panels v-model="tab" animated>

    <q-tab-panel class="bg-grey-1" name="mstatusdata" >
      <q-item-label header v-if="data">{{data.date}}</q-item-label>

      <div class="q-pa-sm" v-if="loading">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsMstatus"
          :columns="columnsMstatus"
          :rows-per-page-options="[10000]"
          row-key="name"
        />
      </div>

      <q-separator spaced />

      <div class="q-pa-md">
        <div class="row">

        
          <div class="col-5  q-pr-sm" v-if="loading" >
            <div class="text-h6 q-pb-sm">成交金额TOP10风格</div>
            <q-table 
              class="my-sticky-column-table"
              dense
              bordered
              :rows="rowsTagList"
              :columns="columnsTagList"
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
          <div class="col q-pl-sm" v-if="loading">
            <div class="text-h6 q-pb-sm">成交金额TOP10列表</div>
            <q-table
              class="my-sticky-column-table"
              dense
              bordered
              :rows="rowsDataList"
              :columns="columnsDataList"
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
          <q-tab name="mstatusdata" label="市场状态" />
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
  name: 'MarketStatus',
  
  mounted: function () {
    this.getData()
  },
  methods: {
    getData: async function () {
      const res1 = await http.get('https://stock.anno189.com/h5/data/JsonMarketStatus.json', {})

      this.rowsMstatus = res1.data.data.mstatus;

      const res2 = await http.get('https://stock.anno189.com/h5/data/JsonAmountTop.json', {})
      this.rowsTagList = res2.data.data.taglist;
      this.rowsDataList = res2.data.data.datalist;
      
      this.loading = true
      }
    },
  setup () {
    
    const data = ref({});
    const rowsMstatus = ref({});
    const rowsTagList = ref({});
    const rowsDataList = ref({});
    
    const columnsMstatus = ref([
      { name: '风格', align: 'center', label: '代码', field: 'chance_' },
      { name: '类型', align: 'center', label: '名称', field: 'type_' },
      { name: '状态', align: 'center', label: '行业', field: 'status_' },
      { name: '备注', align: 'center', label: '金额', field: 'recommend_' },
    ]);

    const columnsTagList = ref([
      { name: '风格', align: 'center', label: '风格', field: 'type' },
      { name: '名称', align: 'center', label: '名称', field: 'name' },
      { name: '金额', align: 'center', label: '金额(亿', field: 'amount' },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate' },
      { name: '数量', align: 'center', label: '数量', field: 'count' },
    ]);

    const columnsDataList = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code' },
      { name: '名称', align: 'center', label: '名称', field: 'name' },
      { name: '行业', align: 'center', label: '行业', field: 'industry' },
      { name: '金额', align: 'center', label: '金额(亿)', field: 'amount' },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate' },
      { name: '标签', align: 'center', label: '标签', field: 'tag' },
    ]);

    return { loading:ref(), data, rowsMstatus, columnsMstatus, rowsTagList, columnsTagList, rowsDataList, columnsDataList, tab: ref('mstatusdata')};
      
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









