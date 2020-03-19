// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import "./nchsdk.js"
Vue.config.productionTip = false
Vue.use(VueI18n)


async function getLanguage(){
  /*console.log(await nchsdk.env.getSystemInfo());
  console.log((await nchsdk.env.getSystemInfo()).result);
  console.log((await nchsdk.env.getSystemInfo()).result.language);*/
  var lan = (await nchsdk.env.getSystemInfo()).result.language;
  console.log(lan);
  return lan;
}
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh-cn': require('./lang/zh-cn'), 
    'en': require('./lang/en') 
  }
})

var debug = 0;
if(debug){
  i18n.locale = 'zh-cn';
  new Vue({
    el: '#app',
    i18n,
    router,
    components: { App },
    template: '<App/>'
  })
}else{
  nchsdk.env.getSystemInfo().then(function(res){
    i18n.locale = res.result.language;
    new Vue({
      el: '#app',
      i18n,
      router,
      components: { App },
      template: '<App/>'
    })
  }).catch(function(e){
    new Vue({
      el: '#app',
      i18n,
      router,
      components: { App },
      template: '<App/>'
    })
  });
}
/* eslint-disable no-new */

