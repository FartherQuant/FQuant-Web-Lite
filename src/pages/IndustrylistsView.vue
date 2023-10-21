<template>
<q-page style="padding-top: 46px" class="bg-grey-1">
   <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="index">
      <div class="col-12" v-if="rowsM">
        <!-- <div class="text-h6 q-pa-sm">宽指</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsM"
            :columns="columnsM"
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

    <q-tab-panel name="industry">
      <div class="col-12" v-if="rowsI1">
        <!-- <div class="text-h6 q-pa-sm">行业</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsI1"
            :columns="columnsI1"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.count05 > 10)?'bg-red-3':(props.row.count05 > 6)?'bg-red-2':(props.row.count05 > 3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel name="concept">
      <div class="col-12" v-if="rowsI1">
        <!-- <div class="text-h6 q-pa-sm">概念</div> -->
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsCon"
            :columns="columnsCon"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.count05 > 10)?'bg-red-3':(props.row.count05 > 6)?'bg-red-2':(props.row.count05 > 3)?'bg-red-1':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
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
          <q-tab name="index" label=" 宽指" />
          <q-tab name="industry" label="行业" />
          <q-tab name="concept" label="概念" />
        </q-tabs>
    </q-toolbar>
  </q-page-sticky>

  <q-separator />

</q-page>
</template>


<script lang=“ts”>
import http from '../utils/http'
import { ref } from 'vue'


export default({
  name: 'IndustryListView',
  
  mounted: function () {
    this.getServerMarketData()
  },

  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const response = await http.get('https://stock.anno189.com/h5/data/index.json', params)
      this.rowsI1 = response.data.data.I3.series
      this.rowsM = response.data.data.M.series;
      this.rowsCon = response.data.data.con.series;
      
    }
  },

  setup () {
    const rowsI1 = ref(null);
    const rowsM = ref(null);
    const rowsCon = ref(null);

    const columnsM = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '涨跌', align: 'right', label: '涨跌', field: 'rate', sortable: true},
      { name: '量', align: 'right', label: '量', field: 'vol', sortable: true },
      { name: '量比', align: 'right', label: '量比', field: 'vrate', sortable: true },
      { name: '金', align: 'right', label: '金', field: 'amount', sortable: true },
      { name: '金比', align: 'right', label: '金比', field: 'arate', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
      { name: '涨跌比', align: 'right', label: '涨跌比', field: 'zdrate', sortable: true },
    ]);

    const columnsI1 = ref([
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '涨跌', align: 'left', label: '涨跌', field: 'rate', sortable: true},
      { name: '最大涨幅', align: 'right', label: '最大涨幅', field: 'maxrate', sortable: true },
      { name: '涨停数', align: 'right', label: '涨停数', field: 'count10', sortable: true },
      { name: '7%平均涨幅', align: 'right', label: '7%平均涨幅', field: 'mean07', sortable: true },
      { name: '7%数量', align: 'right', label: '7%数量', field: 'count07', sortable: true },
      { name: '5%平均涨幅', align: 'right', label: '5%平均涨幅', field: 'mean05', sortable: true },
      { name: '5%数量', align: 'right', label: '5%数量', field: 'count05', sortable: true },
      { name: '量比', align: 'right', label: '量比', field: 'vrate', sortable: true },
      { name: '金', align: 'right', label: '金', field: 'amount', sortable: true },
      { name: '金比', align: 'right', label: '金比', field: 'arate', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
      { name: '涨跌比', align: 'right', label: '涨跌比', field: 'zdrate', sortable: true },
    ]);
    //{ name: '量', align: 'right', label: '量', field: 'vol', sortable: true },

    const columnsCon = ref([
      { name: '分类', align: 'left', label: '分类', field: 'n1name', sortable: true},
      { name: '代码', align: 'left', label: '代码', field: 'code', sortable: true},
      { name: '名称', align: 'left', label: '名称', field: 'name', sortable: true},
      { name: '最大涨幅', align: 'right', label: '最大涨幅', field: 'maxrate', sortable: true },
      { name: '涨停数', align: 'right', label: '涨停数', field: 'count10', sortable: true },
      { name: '7%平均涨幅', align: 'right', label: '7%平均涨幅', field: 'mean07', sortable: true },
      { name: '7%数量', align: 'right', label: '7%数量', field: 'count07', sortable: true },
      { name: '5%平均涨幅', align: 'right', label: '5%平均涨幅', field: 'mean05', sortable: true },
      { name: '5%数量', align: 'right', label: '5%数量', field: 'count05', sortable: true },
      { name: '上涨', align: 'right', label: '上涨', field: 'up_count', sortable: true },
      { name: '下跌', align: 'right', label: '下跌', field: 'down_count', sortable: true },
    ]);
    return { columnsI1, rowsI1, rowsM, columnsM, rowsCon, columnsCon,  tab: ref('index') };
      
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




