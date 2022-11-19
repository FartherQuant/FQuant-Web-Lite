<template>
  <q-item-label header v-if="data">盘中实时 ({{data.date}})</q-item-label>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'prestock'"
    @click="link = 'prestock'"
    active-class="my-menu-link"
    to="/prestock" exact>
    <q-item-section>
      <q-item-label>集合竞价</q-item-label>
      <q-item-label overline>9:15 - 9:30</q-item-label>
      <q-item-label caption>- 汇总集合竞价期间曾经涨停以及昨日涨停和昨日上榜标的的集合竞价情况。<br />
      - 按行业统计集合竞价的情况，用于初期判断行业的强弱。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />


  <q-item 
    clickable
    v-ripple
    :active="link === 'market'"
    @click="link = 'market'"
    active-class="my-menu-link"
    to="/market" exact>
    <q-item-section>
      <q-item-label>实时市场</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 实时统计市场状况，指数类每分钟更新，其余统计根据情况每5分钟、每15分钟或每30分钟更新</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'emotion'"
    @click="link = 'emotion'"
    active-class="my-menu-link"
    to="/emotion" exact>
    <q-item-section>
      <q-item-label>情绪</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计高标、涨跌停情况，反应当天市场情绪，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>

</template>

<script>
import {useQuasar} from 'quasar';
import { ref } from 'vue'
import { api } from 'boot/axios'

export default {

  mounted: function () {
    this.loadData()
  },

  setup () {
    const $q = useQuasar()
    const data = ref(null)

    function loadData () {
      api.get('/h5/data/webbaseinfo.json')
        .then((response) => {
          data.value = response.data
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }

    return { link: ref('market'), data, loadData }
  }
}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>
