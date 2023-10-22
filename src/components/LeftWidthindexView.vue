<template>
  <q-item-label header v-if="data">盘后分析 ({{data.date}})</q-item-label>
  <q-separator spaced />
  
  <q-item 
    clickable
    v-ripple
    :active="link === 'detail'"
    @click="link = 'detail'"
    active-class="my-menu-link"
    to="/detail" exact>
    <q-item-section>
      <q-item-label>综合</q-item-label>
      <q-item-label overline>每日19:00/隔日8:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'widthindex'"
    @click="link = 'widthindex'"
    active-class="my-menu-link"
    to="/widthindex" exact>
    <q-item-section>
      <q-item-label>宽指</q-item-label>
      <q-item-label overline>每日18:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'industry'"
    @click="link = 'industry'"
    active-class="my-menu-link"
    to="/industry" exact>
    <q-item-section>
      <q-item-label>行业</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'concept'"
    @click="link = 'concept'"
    active-class="my-menu-link"
    to="/concept" exact>
    <q-item-section>
      <q-item-label>概念</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />


  <q-item 
    clickable
    v-ripple
    :active="link === 'outer'"
    @click="link = 'outer'"
    active-class="my-menu-link"
    to="/outer" exact>
    <q-item-section>
      <q-item-label>外盘</q-item-label>
      <q-item-label overline>隔日8:00更新</q-item-label>
    </q-item-section>
  </q-item>
  <q-separator spaced />

  <q-item 
    clickable
    v-ripple
    :active="link === 'exit'"
    @click="link = 'exit'"
    active-class="my-menu-link"
    to="/exit" exact>
    <q-item-section>
      <q-item-label>退市/停牌</q-item-label>
      <q-item-label overline>每日19:00更新</q-item-label>
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

    return { link: ref('widthindex'), data, loadData }
  }
}
</script>


<style lang="sass">
.my-menu-link
  background: #ffebee
</style>

