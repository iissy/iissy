const formatDate = function(time) {
    if (!time) {
        return '-'
    }
    if (Number.isNaN(time)) {
        return '0000-00-00 00:00:00';
    }
    if (time == null) {
        return '-';
    }
    if (time === 0) {
        return '-';
    }

    let date = new Date(time);

    let year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    let newTime = year + '-' +
    (month < 10 ? ('0' + month) : month) + '-' +
        (day < 10 ? ('0' + day) : day) + ' ' +
    (hour < 10 ? ('0' + hour) : hour) + ':' +
        (min < 10 ? ('0' + min) : min) + ':' +
        (sec < 10 ? ('0' + sec) : sec);
    return newTime;
}

const formatTime = function (time) {
    if (!time) {
        return '-'
    }
    if (Number.isNaN(time)) {
        return '0000-00-00 00:00:00';
    }
    if (time == null) {
        return '-';
    }
    if (time === 0) {
        return '-';
    }

    let date = new Date(time);

    let year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes();
    let newTime = year + '年' +
        (month < 10 ? ('0' + month) : month) + '月' +
        (day < 10 ? ('0' + day) : day) + '日 ' +
        (hour < 12 ? '上午':'下午') +
        (hour < 10 ? ('0' + hour) : hour) + '点' +
        (min < 10 ? ('0' + min) : min) + '分'
    return newTime;
}
export {
    formatDate,
    formatTime
}
