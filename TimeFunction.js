export default {

  /**时间格式
   * 引入 import publicMethod from '@/libs/publicMethod.js';
   * 使用  publicMethod.fmt('yyyy-MM-dd hh:mm:ss', infoData.creationDate)
   * 输出 2018-09-14 16:59:43
   * **/
  fmt(fmt, timeStamp) {
    let date = new Date(timeStamp);
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      's+': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (0[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  },
  /**
   * 获取一个月的头一天，结束一天
   * 
   */
  getDate(date) {
    if (date === 'start') {
      return new Date(new Date().getFullYear, new Date().getMonth(), 2).toJSON().substring(0, 10)
    };
    if (date === 'end') {
      return new Date(new Date().getFullYear, new Date().getMonth() + 1, 1).toJSON().substring(0, 10)
    }

  }
};