<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})

var _hmt = _hmt || [];
window._hmt = _hmt;
(function() {
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?ea37237d6531399843fe7874b9876b17';
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>