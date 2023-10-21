<template>
  <q-item-label header v-if="data">组合研究 ({{data.date}})</q-item-label>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner'"
    @click="link = 'fundowner'"
    active-class="my-menu-link"
    to="/fundowner" exact>
    <q-item-section>
      <q-item-label>组合</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner-1'"
    @click="link = 'fundowner-1'"
    active-class="my-menu-link"
    to="/fundowner-1" exact>
    <q-item-section>
      <q-item-label>组合对照组</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'fundowner-4'"
    @click="link = 'fundowner-4'"
    active-class="my-menu-link"
    to="/fundowner-4" exact>
    <q-item-section>
      <q-item-label>组合应用组</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
      <q-item-label caption>对比统计当前策略的执行情况。<br />
      展示当前策略的持仓情况。
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />
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

    return { link: ref('fundowner'), data, loadData }
  }
}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>

