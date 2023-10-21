<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-red-4">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          FQuant Web Application
          <q-badge align="top">v 1.7.16.1017</q-badge>
        </q-toolbar-title>

        <div class="text-bold" flat > {{ time }}</div>
        <q-btn flat round @click="this.$router.go(0);" icon='refresh'/>
        <q-btn flat round icon='airplay'>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="fixed = true">更新日志</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>关于...</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-dialog v-model="fixed">
          <release-notes> </release-notes>
        </q-dialog>        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1 text-black"
      width="250"
    >

      <div class="row">
        <div class="col-2">
            <q-tabs
              v-model="tab"
              vertical
              class="text-red-9 text-weight-bold"
            >
              <q-route-tab name="base" to="/marketindustry" label="基本" exact/>
              <q-route-tab name="pre" to="/prestock" label="竞价" exact/>
              <q-route-tab name="market" to="/market" label="盘中" exact/>
              <q-route-tab name="widthindex" to="/widthindex" label="盘后" exact/>
              <q-route-tab name="fundowner" to="/fundowner" label="组合" exact/>
              <q-route-tab name="mstatus" to="/marketstatus" label="市场" exact/>
            </q-tabs>
          </div>
          <div class="col">
            <router-view name="LeftSidebar"></router-view>
          </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view name="Main"></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import ReleaseNotes from 'components/ReleaseNotes.vue';


export default {
  name: 'MainLayout',
  components: { ReleaseNotes },
  

  mounted: function () {
    setInterval(() => {
      this.time = this.getToday();
    }, 1000);

    //this.$once("hook:beforeDestroy", () => {
    //  clearInterval(clock);
    //});
  },

  
  setup () {
    const leftDrawerOpen = ref(false)

    function getToday() {
      var datas = new Date();
      var on2 = ':';
      var onS = datas.getHours(); //时
      var onF = datas.getMinutes(); //分
      var onN = datas.getSeconds(); //秒
     
      if (onS >= 0 && onS <= 9) {
        onS = '0' + onS;
      }
      if (onF >= 0 && onF <= 9) {
        onF = '0' + onF;
      }
      if (onN >= 0 && onN <= 9) {
        onN = '0' + onN;
      }
     
      return onS + on2 + onF + on2 + onN;
    }
  

    return { tab: ref('market'), fixed: ref(false), time: ref(null), getToday, 
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>


