<template>
<div class="col-12 col-md">
  <div class="text-h6 q-pa-sm">宽指风格</div>
  <div class="q-pa-md row q-gutter-md">
    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s1 > 0">
        <div class="text-h6">大盘：{{marketstyle.s1}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">大盘：{{marketstyle.s1}}</div>
      </q-card-section>
     
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i880821 > 0.7">大盘股：{{marketstyle.i880821}}</div>
        <div v-if="marketstyle.i880007 > 0.7">市场活筹：{{marketstyle.i880007}}</div>
        <div v-if="marketstyle.i880826 > 0.7">低市盈率：{{marketstyle.i880826}}</div>
        <div v-if="marketstyle.i880829 > 0.7">低市净率：{{marketstyle.i880829}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i880821 < 0.7) & (marketstyle.i880821 > -0.7)">大盘股：{{marketstyle.i880821}}</div>
        <div v-if="(marketstyle.i880821 < 0.7) & (marketstyle.i880007 > -0.7)">市场活筹：{{marketstyle.i880007}}</div>
        <div v-if="(marketstyle.i880821 < 0.7) & (marketstyle.i880826 > -0.7)">低市盈率：{{marketstyle.i880826}}</div>
        <div v-if="(marketstyle.i880821 < 0.7) & (marketstyle.i880829 > -0.7)">低市净率：{{marketstyle.i880829}}</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i880821 < -0.7">大盘股：{{marketstyle.i880821}}</div>
        <div v-if="marketstyle.i880007 < -0.7">市场活筹：{{marketstyle.i880007}}</div>
        <div v-if="marketstyle.i880826 < -0.7">低市盈率：{{marketstyle.i880826}}</div>
        <div v-if="marketstyle.i880829 < -0.7">低市净率：{{marketstyle.i880829}}</div>
      </q-card-section>
    </q-card>
    <!--    大盘       -->
    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s2 > 0">
        <div class="text-h6">小盘：{{marketstyle.s2}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">小盘：{{marketstyle.s2}}</div>
      </q-card-section>
      <q-separator />

      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i880823 > 0.7">微盘股：{{marketstyle.i880823}}</div>
        <div v-if="marketstyle.i880008 > 0.7">全A等权：{{marketstyle.i880008}}</div>
        <div v-if="marketstyle.i880824 > 0.7">高市盈率：{{marketstyle.i880824}}</div>
        <div v-if="marketstyle.i880827 > 0.7">高市净率：{{marketstyle.i880827}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i880823 < 0.7) & (marketstyle.i880823 > -0.7)">微盘股：{{marketstyle.i880823}}</div>
        <div v-if="(marketstyle.i880008 < 0.7) & (marketstyle.i880008 > -0.7)">全A等权：{{marketstyle.i880008}}</div>
        <div v-if="(marketstyle.i880824 < 0.7) & (marketstyle.i880824 > -0.7)">高市盈率：{{marketstyle.i880824}}</div>
        <div v-if="(marketstyle.i880827 < 0.7) & (marketstyle.i880827 > -0.7)">高市净率：{{marketstyle.i880827}}</div> </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i880823 < -0.7">微盘股：{{marketstyle.i880823}}</div>
        <div v-if="marketstyle.i880008 < -0.7">全A等权{{marketstyle.i880008}}</div>
        <div v-if="marketstyle.i880824 < -0.7">高市盈率：{{marketstyle.i880824}}</div>
        <div v-if="marketstyle.i880827 < -0.7">高市净率：{{marketstyle.i880827}}</div>
      </q-card-section>
    </q-card>
    <!--    小盘       -->

    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s6 > 0">
        <div class="text-h6">沪市：{{marketstyle.s6}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">沪市：{{marketstyle.s6}}</div>
      </q-card-section>
     
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i000001 > 0.7">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="marketstyle.i000688 > 0.7">科创50：{{marketstyle.i000688}}</div>
        <div v-if="marketstyle.i000010 > 0.7">上证180：{{marketstyle.i000010}}</div>
        <div v-if="marketstyle.i000009 > 0.7">上证380：{{marketstyle.i000009}}</div>
        <div v-if="marketstyle.i000133 > 0.7">上证150：{{marketstyle.i000133}}</div>
        <div v-if="marketstyle.i000015 > 0.7">红利指数：{{marketstyle.i000015}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i000001 < 0.7) & (marketstyle.i000001 > -0.7)">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="(marketstyle.i000688 < 0.7) & (marketstyle.i000688 > -0.7)">科创50：{{marketstyle.i000688}}</div>
        <div v-if="(marketstyle.i000010 < 0.7) & (marketstyle.i000010 > -0.7)">上证180：{{marketstyle.i000010}}</div>
        <div v-if="(marketstyle.i000009 < 0.7) & (marketstyle.i000009 > -0.7)">上证380：{{marketstyle.i000009}}</div>
        <div v-if="(marketstyle.i000133 < 0.7) & (marketstyle.i000133 > -0.7)">上证150：{{marketstyle.i000133}}</div>
        <div v-if="(marketstyle.i000015 < 0.7) & (marketstyle.i000015 > -0.7)">红利指数：{{marketstyle.i000015}}</div>
      
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i000001 < -0.7">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="marketstyle.i000688 < -0.7">科创50：{{marketstyle.i000688}}</div>
        <div v-if="marketstyle.i000010 < -0.7">上证180：{{marketstyle.i000010}}</div>
        <div v-if="marketstyle.i000009 < -0.7">上证380：{{marketstyle.i000009}}</div>
        <div v-if="marketstyle.i000133 < -0.7">上证150：{{marketstyle.i000133}}</div>
        <div v-if="marketstyle.i000015 < -0.7">红利指数：{{marketstyle.i000015}}</div>
      </q-card-section>
    </q-card>
    <!--    沪市       -->

    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s7 > 0">
        <div class="text-h6">深市：{{marketstyle.s7}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">深市：{{marketstyle.s7}}</div>
      </q-card-section>
     
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i399001 > 0.7">深证成指：{{marketstyle.i399001}}</div>
        <div v-if="marketstyle.i399006 > 0.7">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="marketstyle.i399673 > 0.7">创业50：{{marketstyle.i399673}}</div>
        <div v-if="marketstyle.i399330 > 0.7">深证100：{{marketstyle.i399330}}</div>
        <div v-if="marketstyle.i399009 > 0.7">深证200：{{marketstyle.i399009}}</div>
        <div v-if="marketstyle.i399010 > 0.7">深证700：{{marketstyle.i399010}}</div>
        <div v-if="marketstyle.i399324 > 0.7">深证红利：{{marketstyle.i399324}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i399001 < 0.7) & (marketstyle.i399001 > -0.7)">深证成指：{{marketstyle.i399001}}</div>
        <div v-if="(marketstyle.i399006 < 0.7) & (marketstyle.i399006 > -0.7)">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="(marketstyle.i399673 < 0.7) & (marketstyle.i399673 > -0.7)">创业50：{{marketstyle.i399673}}</div>
        <div v-if="(marketstyle.i399330 < 0.7) & (marketstyle.i399330 > -0.7)">深证100：{{marketstyle.i399330}}</div>
        <div v-if="(marketstyle.i399009 < 0.7) & (marketstyle.i399009 > -0.7)">深证200：{{marketstyle.i399009}}</div>
        <div v-if="(marketstyle.i399010 < 0.7) & (marketstyle.i399010 > -0.7)">深证700：{{marketstyle.i399010}}</div>
        <div v-if="(marketstyle.i399324 < 0.7) & (marketstyle.i399324 > -0.7)">深证红利：{{marketstyle.i399324}}</div>
      
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i399001 < -0.7">深证成指：{{marketstyle.i399001}}</div>
        <div v-if="marketstyle.i399006 < -0.7">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="marketstyle.i399673 < -0.7">创业50：{{marketstyle.i399673}}</div>
        <div v-if="marketstyle.i399330 < -0.7">深证100：{{marketstyle.i399330}}</div>
        <div v-if="marketstyle.i399009 < -0.7">深证200：{{marketstyle.i399009}}</div>
        <div v-if="marketstyle.i399010 < -0.7">深证700：{{marketstyle.i399010}}</div>
        <div v-if="marketstyle.i399324 < -0.7">深证红利：{{marketstyle.i399324}}</div>
      </q-card-section>
    </q-card>
    <!--    深市       -->
    
    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s8 > 0">
        <div class="text-h6">宽指：{{marketstyle.s8}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">宽指：{{marketstyle.s8}}</div>
      </q-card-section>
     
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i000001 > 0.7">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="marketstyle.i399001 > 0.7">深证成指：{{marketstyle.i399001}}</div>
        <div v-if="marketstyle.i399006 > 0.7">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="marketstyle.i000688 > 0.7">科创50：{{marketstyle.i000688}}</div>
        <div v-if="marketstyle.i399673 > 0.7">创业50：{{marketstyle.i399673}}</div>
        <div v-if="marketstyle.i000016 > 0.7">上证50：{{marketstyle.i000016}}</div>
        <div v-if="marketstyle.i000903 > 0.7">中证100：{{marketstyle.i000903}}</div>
        <div v-if="marketstyle.i000300 > 0.7">沪深300：{{marketstyle.i000300}}</div>
        <div v-if="marketstyle.i000905 > 0.7">中证500：{{marketstyle.i000905}}</div>
        <div v-if="marketstyle.i000852 > 0.7">中证1000：{{marketstyle.i000852}}</div>
        <div v-if="marketstyle.i399303 > 0.7">国证2000：{{marketstyle.i399303}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i000001 < 0.7) & (marketstyle.i000001 > -0.7)">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="(marketstyle.i399001 < 0.7) & (marketstyle.i399001 > -0.7)">深证成指：{{marketstyle.i399001}}</div>
        <div v-if="(marketstyle.i399006 < 0.7) & (marketstyle.i399006 > -0.7)">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="(marketstyle.i000688 < 0.7) & (marketstyle.i000688 > -0.7)">科创50：{{marketstyle.i000688}}</div>
        <div v-if="(marketstyle.i399673 < 0.7) & (marketstyle.i399673 > -0.7)">创业50：{{marketstyle.i399673}}</div>
        <div v-if="(marketstyle.i000016 < 0.7) & (marketstyle.i000016 > -0.7)">上证50：{{marketstyle.i000016}}</div>
        <div v-if="(marketstyle.i000903 < 0.7) & (marketstyle.i000903 > -0.7)">中证100：{{marketstyle.i000903}}</div>
        <div v-if="(marketstyle.i000300 < 0.7) & (marketstyle.i000300 > -0.7)">沪深300：{{marketstyle.i000300}}</div>
        <div v-if="(marketstyle.i000905 < 0.7) & (marketstyle.i000905 > -0.7)">中证500：{{marketstyle.i000905}}</div>
        <div v-if="(marketstyle.i000852 < 0.7) & (marketstyle.i000852 > -0.7)">中证1000：{{marketstyle.i000852}}</div>
        <div v-if="(marketstyle.i399303 < 0.7) & (marketstyle.i399303 > -0.7)">国证2000：{{marketstyle.i399303}}</div>
      
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i000001 < -0.7">上证指数：{{marketstyle.i000001}}</div>
        <div v-if="marketstyle.i399001 < -0.7">深证成指：{{marketstyle.i000688}}</div>
        <div v-if="marketstyle.i399006 < -0.7">创业板指：{{marketstyle.i399006}}</div>
        <div v-if="marketstyle.i000688 < -0.7">科创50：{{marketstyle.i000688}}</div>
        <div v-if="marketstyle.i399673 < -0.7">创业50：{{marketstyle.i399673}}</div>
        <div v-if="marketstyle.i000016 < -0.7">上证50：{{marketstyle.i000016}}</div>
        <div v-if="marketstyle.i000903 < -0.7">中证100：{{marketstyle.i000903}}</div>
        <div v-if="marketstyle.i000300 < -0.7">沪深300：{{marketstyle.i000300}}</div>
        <div v-if="marketstyle.i000905 < -0.7">中证500：{{marketstyle.i000905}}</div>
        <div v-if="marketstyle.i000852 < -0.7">中证1000：{{marketstyle.i000852}}</div>
        <div v-if="marketstyle.i399303 < -0.7">国证2000：{{marketstyle.i399303}}</div>
      </q-card-section>
    </q-card>
    <!--    宽指       -->


  </div>

  <q-separator inset spaced />
  <div class="text-h6 q-pa-sm">市场风格</div>
  <div class="q-pa-md row q-gutter-md">

    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s3 > 0">
        <div class="text-h6">其他：{{marketstyle.s3}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">其他：{{marketstyle.s3}}</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i880529 > 0.7">次新股：{{marketstyle.i880529}}</div>
        <div v-if="marketstyle.i880885 > 0.7">近端次新：{{marketstyle.i880885}}</div>
        <div v-if="marketstyle.i880868 > 0.7">高贝塔：{{marketstyle.i880868}}</div>
        <div v-if="marketstyle.i880853 > 0.7">中字头：{{marketstyle.i880853}}</div>
        <div v-if="marketstyle.i880879 > 0.7">低价股：{{marketstyle.i880879}}</div>
        </q-card-section>

      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i880529 < 0.7) & (marketstyle.i880529 > -0.7)">次新股：{{marketstyle.i880529}}</div>
        <div v-if="(marketstyle.i880885 < 0.7) & (marketstyle.i880885 > -0.7)">近端次新：{{marketstyle.i880885}}</div>
        <div v-if="(marketstyle.i880868 < 0.7) & (marketstyle.i880868 > -0.7)">高贝塔：{{marketstyle.i880868}}</div>
        <div v-if="(marketstyle.i880853 < 0.7) & (marketstyle.i880853 > -0.7)">中字头：{{marketstyle.i880853}}</div>
        <div v-if="(marketstyle.i880879 < 0.7) & (marketstyle.i880879 > -0.7)">低价股：{{marketstyle.i880879}}</div>
        </q-card-section>

      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i880529 < -0.7">次新股：{{marketstyle.i880529}}</div>
        <div v-if="marketstyle.i880885 < -0.7">近端次新：{{marketstyle.i880885}}</div>
        <div v-if="marketstyle.i880868 < -0.7">高贝塔：{{marketstyle.i880868}}</div>
        <div v-if="marketstyle.i880853 < -0.7">中字头：{{marketstyle.i880853}}</div>
        <div v-if="marketstyle.i880879 < -0.7">低价股：{{marketstyle.i880879}}</div>
        
      </q-card-section>
    </q-card>
    <!--    其他：       -->
    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s4 > 0">
        <div class="text-h6">活跃：{{marketstyle.s4}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">活跃：{{marketstyle.s4}}</div>
      </q-card-section>
      
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i880770 > 0.7">昨日上榜：{{marketstyle.i880770}}</div>
        <div v-if="marketstyle.i880785 > 0.7">最近多板：{{marketstyle.i880785}}</div>
        <div v-if="marketstyle.i880865 > 0.7">近期新高：{{marketstyle.i880865}}</div>
        <div v-if="marketstyle.i880880 > 0.7">近期强势：{{marketstyle.i880880}}</div>
      </q-card-section>

      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i880770 < 0.7) & (marketstyle.i880770 > -0.7)">昨日上榜：{{marketstyle.i880770}}</div>
        <div v-if="(marketstyle.i880785 < 0.7) & (marketstyle.i880785 > -0.7)">最近多板：{{marketstyle.i880785}}</div>
        <div v-if="(marketstyle.i880865 < 0.7) & (marketstyle.i880865 > -0.7)">近期新高：{{marketstyle.i880865}}</div>
        <div v-if="(marketstyle.i880880 < 0.7) & (marketstyle.i880880 > -0.7)">近期强势：{{marketstyle.i880880}}</div>
      </q-card-section>

      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i880770 < -0.7">昨日上榜：{{marketstyle.i880770}}</div>
        <div v-if="marketstyle.i880785 < -0.7">最近多板：{{marketstyle.i880785}}</div>
        <div v-if="marketstyle.i880865 < -0.7">近期新高：{{marketstyle.i880865}}</div>
        <div v-if="marketstyle.i880880 < -0.7">近期强势：{{marketstyle.i880880}}</div>
      </q-card-section>


    </q-card>
    <!--    活跃：       -->
    
    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s9 > 0">
        <div class="text-h6">价值：{{marketstyle.s9}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">价值：{{marketstyle.s9}}</div>
      </q-card-section>
     
      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i399372 > 0.7">大盘成长：{{marketstyle.i399372}}</div>
        <div v-if="marketstyle.i399373 > 0.7">大盘价值：{{marketstyle.i399373}}</div>
        <div v-if="marketstyle.i399374 > 0.7">中盘成长：{{marketstyle.i399374}}</div>
        <div v-if="marketstyle.i399375 > 0.7">中盘价值：{{marketstyle.i399375}}</div>
        <div v-if="marketstyle.i399376 > 0.7">小盘成长：{{marketstyle.i399376}}</div>
        <div v-if="marketstyle.i399377 > 0.7">小盘价值：{{marketstyle.i399377}}</div>
        <div v-if="marketstyle.i399370 > 0.7">国证成长：{{marketstyle.i399370}}</div>
        <div v-if="marketstyle.i399371 > 0.7">国证价值：{{marketstyle.i399371}}</div>
        <div v-if="marketstyle.i000015 > 0.7">红利指数：{{marketstyle.i000015}}</div>
        <div v-if="marketstyle.i399324 > 0.7">深证红利：{{marketstyle.i399324}}</div>
        <div v-if="marketstyle.i000922 > 0.7">中证红利：{{marketstyle.i000922}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i399372 < 0.7) & (marketstyle.i399372 > -0.7)">大盘成长：{{marketstyle.i399372}}</div>
        <div v-if="(marketstyle.i399373 < 0.7) & (marketstyle.i399373 > -0.7)">大盘价值：{{marketstyle.i399373}}</div>
        <div v-if="(marketstyle.i399374 < 0.7) & (marketstyle.i399374 > -0.7)">中盘成长：{{marketstyle.i399374}}</div>
        <div v-if="(marketstyle.i399375 < 0.7) & (marketstyle.i399375 > -0.7)">中盘价值：{{marketstyle.i399375}}</div>
        <div v-if="(marketstyle.i399376 < 0.7) & (marketstyle.i399376 > -0.7)">小盘成长：{{marketstyle.i399376}}</div>
        <div v-if="(marketstyle.i399377 < 0.7) & (marketstyle.i399377 > -0.7)">小盘价值：{{marketstyle.i399377}}</div>
        <div v-if="(marketstyle.i399370 < 0.7) & (marketstyle.i399370 > -0.7)">国证成长：{{marketstyle.i399370}}</div>
        <div v-if="(marketstyle.i399371 < 0.7) & (marketstyle.i399371 > -0.7)">国证价值：{{marketstyle.i399371}}</div>
        <div v-if="(marketstyle.i000015 < 0.7) & (marketstyle.i000015 > -0.7)">红利指数：{{marketstyle.i000015}}</div>
        <div v-if="(marketstyle.i399324 < 0.7) & (marketstyle.i399324 > -0.7)">深证红利：{{marketstyle.i399324}}</div>
        <div v-if="(marketstyle.i000922 < 0.7) & (marketstyle.i000922 > -0.7)">中证红利：{{marketstyle.i000922}}</div>
      
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i399372 < -0.7">大盘成长：{{marketstyle.i399372}}</div>
        <div v-if="marketstyle.i399373 < -0.7">大盘价值：{{marketstyle.i399373}}</div>
        <div v-if="marketstyle.i399374 < -0.7">中盘成长：{{marketstyle.i399374}}</div>
        <div v-if="marketstyle.i399375 < -0.7">中盘价值：{{marketstyle.i399375}}</div>
        <div v-if="marketstyle.i399376 < -0.7">小盘成长：{{marketstyle.i399376}}</div>
        <div v-if="marketstyle.i399377 < -0.7">小盘价值：{{marketstyle.i399377}}</div>
        <div v-if="marketstyle.i399370 < -0.7">国证成长：{{marketstyle.i399370}}</div>
        <div v-if="marketstyle.i399371 < -0.7">国证价值：{{marketstyle.i399371}}</div>
        <div v-if="marketstyle.i000015 < -0.7">红利指数：{{marketstyle.i000015}}</div>
        <div v-if="marketstyle.i399324 < -0.7">深证红利：{{marketstyle.i399324}}</div>
        <div v-if="marketstyle.i000922 < -0.7">中证红利：{{marketstyle.i000922}}</div>
      </q-card-section>
    </q-card>
    <!--    价值       -->

    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s10 > 0">
        <div class="text-h6">行业：{{marketstyle.s10}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">行业：{{marketstyle.s10}}</div>
      </q-card-section>

      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i000986 > 0.7">全指能源：{{marketstyle.i000986}}</div>
        <div v-if="marketstyle.i000987 > 0.7">全指材料：{{marketstyle.i000987}}</div>
        <div v-if="marketstyle.i000988 > 0.7">全指工业：{{marketstyle.i000988}}</div>
        <div v-if="marketstyle.i000989 > 0.7">全指可选：{{marketstyle.i000989}}</div>
        <div v-if="marketstyle.i000990 > 0.7">全指消费：{{marketstyle.i000990}}</div>
        <div v-if="marketstyle.i000991 > 0.7">全指医药：{{marketstyle.i000991}}</div>
        <div v-if="marketstyle.i000995 > 0.7">全指金融：{{marketstyle.i000995}}</div>
        <div v-if="marketstyle.i931775 > 0.7">全指信息：{{marketstyle.i931775}}</div>
        <div v-if="marketstyle.i000992 > 0.7">全指通信：{{marketstyle.i000992}}</div>
        <div v-if="marketstyle.i000993 > 0.7">全指公用：{{marketstyle.i000993}}</div>
        <div v-if="marketstyle.i000994 > 0.7">全指地产：{{marketstyle.i000994}}</div>
      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i000986 < 0.7) & (marketstyle.i000986 > -0.7)">全指能源：{{marketstyle.i000986}}</div>
        <div v-if="(marketstyle.i000987 < 0.7) & (marketstyle.i000987 > -0.7)">全指材料：{{marketstyle.i000987}}</div>
        <div v-if="(marketstyle.i000988 < 0.7) & (marketstyle.i000988 > -0.7)">全指工业：{{marketstyle.i000988}}</div>
        <div v-if="(marketstyle.i000989 < 0.7) & (marketstyle.i000989 > -0.7)">全指可选：{{marketstyle.i000989}}</div>
        <div v-if="(marketstyle.i000990 < 0.7) & (marketstyle.i000990 > -0.7)">全指消费：{{marketstyle.i000990}}</div>
        <div v-if="(marketstyle.i000991 < 0.7) & (marketstyle.i000991 > -0.7)">全指医药：{{marketstyle.i000991}}</div>
        <div v-if="(marketstyle.i000995 < 0.7) & (marketstyle.i000995 > -0.7)">全指金融：{{marketstyle.i000995}}</div>
        <div v-if="(marketstyle.i931775 < 0.7) & (marketstyle.i931775 > -0.7)">全指信息：{{marketstyle.i931775}}</div>
        <div v-if="(marketstyle.i000992 < 0.7) & (marketstyle.i000992 > -0.7)">全指通信：{{marketstyle.i000992}}</div>
        <div v-if="(marketstyle.i000993 < 0.7) & (marketstyle.i000993 > -0.7)">全指公用：{{marketstyle.i000993}}</div>
        <div v-if="(marketstyle.i000994 < 0.7) & (marketstyle.i000994 > -0.7)">全指地产：{{marketstyle.i000994}}</div>
      
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i000986 < -0.7">全指能源：{{marketstyle.i000986}}</div>
        <div v-if="marketstyle.i000987 < -0.7">全指材料：{{marketstyle.i000987}}</div>
        <div v-if="marketstyle.i000988 < -0.7">全指工业：{{marketstyle.i000988}}</div>
        <div v-if="marketstyle.i000989 < -0.7">全指可选：{{marketstyle.i000989}}</div>
        <div v-if="marketstyle.i000990 < -0.7">全指消费：{{marketstyle.i000990}}</div>
        <div v-if="marketstyle.i000991 < -0.7">全指医药：{{marketstyle.i000991}}</div>
        <div v-if="marketstyle.i000995 < -0.7">全指金融：{{marketstyle.i000995}}</div>
        <div v-if="marketstyle.i931775 < -0.7">全指信息：{{marketstyle.i931775}}</div>
        <div v-if="marketstyle.i000992 < -0.7">全指通信：{{marketstyle.i000992}}</div>
        <div v-if="marketstyle.i000993 < -0.7">全指公用：{{marketstyle.i000993}}</div>
        <div v-if="marketstyle.i000994 < -0.7">全指地产：{{marketstyle.i000994}}</div>
      </q-card-section>
    </q-card>
    <!--    价值       -->


    <q-card class="my-card bg-green-3 ">
      <q-card-section class="bg-red-4 text-white" v-if="marketstyle.s11 > 0">
        <div class="text-h6">产业链：{{marketstyle.s11}}</div>
      </q-card-section>
      <q-card-section class="bg-green-4 text-white" v-else>
        <div class="text-h6">产业：{{marketstyle.s11}}</div>
      </q-card-section>

      <q-separator />
      <q-card-section class="bg-red-3 text-sm">
        <div v-if="marketstyle.i399366 > 0.7">国证大宗：{{marketstyle.i399366}}</div>
        <div v-if="marketstyle.i399320 > 0.7">国证服务：{{marketstyle.i399320}}</div>
        <div v-if="marketstyle.i399359 > 0.7">国证基建：{{marketstyle.i399359}}</div>

      </q-card-section>
      <q-card-section class="bg-grey-3 text-sm">
        <div v-if="(marketstyle.i399366 < 0.7) & (marketstyle.i399366 > -0.7)">国证大宗：{{marketstyle.i399366}}</div>
        <div v-if="(marketstyle.i399320 < 0.7) & (marketstyle.i399320 > -0.7)">国证服务：{{marketstyle.i399320}}</div>
        <div v-if="(marketstyle.i399359 < 0.7) & (marketstyle.i399359 > -0.7)">国证基建：{{marketstyle.i399359}}</div>
        
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-green-3 text-sm">
        <div v-if="marketstyle.i399366 < -0.7">国证大宗：{{marketstyle.i399366}}</div>
        <div v-if="marketstyle.i399320 < -0.7">国证服务：{{marketstyle.i399320}}</div>
        <div v-if="marketstyle.i399359 < -0.7">国证基建：{{marketstyle.i399359}}</div>
        </q-card-section>
    </q-card>
    <!--    价值       -->


  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="market0807Option" autoresize ref="market0807Chart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="market080723Option" autoresize ref="market080723Chart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="marketstyleOption" autoresize ref="marketstyleChart"/>
  </div>

  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="industrystyleOption" autoresize ref="industrystyleChart"/>
  </div>
  
  <q-separator inset spaced />
  <div class="q-pa-sm">
    <v-chart class="chart" :option="conceptstyleOption" autoresize ref="conceptstyleChart"/>
  </div>

</div>
</template>

<script lang=“ts”>
import http from '../utils/http'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  LineChart,
  BarChart,
  } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, defineComponent } from 'vue'

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  MarkLineComponent
])

export default defineComponent({
  name: 'MarketStyleView',
  components: {
    VChart
  },
  mounted: function () {
    this.getServerMarketData()
  },
  methods: {
    getServerMarketData: async function () {
      let params = {
      }
      const res14 = await http.get('https://stock.anno189.com/h5/data/marketstyle.json', params)
      this.marketstyle = res14.data.data.style

      this.marketstyle.s1 = ((this.marketstyle.i880821 + this.marketstyle.i880007  + this.marketstyle.i880826  + this.marketstyle.i880829) / 4).toFixed(2)
      this.marketstyle.s2 = ((this.marketstyle.i880823 + this.marketstyle.i880008  + this.marketstyle.i880824  + this.marketstyle.i880827) / 4).toFixed(2)
      this.marketstyle.s3 = ((this.marketstyle.i880529 + this.marketstyle.i880885  + this.marketstyle.i880868  + this.marketstyle.i880853 + this.marketstyle.i880879 ) / 6).toFixed(2)
      this.marketstyle.s4 = ((this.marketstyle.i880770 + this.marketstyle.i880785  + this.marketstyle.i880865  + this.marketstyle.i880880) / 4).toFixed(2)
     
      this.marketstyle.s6 = ((this.marketstyle.i000001 + this.marketstyle.i000688  + this.marketstyle.i000010  + this.marketstyle.i000009 + this.marketstyle.i000133 + this.marketstyle.i000015) / 6).toFixed(2)
      this.marketstyle.s7 = ((this.marketstyle.i399001 + this.marketstyle.i399006  + this.marketstyle.i399673  + this.marketstyle.i399330 + this.marketstyle.i399009 + this.marketstyle.i399010  + this.marketstyle.i399324) / 7).toFixed(2)
      this.marketstyle.s8 = ((this.marketstyle.i000001 + this.marketstyle.i399001  + this.marketstyle.i399006  + this.marketstyle.i000688 + this.marketstyle.i399673 + this.marketstyle.i000016  + this.marketstyle.i000903  + this.marketstyle.i000300 + this.marketstyle.i000905 + this.marketstyle.i000852 + this.marketstyle.i399303) / 11).toFixed(2)
      this.marketstyle.s9 = ((this.marketstyle.i399372 + this.marketstyle.i399373  + this.marketstyle.i399374  + this.marketstyle.i399375 + this.marketstyle.i399376 + this.marketstyle.i399377  + this.marketstyle.i000015  + this.marketstyle.i399324 + this.marketstyle.i000922 + this.marketstyle.i399370 + this.marketstyle.i399371) / 11).toFixed(2)
      this.marketstyle.s10 = ((this.marketstyle.i000986 + this.marketstyle.i000987  + this.marketstyle.i000988  + this.marketstyle.i000989 + this.marketstyle.i000990 + this.marketstyle.i000991  + this.marketstyle.i000992  + this.marketstyle.i000993 + this.marketstyle.i000994 + this.marketstyle.i000995 + this.marketstyle.i931775) / 11).toFixed(2)
      this.marketstyle.s11 = ((this.marketstyle.i399366 + this.marketstyle.i399320 + this.marketstyle.i399359 ) / 6).toFixed(2)

      const res6 = await http.get('https://stock.anno189.com/h5/data/market_88000708.json', params)
      this.market0807Option = res6.data

      const res7 = await http.get('https://stock.anno189.com/h5/data/market_070823.json', params)
      this.market080723Option = res7.data

      const res9 = await http.get('https://stock.anno189.com/h5/data/market_style.json', params)
      this.marketstyleOption = res9.data

      const res10 = await http.get('https://stock.anno189.com/h5/data/concept_style.json', params)
      this.conceptstyleOption = res10.data

      const res11 = await http.get('https://stock.anno189.com/h5/data/industry_style.json', params)
      this.industrystyleOption = res11.data

      
    }
  },

  setup () {
    const marketstyle = ref({});
    const market0807Option = ref({});
    const market080723Option = ref({});
    const marketstyleOption = ref({});
    const conceptstyleOption = ref({});
    const industrystyleOption = ref({});
    
    return { marketstyle, market0807Option, market080723Option, marketstyleOption, conceptstyleOption, industrystyleOption};

  }

});

</script>

<style scoped>
.chart {
  height: 520px;
}

</style>