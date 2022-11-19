<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">关于 FQuant Web Application Lite</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll">
      <p class="text-weight-bold">版本说明：</p>
      <p>- 该版本为FQuant Application 免费版<br />
      - 页面数据需要手工刷新。
      </p>

      <p class="text-weight-bold">关于数据</p>
      <p>- 基础数据使用通达信，可能会有滞后。<br />
      - 盘后数据会在每日19:00之后更新。<br />
      - 个别时间可能会因为后台优化出现实盘显示数据不完整。<br />
      </p>

      <p class="text-weight-bold">关于组合</p>
      <p>- 组合为当前自用量化模拟组合的展示。<br />
      - 策略为当前量化某策略池的部分运算结果，仅限团队使用或展示。<br />
      </p>

      <p class="text-weight-bold">关于投资</p>
      <p>- 本软件为辅助工具，所有的结果均为主观逻辑的量化结果。<br />
      - 本软件所展示的个股代码仅为结果展示使用，非荐股。
      </p>

      <p class="text-weight-bold">投资有风险，入市需谨慎。</p>
      <p class="text-weight-bold">请咨询持牌投顾。</p>
    </q-card-section>

    <q-separator />

    <q-card-actions align="center">
      <q-btn flat label="确定" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'ReleaseNotes',
});
</script>
