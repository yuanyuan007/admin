// 需求  常规匹配
export function checkUsername(rule, value, callback) {
  let reg = /^[a-zA-Z0-9-\.&#?、@!^%+=*&$_/\u4e00-\u9fa5\s]{1,30}$/; //匹配所有非特殊字符，且长度在0和30之间;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入非法字符'));
    }
  }, 100);
}
// 只能输入汉字或数字
export function checkNumberAndChinese(rule, value, callback) {
  let reg = /^[0-9-\u4e00-\u9fa5\s]{1,20}$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('只能输入1-20位汉字或数字'));
    }
  }, 100);
}
// 只能输入汉字
export function checkChinese(rule, value, callback) {
  let reg = /^[\u4e00-\u9fa5\s]{1,20}$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('只能输入1-20位汉字或数字'));
    }
  }, 100);
}
// 文件夹匹配
export function checkFolder(rule, value, callback) {
  let reg = /^[^\^/:*?"<>|]+$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入 /:*?"<>|'));
    }
  }, 100);
}
// 匹配手机号
export function checkPhone(rule, value, callback) {
  const phoneReg = /^1[3456789]\d{9}$/;
  if(!value) {
    return callback(new Error('电话号码不能为空'));
    // alert('电话号码不能为空')
    callback();
  }
  setTimeout(() => {
    if(!Number.isInteger(+value)) {
      callback(new Error('请输入数字值'));
    } else {
      if(phoneReg.test(value)) {
        callback();
      } else {
        callback(new Error('电话号码格式不正确'));
      }
    }
  }, 100);
}

// 匹配所有特殊字符
export function checkSpecial(rule, value, callback) {
  let reg = /[`~!@#$%^&()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(!reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入非法字符'));
    }
  }, 100);
}


//输入大小写英文  、数字和_   *   -
export function checkEnACharac(rule, value, callback) {
  let reg = /^[a-zA-Z0-9-\-*_/\s]{0,15}$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入特殊字符'));
    }
  }, 100);
}
// 中英文数字和- _
export function checkEnACharac2(rule, value, callback) {
  let reg = /^[a-zA-Z0-9-_\u4e00-\u9fa5]+$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入特殊字符'));
    }
  }, 100);
}

//大小写英文和数字
export function benAndNumber(rule, value, callback) {
  let reg = /^[a-zA-Z0-9-\-*_/]*$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('不可输入特殊字符'));
    }
  }, 100);
}

//匹配链接
export function checkLink(rule, value, callback) {
  let reg = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('地址格式不正确'));
    }
  }, 100);
}


//输入大写英文
export function bigLetter(rule, value, callback) {
  let reg = /[A-Z]/g;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('密码必须包含大写英文，请重新输入！'));
    }
  }, 100);
}
//输入小写英文
export function littleLetter(rule, value, callback) {
  let reg = /[a-z]/g;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('密码必须包含小写英文，请重新输入！'));
    }
  }, 100);
}

export function firstZMofen(rule, value, callback) {
  let reg = /^[a-zA-Z][a-zA-Z0-9_]*$/;
  if(!value) {
    callback();
  }
  setTimeout(() => {
    if(reg.test(value)) {
      callback();
    } else {
      callback(new Error('必须以英文字母开头'));
    }
  })
}
// 只能输入两位小数
export function validatprice(rule, value, callback) {
  let reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  if(value === '') {
    callback(new Error('请输入商品单价'));
  } else if(!reg.test(value)) {
    callback(new Error('请输入两位小数'));
  } else {
    callback();
  }
};

// 校验金额
export function checkoutAmount(rule, value, callback) {
  let reg = /^(^([1-9]\d{0,6})(\.\d{1,2})?$)|(^[0]\.[1-9][0-9]?$)|(^[0]\.[0][1-9]$)|(^[0]\.[1-9]$)$/;
  if(value == '') {
    callback(new Error('请输入金额'));
  } else if(!reg.test(value)) {
    callback(new Error('输入金额不符合规则'));
  } else {
    callback();
  }
}
//车牌号校验
export function checkCarCardRule(rule, value, callback) {
  let reg = /([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}(([A-HJ-Z]{1}[A-HJ-NP-Z0-9]{5})|([A-HJ-Z]{1}(([DF]{1}[A-HJ-NP-Z0-9]{1}[0-9]{4})|([0-9]{5}[DF]{1})))|([A-HJ-Z]{1}[A-D0-9]{1}[0-9]{3}警)))|([0-9]{6}使)|((([沪粤川云桂鄂陕蒙藏黑辽渝]{1}A)|鲁B|闽D|蒙E|蒙H)[0-9]{4}领)|(WJ[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼·•]{1}[0-9]{4}[TDSHBXJ0-9]{1})|([VKHBSLJNGCE]{1}[A-DJ-PR-TVY]{1}[0-9]{5})/;
  if(value == '') {
    callback(new Error('请输入车牌号'));
  } else if(!reg.test(value)) {
    callback(new Error('输入的车牌号不合法'));
  } else {
    callback();
  }
}