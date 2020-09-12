export function formatDate(time) {
    if (time == null) {
        return "-";
    }

    // if (/(y+)/.test(fmt)) {
    //     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    // }
    // let o = {
    //     'M+': date.getMonth() + 1,
    //     'd+': date.getDate(),
    //     'h+': date.getHours(),
    //     'm+': date.getMinutes(),
    //     's+': date.getSeconds()
    // };
    // for (let k in o) {
    //     if (new RegExp(`(${k})`).test(fmt)) {
    //         let str = o[k] + '';
    //         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    //     }
    // }
    // return fmt;

    let date = new Date(time);

    let year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    let newTime = year + '-' +
        month + '-' +
        day + ' ' +
        hour + ':' +
        min + ':' +
        sec;
    return newTime;
}
