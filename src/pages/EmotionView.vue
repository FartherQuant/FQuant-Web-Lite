<template>
<q-page style="padding-top: 46px">
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="bg-grey-1" name="high10">
      <div class="col-12 col-md"  v-if="emotion.emotion">
        <div class="text-h6 q-pa-sm">涨停: {{emotion.emotion.up}}；跌停: {{emotion.emotion.down}} </div>
        
        <div class="text-body1 q-pa-sm">
          新高：{{emotion.emotion.today}}；前高：{{emotion.emotion.yestoday}}；<br />
          连板：{{emotion.emotion.continue}}；一进二：{{emotion.emotion.onetwo}}；封板：{{emotion.limitup.rate}}%；<br />
          平均涨幅：{{emotion.emotion.mean}}%<br />
        </div>

        <q-separator inset spaced />

        <div class="text-h6 q-pa-sm">高标：{{emotion.highbar.two}}, 涨幅：{{emotion.highbar.mean}}% </div>
        <div class="text-body1 q-pa-sm">
          机会：{{emotion.highbar.chance.count}}；<br />
          板块：{{emotion.highbar.chance.block}}<br />
          个股：{{emotion.highbar.chance.stock}}<br />
          风险：{{emotion.highbar.risk.count}}；个股：{{emotion.highbar.risk.stock}}<br />
        </div>

        <q-separator inset spaced />

        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsHigh"
            :columns="columnsHigh"
            :rows-per-page-options="[10000]"
            row-key="name"
          />
        </div>

        <q-separator inset spaced />

        <div class="text-h6 q-pa-sm">注册制新股</div>
        <div class="q-pa-sm">
          <q-table
            class="my-sticky-column-table"
            dense
            bordered
            :rows="rowsNew"
            :columns="columnsNew"
            :rows-per-page-options="[10000]"
            row-key="name"
          />
        </div>
      </div>
    </q-tab-panel>

    <q-tab-panel class="bg-grey-1" name="top10">
      <div class="text-h6 q-pa-sm">今日涨停: {{emotion.new.chance}}</div>
      <div class="q-pa-sm">
        机会：{{emotion.new.block}}
      </div>
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rows10"
          :columns="columns10"
          :rows-per-page-options="[10000]"
          row-key="name"
        />
      </div>
    </q-tab-panel>

    <q-tab-panel class="bg-grey-1" name="low10">
      <div class="text-h6 q-pa-sm">今日跌停</div>
      
      <div class="q-pa-sm">
        <q-table
          class="my-sticky-column-table"
          dense
          bordered
          :rows="rowsDown"
          :columns="columnsDown"
          :rows-per-page-options="[10000]"
          row-key="name"
        />
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
          <q-tab name="high10" label="高标和新股" />
          <q-tab name="top10" label="今日涨停" />
          <q-tab name="low10" label="今日跌停" />
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
  name: 'EmotionView',

  mounted: function () {
    this.getData()
  },
  methods: {
    getData: async function () {
      const res = await http.get('https://stock.anno189.com/h5/data/emotion.json', {})

      this.emotion = res.data.data.emotion;
      this.rows10 = res.data.data.limitup.series;
      this.rowsHigh = res.data.data.highbar.series;
      this.rowsDown = res.data.data.limitdown.series;
      this.rowsNew = res.data.data.New.series;
      }
    },

  setup () {
    
    const emotion = ref({});
    const rows10 = ref({});
    const rowsHigh = ref({});
    const rowsNew = ref({});

    const columns10 = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '时间', align: 'center', label: '时间', field: 'time', sortable: true },
      { name: '基因', align: 'center', label: '基因', field: 'RGene', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '备注', align: 'center', label: '备注', field: 'memo', sortable: true },
      { name: '封单', align: 'center', label: '封单', field: 'amount', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      { name: '概念', align: 'center', label: '概念', field: 'blockname', sortable: true },
    ]);
    const columnsHigh = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '涨幅', align: 'center', label: '涨幅', field: 'rate', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      { name: '概念', align: 'center', label: '概念', field: 'blockname', sortable: true },
      ]);
    const columnsDown = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate', sortable: true},
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true},
      { name: '封单', align: 'center', label: '封单', field: 'amount', sortable: true},
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      ]);
    const columnsNew = ref([
      { name: '名称', align: 'center', label: '名称', field: 'name', sortable: true},
      { name: '连', align: 'center', label: '连', field: 'hcount', sortable: true},
      { name: '时间', align: 'center', label: '时间', field: 'time', sortable: true },
      { name: '行业', align: 'center', label: '行业', field: 'industry', sortable: true },
      { name: '换手', align: 'center', label: '换手', field: 'HSL', sortable: true },
      { name: '封单', align: 'center', label: '封单', field: 'amount', sortable: true },
      { name: '市值', align: 'center', label: '市值', field: 'marketvalue', sortable: true },
      ]);

    return { emotion, rows10, rowsHigh, rowsNew, columns10, columnsHigh, columnsDown, columnsNew, tab: ref('high10')};
      
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









