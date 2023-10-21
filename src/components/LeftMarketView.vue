<template>
  <q-item-label header v-if="data">盘中实时 ({{data.date}})</q-item-label>
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

  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'trend'"
    @click="link = 'trend'"
    active-class="my-menu-link"
    to="/trend" exact>
    <q-item-section>
      <q-item-label>金额</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计日内成交金额情况，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'industrylists'"
    @click="link = 'industrylists'"
    active-class="my-menu-link"
    to="/industrylists" exact>
    <q-item-section>
      <q-item-label>板块</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计宽指、行业，每分钟更新</q-item-label>
    </q-item-section>
  </q-item>

  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'bond2stocklists'"
    @click="link = 'bond2stocklists'"
    active-class="my-menu-link"
    to="/bond2stocklists" exact>
    <q-item-section>
      <q-item-label>转债</q-item-label>
      <q-item-label overline>9:30 - 15:00</q-item-label>
      <q-item-label caption>- 统计转债与正股的成交情况，每分钟更新</q-item-label>
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
      api.get('https://stock.anno189.com/h5/data/webbaseinfo.json')
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
