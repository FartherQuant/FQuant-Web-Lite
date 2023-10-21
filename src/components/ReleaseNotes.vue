<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">更新日志</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll">
      <p class="text-weight-bold">v 1.7.16.1017</p>
      <p>- 新增：盘后-综合-融资融券余额（成交金额比例）<br />
      - 删除：盘中-实时市场-离线人民币
      </p>
      <p class="text-weight-bold">v 1.7.15.1014</p>
      <p>- 新增：盘中-今日-主要指数日内分时-富时中国 A50，数据来源：东方财富
      </p>
      <p class="text-weight-bold">v 1.7.14.1012</p>
      <p>- 新增：盘中-板块-实时概念统计，每分钟更新<br />
      - 调整：盘中-行业-实时行业统计，每分钟更新<br />
      - 调整：盘中-宽指-实时宽指统计，每分钟更新
      </p>
      <p class="text-weight-bold">v 1.7.13.1011</p>
      <p>- 新增：盘后-停盘-10日和30日涨幅停牌的个股<br />
      </p>
      <p class="text-weight-bold">v 1.7.12.1007</p>
      <p>- 新增：盘中-实时市场-主要指数分时图，数据来源：东方财富<br />
      </p>
      <p class="text-weight-bold">v 1.7.11.0924</p>
      <p>- 新增：盘中-实时市场-离线人民币<br />
      - 新增：组合-策略-BIAS36<br />
      </p>
      <p class="text-weight-bold">v 1.7.10.0923</p>
      <p>- 新增：盘中-实时市场-日内高标<br />
      - 新增：盘中-实时市场-情绪指数<br />
      - 调整：盘中-量比，盘中-行业放量，量比累计规则
      - 调整：盘中-成交量预测，增加频率为每15分钟一次
      </p>
      <p class="text-weight-bold">v 1.7.9.0905</p>
      <p>- 新增：盘中-实时市场-北向资金
      </p>
      <p class="text-weight-bold">v 1.7.8.0829</p>
      <p>- 新增：盘后-风格-行业综合风格<br />
      - 新增：盘后-风格-概念综合风格<br />
      - 竞价：竞价-行业<br />
      - 新增：盘后-指数-近11日宽指涨幅相关性<br />
      </p>
      <p class="text-weight-bold">v 1.7.7.0813</p>
      <p>- 调整：盘后-风格-大小盘风格，增加成交金额显示<br />
      - 调整：盘后-行业/概念，增加RPS10的显示，修正RPS250的运算错误<br />
      </p>
      <p class="text-weight-bold">v 1.7.6.0622</p>
      <p>- 新增：收盘竞价统计<br />
      </p>
      <p class="text-weight-bold">v 1.7.5.0605</p>
      <p>- 新增：策略长周期对照<br />
      </p>
      <p class="text-weight-bold">v 1.7.4.0602</p>
      <p>- 新增：宽指重叠关系图表<br />
      </p>
      <p class="text-weight-bold">v 1.7.3.0601</p>
      <p>- 新增：面值退市列表<br />
      - 新增：退市整理列表<br />
      - 调整：盘后风格的显示，删除了弱势/超跌等风格<br />
      </p>
      <p class="text-weight-bold">v 1.7.2.0529</p>
      <p>- 新增：市场风格分析统计页面<br />
      - 调整：风格效果图表到风格页面<br />
      - 调整：部分表格的显示内容和效果<br />
      </p>
      <p class="text-weight-bold">v 1.7.1.0524</p>
      <p>- 新增：市场综合图表<br />
      - 新增：竞价成交量前50的成交量统计结果<br />
      </p>
      <p class="text-weight-bold">v 1.7.0.0519</p>
      <p>- 新增：集合竞价单独列出，不再放到盘中<br />
      - 新增：竞价成交量前50的成交量统计结果<br />
      </p>
      <p class="text-weight-bold">v 1.6.5.0426</p>
      <p>- 调整：情绪页面中注册制新股的显示列表<br />
      - 新增：盘后宽指概况表格<br />
      - 调整：盘后宽指的显示<br />
      - 新增：盘后概念概况表格<br />
      - 调整：盘后概念的显示<br />
      </p>
      <p class="text-weight-bold">v 1.6.4.0424</p>
      <p>- 新增：盘后行业概况表格<br />
      - 调整：盘后行业的显示<br />
      </p>
      <p class="text-weight-bold">v 1.6.3.0416</p>
      <p>- 新增：Pinbar策略筛选结果
      </p>
      <p class="text-weight-bold">v 1.6.2.0223</p>
      <p>- 新增：可转债日内市场成交金额统计
      </p>
      <p class="text-weight-bold">v 1.6.1.0216</p>
      <p>- 新增：盘后市场成交金额 TOP10 统计<br />
      - 新增：日内市场成交金额 TOP10 统计<br />
      </p>
      <p class="text-weight-bold">v 1.6.0.0215</p>
      <p>- 新增：市场状态页面<br />
      </p>
      <p class="text-weight-bold">v 1.5.9.0213</p>
      <p>- 新增：盘中交易资金进阶股/行业情况<br />
      </p>
      <p class="text-weight-bold">v 1.5.8.0127</p>
      <p>- 新增：策略市场流通市值分布统计<br />
      </p>
      <p class="text-weight-bold">v 1.5.7.0126</p>
      <p>- 新增：市场流通市值分布统计<br />
      - 更新：Echarts 插件，修订了一些显示上的错误。。<br />
      - 新增：行业分类深度价值、价值成长、高成长，重构了相关图表<br />
      </p>
      <p class="text-weight-bold">v 1.5.6.1203</p>
      <p>- 修订：持续放量个数的统计口径。<br />
      - 修订：按行业统计分时放量标的数量。<br />
      - 修订：完善策略池。<br />
      </p>
      <p class="text-weight-bold">v 1.5.5.1129</p>
      <p>- 新增：持续放量个数。
      </p>
      <p class="text-weight-bold">v 1.5.4.1123</p>
      <p>- 新增：行业大小盘统计图表。
      </p>
      <p class="text-weight-bold">v 1.5.3.1122</p>
      <p>- 新增：高标涨幅同比线图。
      </p>
      <p class="text-weight-bold">v 1.5.2.1120</p>
      <p>- 新增：策略详细信息。
      </p>

      <p class="text-weight-bold">v 1.5.1.1119</p>
      <p>- 新增：大小盘风格在市场中统计。<br />
      - 调整：大小盘涨跌的显示。<br />
      </p>

      <p class="text-weight-bold">v 1.5.0</p>
      <p>- 新增：行业在市场中统计。<br />
      - 调整：版面格式。<br />
      </p>

      <p class="text-weight-bold">v 1.4.0</p>
      <p>- 新增：宽指、行业列表。<br />
      </p>

      <p class="text-weight-bold">v 1.3.4</p>
      <p>- 新增：竞价概况。<br />
      </p>

      <p class="text-weight-bold">v 1.3.3</p>
      <p>- 修订：浮点图提示的显示问题。<br />
      - 修订：竞价部分运算的取数错误。<br />
      - 调整：整理图表输出数据的小数位。<br />
      </p>

      <p class="text-weight-bold">v 1.3.2</p>
      <p>- 新增集合竞价行业汇总<br />
      - 增加交易日期及时间显示<br />
      - 调整集合竞价、情绪、更新日志的显示方式<br />
      - 增加盘中宽指成交量线图<br />
      - 增加盘中涨跌图上涨线<br />
      - 修订指数、行业、资金散点图提示的显示格式</p>

      <p class="text-weight-bold">v 1.3.1</p>
      <p>- 更新左边栏菜单项及展示方式</p>

      <p class="text-weight-bold">v 1.3.0</p>
      <p>- 新增集合竞价模块<br />
      - 调整表格的显示方式，表格名称列固定<br />
      - 更新部分取数 ajax 方式。
      </p>
      <p class="text-weight-bold">v 1.2.2</p>
      <p>- 新增系统更新日志。<br />
      - 调整工具栏的板面。
      </p>

      <p class="text-weight-bold">v 1.2.1</p>
      <p>- 新增“组合”页面。用来显示组合的情况，用来监控”菜篮子“组合的运行情况，包括多过滤对照、不同组合策略的持仓比例和行业占比。</p>

      <p class="text-weight-bold">v 1.1.0</p>
      <p>- 新增“情绪”页面。用来显示组合的情况。用来监控盘中的资金情绪，包括日内涨跌停情况、昨日高标和上市新股。<br />
      - 新增 pwa 模式</p>

      <p class="text-weight-bold">v 1.0.0</p>
      <p>- 使用 quasar 重构系统</p>
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
