<template>
  <q-item-label header v-if="data">市场概况 ({{data.date}})</q-item-label>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'marketindustry'"
    @click="link = 'marketindustry'"
    active-class="my-menu-link"
    to="/marketindustry" exact>
    <q-item-section>
      <q-item-label>行业</q-item-label>
      <!--<q-item-label overline>9:15 - 9:30</q-item-label>-->
      <q-item-label caption>- 行业在板块、指数中的占比等
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-item 
    clickable
    v-ripple
    :active="link === 'indexscatter'"
    @click="link = 'indexscatter'"
    active-class="my-menu-link"
    to="/indexscatter" exact>
    <q-item-section>
      <q-item-label>指数</q-item-label>
      <q-item-label overline>宽指调整日更新，每年更新2次</q-item-label>
      <q-item-label caption>- 宽指之间的重叠关系
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

    return { link: ref('marketindustry'), data, loadData }
  }
}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>
