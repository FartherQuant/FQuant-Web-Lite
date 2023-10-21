<template>
<div class="bg-grey-1">
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="left"
      narrow-indicator
    >
      <q-tab name="today" label="今日" />
      <q-tab name="night" label="隔夜" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="today">
        <div class="row bg-grey-1 q-pa-sm">
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=1.000001"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0.399001"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=0.399006"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.HSI"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://delaywebquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=220.IFM0"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=104.CN00Y"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.XIN9"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=133.USDCNH"/>
          </div>
          
        </div>
      </q-tab-panel>

      <q-tab-panel name="night">
        <div class="row bg-grey-1 q-pa-sm">
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.UDI"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.DJIA"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=100.NDX"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=103.YM00Y"/>
          </div>
          
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=102.CL00Y"/>
          </div>
          <div class="col-3 col-md">
            <q-img src="https://webquotepic.eastmoney.com/GetPic.aspx?imageType=WAPINDEX2&nid=101.GC00Y"/>
          </div>
        </div>
      </q-tab-panel>

    </q-tab-panels>
    </q-card>
  
  <q-separator inset spaced/>

  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <div class="col-12 col-md">
        <div class="text-h6 q-pa-sm">交易时间：{{this.DataMarket.mdata.nows.mins}}分钟，{{DataMarket.mdata.nows.Amount.AmountText}}</div>
        
        <v-chart class="chart" :option="AmountOption" autoresize ref="AmountChart"/>
        
        <div class="text-body2 q-pa-sm">
          上证指数：{{DataMarket.mdata.nows.SH000001.close}}，{{DataMarket.mdata.nows.SH000001.rate}}%，{{DataMarket.mdata.nows.SH000001.amount}}亿<br />
          <!-- 其中：上证{{DataMarket.mdata.nows.Amount.SHAmount}}亿，科创板：{{DataMarket.mdata.nows.Amount.KCAmount}}亿<br />-->
          深证成指：{{DataMarket.mdata.nows.SZ399001.close}}，{{DataMarket.mdata.nows.SZ399001.rate}}%，{{DataMarket.mdata.nows.SZ399001.amount}}亿<br />
          创业板指：{{DataMarket.mdata.nows.SZ399006.close}}，{{DataMarket.mdata.nows.SZ399006.rate}}%，{{DataMarket.mdata.nows.SZ399006.amount}}亿<br />
          封板资金：{{DataMarket.mdata.nows.Amount.HIGHAmount}}亿<br />
          <p class="q-mt-sm">{{DataMarket.mdata.nows.position}}</p>
        </div>
    </div>

    <!-- 市场资金 -->
    <div class="col-12 col-md">

        <div class="text-h6 q-pa-sm">市场资金：</div>
        <v-chart class="chart" :option="lAmountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 预估数据在1分钟，5分钟更新两次之后每15分钟运算一次。
        </div>
        <div class="text-body2 q-pa-sm">
          {{DataMarket.mdata.Forecast.mins}}分钟: <br />
          预计今日沪市成交金额{{DataMarket.mdata.Forecast.SHVolumn}}亿，<br />
          昨日沪市成交金额{{DataMarket.mdata.yestoday.SHAmount}}亿。<br />
          <!-- <p>科创板成交金额{{DataMarket.mdata.yestoday.KCAmount}}亿。</p> -->
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
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">市场温度：</div>
        <v-chart class="chart" :option="lTempera5minOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每5分钟更新一次，是今日温度的详细图表
        </div>
      </div>
    </div>
  </div>
  <q-separator inset/>
  <div class="flex-break"></div>
  <div class="row bg-grey-1" v-if="DataMarket.mdata">
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
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">情绪指数：</div>
        <v-chart class="chart" :option="lMaeketCOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        - 判断当前市场的大小盘风格
        </div>
      </div>
    </div>
  </div>

  <q-separator inset spaced />
  
  <div class="flex-break"></div>
  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">宽指成交量：</div>
        <v-chart class="chart" :option="lIndexAmountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        - 判断当前市场的大小盘风格
        </div>
      </div>
    </div>
    <!-- 市场资金 -->
    <div class="col-12 col-md">
     <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">量比(持续放量)</div>
        <v-chart class="chart" :option="lLBAmountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        - 个股连续4分钟量比增加
        </div>
      </div>
    </div> 

    <!-- 高标涨跌 -->
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">日内高标</div>
        <v-chart class="chart" :option="lRateCountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        </div>
      </div>
    </div>
    
  </div>
  <q-separator inset spaced />

  <div class="flex-break"></div>

  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <!-- 北向数据 -->
    <div class="col-12 col-md">
      <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">北向数据</div>
        <v-chart class="chart" :option="lNorthAmountOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        - 数据源：东方财富
        </div>
      </div>
    </div>
    <!-- 市场资金 -->
    <div class="col-12 col-md  q-pr-sm">
      <div class="divide-y divide-dashed" v-if="loading" >
        <div class="text-h6 q-pa-sm">成交金额TOP10风格</div>
        <q-table 
            class="my-sticky-column-table"
            dense
            :rows="rowsTagList"
            :columns="columnsTagList"
            :rows-per-page-options="[10000]"
            row-key="name"
          >
            <template v-slot:body-cell="props">
              <q-td
                :props="props"
                :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
              >
                {{props.value}}
              </q-td>
            </template>
          </q-table>
      </div>
    </div>
    
    <div class="col-12 col-md q-pr-sm">
      <div class="divide-y divide-dashed w-full q-p-sm" v-if="loading" >
        <div class="text-h6 q-pa-sm">成交金额TOP10列表</div>
        <q-table
          class="my-sticky-column-table"
          dense
          :rows="rowsDataList"
          :columns="columnsDataList"
          :rows-per-page-options="[10000]"
          row-key="name"
        >
          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="(props.row.rate >0 & props.row.rate < 5)?'bg-red-1':(props.row.rate >=5 & props.row.rate < 9)?'bg-red-2':(props.row.rate >=9)?'bg-red-3':(props.row.rate < 0 & props.row.rate > -7 )?'bg-green-1':(props.row.rate <= -7)?'bg-green-3':''"
            >
              {{props.value}}
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </div>
  <q-separator inset spaced />
  
  <div class="flex-break"></div>
  <div class="row bg-grey-1" v-if="DataMarket.mdata">
    <!-- 市场资金 -->
    <div class="col-12 col-md">
     <div class="divide-y divide-dashed w-full">
        <div class="text-h6 q-pa-sm">行业放量</div>
        <v-chart class="chartbig" :option="lLBInsOption" autoresize/>
        <div class="text-body2 q-pa-sm">
        - 数据每分钟更新一次 <br />
        - 每分钟放量个股行业统计
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
import { BarChart, LineChart, RadarChart, ScatterChart} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent, 
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  ScatterChart,
  RadarChart,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent
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

      this.AmountOption.series[0].data = this.DataMarket.mdata.today.Amount
      this.AmountOption.series[1].data = this.DataMarket.mdata.yestoday.Amount
      this.AmountOption.series[2].data = this.DataMarket.mdata.today.YGAmount

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
      
      this.lTempera5minOption.xAxis.data = res2.data.data.min.min5.categories
      this.lTempera5minOption.series[0].data = res2.data.data.tempera.series[0].data
      this.lTempera5minOption.series[1].data = res2.data.data.tempera.series[1].data
      this.lTempera5minOption.series[2].data = res2.data.data.tempera.series[2].data
      this.lTempera5minOption.series[3].data = res2.data.data.tempera.series[3].data
      this.lTempera5minOption.series[4].data = res2.data.data.tempera.series[4].data
      this.lTempera5minOption.series[5].data = res2.data.data.tempera.series[5].data

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

      this.lMaeketCOption.xAxis.data = res2.data.data.min.min1.categories
      this.lMaeketCOption.series[0].data = res2.data.data.marketC.series[0].data
      this.lMaeketCOption.series[1].data = res2.data.data.marketC.series[1].data
      this.lMaeketCOption.series[2].data = res2.data.data.marketC.series[2].data
      this.lMaeketCOption.series[3].data = res2.data.data.marketC.series[3].data
      
      this.lIndexAmountOption.xAxis.data = res2.data.data.min.min1.categories
      this.lIndexAmountOption.series[0].data = this.DataMarket.Amount.I000300
      this.lIndexAmountOption.series[1].data = this.DataMarket.Amount.I000905

      this.lLBAmountOption.xAxis.data = res2.data.data.min.min1.categories
      this.lLBAmountOption.series[0].data = this.DataMarket.LB.upcount
      this.lLBAmountOption.series[1].data = this.DataMarket.LB.downcount

      this.lRateCountOption.xAxis.data = res2.data.data.min.min1.categories
      this.lRateCountOption.series[0].data = res2.data.data.rate.up10
      this.lRateCountOption.series[1].data = res2.data.data.rate.up05
      this.lRateCountOption.series[2].data = res2.data.data.rate.do05
      this.lRateCountOption.series[3].data = res2.data.data.rate.do10
      //console.log(res2.data.data.rate.up10)

      this.lLBInsOption.legend.data = this.DataMarket.LBins.ins
      this.lLBInsOption.series = this.DataMarket.LBins.series
      this.lLBInsOption.series.push({'name':'上证指数', 'data': res2.data.data.marketA.series[0].data, 'type': 'line', yAxisIndex: 1})

      const res4 = await http.get('https://stock.anno189.com/h5/data/RealtimeAmountTop.json', {})
      this.rowsTagList = res4.data.data.taglist
      this.rowsDataList = res4.data.data.datalist

      //'https://push2.eastmoney.com/api/qt/kamt.rtmin/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56'
      const res5 = await http.get('https://push2.eastmoney.com/api/qt/kamt.rtmin/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56', {})

      var hgt = []
      var sgt = []
      var gt = []
      for (const element of res5.data.data.s2n) {
          const myArray = element.split(',')
          hgt.push((myArray[1] / 10000).toFixed(2))
          sgt.push((myArray[3] / 10000).toFixed(2))
          gt.push((myArray[5] / 10000).toFixed(2))
        }

      this.lNorthAmountOption.xAxis.data = res2.data.data.min.min1.categories
      this.lNorthAmountOption.series[0].data = hgt
      this.lNorthAmountOption.series[1].data = sgt
      this.lNorthAmountOption.series[2].data = gt

      //'https://push2.eastmoney.com/api/qt/stock/trends2/get?secid=133.USDCNH&fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f17&fields2=f51,f53,f54,f55,f56,f57,f58'
      //const res6 = await http.get('https://push2.eastmoney.com/api/qt/stock/trends2/get?secid=133.USDCNH&fields1=f1&fields2=f51,f54', {})

      //var usdchn = []
      //var uctime = []
      //for (const element of res6.data.data.trends) {
      //    const myArray = element.split(',')
      //    uctime.push(myArray[0].substring(10, 20))
      //    usdchn.push(myArray[1])
      //  }

      //this.lUsdChnOption.xAxis.data = uctime
      //this.lUsdChnOption.yAxis.min = Math.min(...usdchn) - 0.0001
      //this.lUsdChnOption.series[0].data = usdchn

      //'https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=133.USDCNH&klt=101&fqt=1&lmt=66&end=20500000&iscca=1&fields1=f1,f2,f3,f4,f5,f6,f7,f8&fields2=f51,f52,f53,f54,f55'
      
      //const res7 = await http.get('https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=133.USDCNH&klt=101&fqt=1&lmt=66&end=20500000&iscca=1&fields1=f1&fields2=f51,f52,f53,f54,f55', {})

      //console.log(res7.data.data.klines)

      //var ucdayhigh = []
      //var ucday = []
      //for (const element of res7.data.data.klines) {
      //    const myArray = element.split(',')
      //    ucday.push(myArray[0])
      //    ucdayhigh.push(myArray[3])
      //  }

      //this.lUsdChnDayOption.xAxis.data = ucday
      //this.lUsdChnDayOption.yAxis.min = (Math.min(...ucdayhigh) - 0.01).toFixed(4)
      //this.lUsdChnDayOption.series[0].data = ucdayhigh
      
      this.loading = true
        
    }
  },
  
  setup () {
    const DataMarket = ref({});
    const AmountOption = ref({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['今日成交', '今日预估', '昨日成交']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['转债', '科创', '深成', '创业', '上证']
      },
      series: [
        {
          name: '今日成交',
          type: 'bar',
          stack: 'one',
          data: [1,2,3]
        },
        {
          name: '昨日成交',
          type: 'bar',
          stack: 'two',
          data: []
        },
        {
          name: '今日预估',
          type: 'bar',
          stack: 'one',
          data: []
        },
      ]
    });
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
    const lTempera5minOption = ref({
      tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['资金量','开板率','涨跌比','平均涨幅','连板','高标涨幅'],
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
      axisLabel:{interval:2},
        },
        yAxis: {
            type: 'value',
            max:100,
            
        },
        series: [
            {
                name:'资金量',
                type:'line',
                symbol:'none',
                data:[]
            },
            {
                name:'开板率',
                type:'line',
                symbol:'none',
                data:[]
            },
            {
                name:'涨跌比',
                type:'line',
                symbol:'none',
                data:[]
            },
            {
                name:'平均涨幅',
                type:'line',
                symbol:'none',
                data:[]
            },
            {
                name:'连板',
                type:'line',
                symbol:'none',
                data:[]
            },
            {
                name:'高标涨幅',
                type:'line',
                symbol:'none',
                data:[]
            }
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
    const lRateCountOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['10%','5%','-5%','-10%'],
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
              name:'10%',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'5%',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'-5%',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'-10%',
              type:'line',
              symbol:'none',
              data:[]
            }
          ]
    });

    const lMaeketCOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['上证指数','沪深300','微盘股','近期强势'],
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
              name:'沪深300',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'微盘股',
              type:'line',
              symbol:'none',
              data:[]
            },
            {
              name:'近期强势',
              type:'line',
              symbol:'none',
              data:[]
            }
          ]
    });
    const lIndexAmountOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['沪深300','微小盘'],
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
          yAxis: [{
              type: 'value',
              max:100,
            },
            {
              type: 'value',
              max:100,
              inverse: true,
              show: false,
            },
          ],
          series: [
            {
              name:'沪深300',
              type:'line',
              symbol:'none',
              data:[],
              areaStyle: {
                opacity: 0.3
              },
              markLine:{
                symbol: 'none',
                data:[{
                  yAxis: 30,
                },
                ]
              },
            },
            {
              name:'微小盘',
              type:'line',
              symbol:'none',
              data:[],
              areaStyle: {
                opacity: 0.3
              },
              yAxisIndex: 1,
              markLine:{
                symbol: 'none',
                data:[{
                  yAxis: 52,
                },
                ]
              },

            }
          ]
    });
    const lLBAmountOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['上涨','下跌'],
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
              name:'上涨',
              type:'line',
              symbol:'none',
              data:[],
              
            },
            {
              name:'下跌',
              type:'line',
              symbol:'none',
              data:[],
    
            }
          ]
    });

    const lNorthAmountOption = ref({
      tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['沪股通','深股通', '北向资金'],
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
              name:'沪股通',
              type:'line',
              symbol:'none',
              data:[],
            },
            {
              name:'深股通',
              type:'line',
              symbol:'none',
              data:[],
            },
            {
              name:'北向资金',
              type:'line',
              symbol:'none',
              data:[],
            }
          ]
    });

    const lLBInsOption = ref({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:[],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: ['09:30','09:31','09:32', '09:33', '09:34', '09:35', '09:36', '09:37', '09:38', '09:39', '09:40', '09:41', '09:42', '09:43', '09:44', '09:45', '09:46', '09:47', '09:48', '09:49', '09:50', '09:51', '09:52', '09:53', '09:54', '09:55', '09:56', '09:57', '09:58', '09:59', '10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06', '10:07', '10:08', '10:09', '10:10', '10:11', '10:12', '10:13', '10:14', '10:15', '10:16', '10:17', '10:18', '10:19', '10:20', '10:21', '10:22', '10:23', '10:24', '10:25', '10:26', '10:27', '10:28', '10:29', '10:30','10:31', '10:32', '10:33', '10:34', '10:35', '10:36', '10:37', '10:38', '10:39', '10:40', '10:41', '10:42', '10:43', '10:44', '10:45', '10:46', '10:47', '10:48', '10:49', '10:50', '10:51', '10:52', '10:53', '10:54', '10:55', '10:56', '10:57', '10:58', '10:59', '11:00', '11:01', '11:02', '11:03', '11:04', '11:05', '11:06', '11:07', '11:08', '11:09', '11:10', '11:11', '11:12', '11:13', '11:14', '11:15', '11:16', '11:17', '11:18', '11:19', '11:20', '11:21', '11:22', '11:23', '11:24', '11:25', '11:26', '11:27', '11:28', '11:29', '11:30', '13:01', '13:02', '13:03', '13:04', '13:05', '13:06', '13:07', '13:08', '13:09', '13:10', '13:11', '13:12', '13:13', '13:14', '13:15', '13:16', '13:17', '13:18', '13:19', '13:20', '13:21', '13:22', '13:23', '13:24', '13:25', '13:26', '13:27', '13:28', '13:29', '13:30', '13:31', '13:32', '13:33', '13:34', '13:35', '13:36', '13:37', '13:38', '13:39', '13:40', '13:41', '13:42', '13:43', '13:44', '13:45', '13:46', '13:47', '13:48', '13:49', '13:50', '13:51', '13:52', '13:53', '13:54', '13:55', '13:56', '13:57', '13:58', '13:59', '14:00', '14:01', '14:02', '14:03', '14:04', '14:05', '14:06', '14:07', '14:08', '14:09', '14:10', '14:11', '14:12', '14:13', '14:14', '14:15', '14:16', '14:17', '14:18', '14:19', '14:20', '14:21', '14:22', '14:23', '14:24', '14:25', '14:26', '14:27', '14:28', '14:29', '14:30',' 14:31', '14:32', '14:33', '14:34', '14:35', '14:36', '14:37', '14:38', '14:39', '14:40', '14:41', '14:42', '14:43', '14:44', '14:45', '14:46', '14:47', '14:48', '14:49', '14:50', '14:51', '14:52', '14:53', '14:54', '14:55', '14:56', '14:57', '14:58', '14:59', '15:00'],
            axisLine:{onZero:false},
            axisLabel:{interval:14},
          },
          yAxis: [{
              type: 'value',
            },
            {
              type: 'value',
            },
            ],
          series: []
    });


    const rowsTagList = ref({});
    const rowsDataList = ref({});

    const columnsTagList = ref([
      { name: '风格', align: 'center', label: '风格', field: 'type' },
      { name: '名称', align: 'center', label: '名称', field: 'name' },
      { name: '金额', align: 'center', label: '金额(亿', field: 'amount' },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate' },
      { name: '数量', align: 'center', label: '数量', field: 'count' },
    ]);

    const columnsDataList = ref([
      { name: '代码', align: 'center', label: '代码', field: 'code' },
      { name: '名称', align: 'center', label: '名称', field: 'name' },
      { name: '行业', align: 'center', label: '行业', field: 'industry' },
      { name: '金额', align: 'center', label: '金额(亿)', field: 'amount' },
      { name: '涨跌', align: 'center', label: '涨跌', field: 'rate' },
      { name: '标签', align: 'center', label: '标签', field: 'tag' },
    ]);


    return { loading:ref(), AmountOption, lAmountOption, rTemperaOption, lTemperaOption, lRateOption, lTempera5minOption, lMaeketAOption, lRateCountOption, lMaeketBOption, lMaeketCOption, lIndexAmountOption, lLBAmountOption, lLBInsOption, lNorthAmountOption, DataMarket, rowsTagList, columnsTagList, rowsDataList, columnsDataList, tab: ref('today') };

  }
  

});

</script>

<style scoped>
.chart {
  height: 280px;
}
.chartbig {
  height: 480px;
}
</style>
