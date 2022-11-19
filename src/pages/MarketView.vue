<template>
  <div class="bg-grey-1">
  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <!-- 市场资金 -->
    <div class="col-12 col-md">
        <div class="text-h6 q-pa-sm">市场资金：</div>
        <v-chart class="chart" :option="lAmountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 预估数据在5分钟，15分钟更新两次之后每30分钟运算一次。
        </div>
        <div class="text-body2 q-pa-sm">
          {{DataMarket.mdata.Forecast.mins}}分钟: <br />
          预计今日沪市成交金额{{DataMarket.mdata.Forecast.SHVolumn}}亿，<br />
          昨日沪市成交金额{{DataMarket.mdata.yestoday.SHAmount}}亿。<br />
          <!-- <p>科创板成交金额{{DataMarket.mdata.yestoday.KCAmount}}亿。</p> -->
        </div>
    </div>
    <!-- 市场涨跌 -->
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">市场涨跌：</div>
        <v-chart class="chart" :option="lRateOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        上涨({{DataMarket.Rate.upcount}})，下跌({{DataMarket.Rate.downcount}})<br />
        {{DataMarket.Rate.upText}}<br />
        {{DataMarket.Rate.downText}} <br />
        </div>
      </div>
    </div>
    <!-- 市场资金 -->
    <div class="col-12 col-md">
        <div class="text-h6 q-pa-sm">市场温度：{{DataMarket.mdata.nows.tempera.avg}}℃</div>
        <v-chart class="chart" :option="rTemperaOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每5分钟更新。<br />
        - 资金量：最大为15,000亿, 每格3750亿元。<br />
        - 连板：最大阈值为56个，每格14支票。<br />
        - 高标涨幅：按±10比例等比分配，每格5%。<br />
        - 涨跌比：上涨票数/全市场票数。<br />
        - 平均涨幅：全市场平均涨幅，每格3%，最高涨幅±6%。<br />
        - 开板：开板比例（不包含 ST ），每格17%，最高68%。<br />
        </div>
    </div> 
  </div>

  <q-separator inset spaced/>
  
  <div class="flex-break"></div>
  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <!-- 市场资金 -->
    <div class="col-12 col-md">
      <div class="text-h6 q-pa-sm">上证指数：</div>
      <v-chart class="chart" :option="lTemperaOption" autoresize/>
      <div class="text-body2 q-pa-sm">
      - 涨跌比：0.5时上涨票是下跌票的两倍，-0.5时下跌票是上涨票的两倍。
      </div>
    </div> 
    <!-- 市场资金 -->
    <div class="col-12 col-md">
     <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">宽指指数：</div>
        <v-chart class="chart" :option="lMaeketAOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次
        </div>
      </div>
    </div> 
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">金融指数：</div>
        <v-chart class="chart" :option="lMaeketBOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次<br />
        - 由于数据服务器的问题，恒生指数数据滞后15分钟<br />
        - 恒生指数部分交易时间11:30~12:00内数据未显示。
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, RadarChart, } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  RadarChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent
])

