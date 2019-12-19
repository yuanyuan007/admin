//set session
export function setSen(k, val) {
  if(typeof val == 'string') {
    sessionStorage.setItem(k, val);
    return val;
  }
  sessionStorage.setItem(k, JSON.stringify(val));
  return val;
}

//get session
export function getSen(k) {
  let uu = sessionStorage.getItem(k);

  try {
    if(typeof JSON.parse(uu) != 'number') {
      uu = JSON.parse(uu);
    }
  } catch(e) { }
  return uu;
}

//set local
export function setLoc(k, val) {
  if(typeof val == 'string') {
    localStorage.setItem(k, val);
    return val;
  }
  localStorage.setItem(k, JSON.stringify(val));
  return val;
}

//get local
export function getLoc(k) {
  let uu = localStorage.getItem(k);

  try {
    if(typeof JSON.parse(uu) != 'number') {
      uu = JSON.parse(uu);
    }
  } catch(e) { }
  return uu;
}
//设置cookie
export function setCookie(name, value, day) {
  if(day !== 0) {
    //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000;
    var date = new Date(+new Date() + expires);
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString();
  } else {
    document.cookie = name + '=' + escape(value);
  }
}
//获取cookie
export function getCookie(name) {
  var arr;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
//数组去重
export function rep2(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) != i) {
      arr.splice(i, 1); //删除数组元素后数组长度减1后面的元素前移
      i--; //数组下标回退
    }
    if(arr.includes(null)) {
      // stivepeim add by el-tree sourceData employeeId is null
      arr.splice(1, 1);
      i--;
    }
  }
  return arr;
}
//格式化日期
Date.prototype.format = function(fmt) {
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };

  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length));
  }
  for(let k in o) {
    if(new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length));
    }
  }
  return fmt;
};

//格式化日期
export function formatDate(nS, format) {
  //日期格式化
  if(!nS) {
    return '';
  }
  format = format || 'yyyy-MM-dd hh:mm:ss';
  return new Date(nS).format(format);
}
//序列化对象和数组
export function serialize(data) {
  if(data != null && data != '') {
    try {
      return JSON.parse(JSON.stringify(data));
    } catch(e) {
      if(data instanceof Array) {
        return [];
      }
      return {};
    }
  }
  return data;
}

// 时间间隔
export function timeInterval(time, day, rule) {
  let times = new Date(formatDate(time)).getTime();
  if(rule) {
    return times - 1000 * 60 * 60 * 24 * day;
  } else {
    return times + 1000 * 60 * 60 * 24 * day;
  }
}
// 把对象装换成&连接的字符串
export function setSrefToShring(obj) {
  let arr = [];
  let str = '';
  Object.keys(obj).forEach(item => {
    if(obj[item]) {
      arr.push(`${item}=${obj[item]}`)
    }
  })
  str = arr.join('&');
  return str;
}

