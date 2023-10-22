<template>
  <q-item-label header v-if="data">竞价 ({{data.date}})</q-item-label>
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
      <q-item-label overline>9:15 - 9:25</q-item-label>
      <q-item-label caption>- 汇总集合竞价期间曾经涨停以及昨日涨停和昨日上榜标的的集合竞价情况。<br />
      - 按行业统计集合竞价的情况，用于初期判断行业的强弱。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'predata'"
    @click="link = 'predata'"
    active-class="my-menu-link"
    to="/predata" exact>
    <q-item-section>
      <q-item-label>竞价结果</q-item-label>
      <q-item-label overline>9:26</q-item-label>
      <q-item-label caption>- 开盘竞价结束后统计结果</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'enddata'"
    @click="link = 'enddata'"
    active-class="my-menu-link"
    to="/enddata" exact>
    <q-item-section>
      <q-item-label>收盘竞价</q-item-label>
      <q-item-label overline>15:01</q-item-label>
      <q-item-label caption>- 收盘竞价结束后统计结果</q-item-label>
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

    return { link: ref('prestock'), data, loadData }
  }
}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>