export default defineComponent({
  name: 'ChartsMarketView',
  components: { VChart },

  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {}
      const res = await http.get('https://stock.anno189.com/h5/data/today.json', params)

      this.DataMarket=res.data.data

      this.lAmountOption.xAxis.data = this.DataMarket.Amount.categories
      this.lAmountOption.series[2].data = this.DataMarket.Amount.series[2].data
      this.lAmountOption.series[1].data = this.DataMarket.Amount.series[1].data
      this.lAmountOption.series[0].data = this.DataMarket.Amount.series[0].data

      this.rTemperaOption.series[0].data[0].value = this.DataMarket.mdata.nows.tempera.series[0].data
      this.rTemperaOption.series[0].data[1].value = this.DataMarket.mdata.nows.tempera.series[1].data

      
      this.lTemperaOption.xAxis.data = this.DataMarket.SH000001.categories
      this.lTemperaOption.series[0].data = this.DataMarket.SH000001.series[0].data
      //_self.lTemperaOption.series[0].markPoint.data = _self.DataMarket.SH000001.markpoint.data
      this.lTemperaOption.series[1].data = this.DataMarket.SH000001.series[1].data
      this.lTemperaOption.series[2].data = this.DataMarket.SH000001.series[2].data

      this.lRateOption.xAxis.data = this.DataMarket.Rate.categories
      this.lRateOption.series[0].data = this.DataMarket.Rate.series[0].data
      this.lRateOption.series[1].data = this.DataMarket.Rate.count


      const res2 = await http.get('https://stock.anno189.com/h5/data/tick.json', params)
      
      
      this.lMaeketAOption.xAxis.data = res2.data.data.min.min1.categories
      this.lMaeketAOption.series[0].data = res2.data.data.marketA.series[0].data
      this.lMaeketAOption.series[1].data = res2.data.data.marketA.series[1].data
      this.lMaeketAOption.series[2].data = res2.data.data.marketA.series[2].data
      this.lMaeketAOption.series[3].data = res2.data.data.marketA.series[3].data
      this.lMaeketAOption.series[4].data = res2.data.data.marketA.series[4].data

      this.lMaeketBOption.xAxis.data = res2.data.data.min.min1.categories
      this.lMaeketBOption.series[0].data = res2.data.data.marketB.series[0].data
      this.lMaeketBOption.series[1].data = res2.data.data.marketB.series[1].data
      this.lMaeketBOption.series[2].data = res2.data.data.marketB.series[2].data
      this.lMaeketBOption.series[3].data = res2.data.data.marketB.series[3].data
      this.lMaeketBOption.series[4].data = res2.data.data.marketB.series[4].data
      this.lMaeketBOption.series[5].data = res2.data.data.marketB.series[5].data

      

    }
  },
  
  setup () {
    const DataMarket = ref({});
    
    const lAmountOption = ref({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['近10日量','5日均量','今日预估'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: [],
        boundaryGap:false,
      },
      yAxis: {
        type: 'value',
        min:5000,
      },
      series: [
        {
          name:'近10日量',
          type:'bar',
          data:[],
          itemStyle:{
            color: 'rgba(100, 100, 100, 0.5)',
          }
        },
        {
          name:'5日均量',
          type:'line',
          data:[]
        },
        {
          name:'今日预估',
          type:'line',
          data:[]
        }
      ]
    });
    const rTemperaOption = ref({
      legend: {
        right:10,
      },
      radar: {
        splitNumber:4,
        radius: 80,
        indicator: [
           {name: '资金量', max: 100},
           {name: '炸板', max: 100},
           {name: '涨跌比', max: 100},
           {name: '平均涨幅', max: 100},
           {name: '连板', max: 100},
           {name: '高标涨幅', max: 100}
        ]
      },
      series: [{
        type: 'radar',
        data: [
          {
            value : [1,1,1,1,1,1],
            name : '昨日'
          },
          {
            value : [2,2,2,2,2,2],
            name : '今日'
          }
        ]
      }]
    });
    const lTemperaOption = ref({
      tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['上证指数', '涨跌比', '买卖单比'],
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        data: [],
                        Interval: 19,
                        axisLine:{onZero:false},
                        axisLabel:{interval:19},
                    },
                    yAxis: {
                        type: 'value',
            
              },
                    series: [
                        {
                            name:'上证指数',
                            type:'line',
                            symbol:'none',
                            data:[],
              markPoint: {symbolOffset:[0, '-10%'],
                    symbolSize:20,
                    data: []
              }
                        },
            {
              name:'涨跌比',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'买卖单比',
              type:'line',
              symbol:'none',
              data:[]
            }
                    ]
    });
    const lRateOption = ref({
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: [],
        boundaryGap:false,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name:'市场涨跌',
          type:'bar',
          data:[],
          label: {
            show: true,
            position: 'top',
            color: 'rgba(0,0,0,0.5)',
          },
        },
        {
          name:'上涨数量',
          type:'line',
          data:[]
        },
      ]
    });
    
    const lMaeketAOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['上证指数','创业指数','上证50','次新股','平均涨幅'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: [],
            axisLine:{onZero:false},
            axisLabel:{interval:14},
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name:'上证指数',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'创业指数',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'上证50',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'次新股',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'平均涨幅',
              type:'line',
              symbol:'none',
              data:[]
            }
          ]
    });
    const lMaeketBOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['上证指数','券商','银行','黄金','股指期货','香港恒生'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: [],
            axisLine:{onZero:false},
            axisLabel:{interval:14},
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name:'上证指数',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'券商',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'银行',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'黄金',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'股指期货',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'香港恒生',
              type:'line',
              symbol:'none',
              data:[]
            }
          ]
    });
    
    return { lAmountOption, rTemperaOption, lTemperaOption, lRateOption, lMaeketAOption, lMaeketBOption, DataMarket };

  }
  

});

</script>

<style scoped>
.chart {
  height: 280px;
}
</style>
