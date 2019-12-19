import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import components from 'components';
// import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 字典文件
import dictionaries from 'utils/conCatModel'
// 使用 CSS
Vue.config.productionTip = false
// Vue.use(Element, { size: 'small' });

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()); //首字母大写
  Vue.component(`${name}`, components[key]);
});
Vue.prototype.options = dictionaries.options;
Vue.prototype.dictionaries = dictionaries.dictionaries;
Vue.prototype.permissionCodes == undefined ? Vue.prototype.permissionCodes = store.state.login.permissionCodes : Vue.prototype.permissionCodes
// Vue.prototype.globalUrl = 'http://www.educvip.com/smart_sand/'
if(process.env.NODE_ENV === 'production') {
  Vue.prototype.globalUrl = 'http://www.educvip.com/smart_sand/';
  // Vue.prototype.globalUrl = 'http://test.sxzichen.com/smart_sand/';
} else {
  Vue.prototype.globalUrl = 'http://test.sxzichen.com/smart_sand/';
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
