import twiceApi from './twiceApi';
let api = {
  ...twiceApi

};
//生产环境判断
// development

if(process.env.NODE_ENV === 'production') {
  Object.keys(api).forEach(item => {
    api[item]['url'] = 'http://www.educvip.com/smart_sand/' + api[item]['url'];
    // api[item]['url'] = 'http://test.sxzichen.com/smart_sand/' + api[item]['url'];

  })
} else {
  Object.keys(api).forEach(item => {
    api[item]['url'] = 'http://www.educvip.com/smart_sand/' + api[item]['url'];

    // api[item]['url'] = 'http://test.sxzichen.com/smart_sand/' + api[item]['url'];
    // api[item]['url'] = '/api/' + api[item]['url'];
  })
}

export default api;