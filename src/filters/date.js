export function formatDay(time) {
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
        month = date.getMonth() + 1,
        day = date.getDate();
    let newTime = year + '-' +
        (month < 10 ? ('0' + month) : month) + '-' +
        (day < 10 ? ('0' + day) : day);
    return newTime;
}

export function formatDate(time) {
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
        month = date.getMonth() + 1,
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

export function formatTime(time) {
    if (!time) {
        return '-'
    }
    if (Number.isNaN(time)) {
        return '0000-00-00 00:00:00';
    }
    if (time === 0) {
        return '-';
    }

    let date = new Date(time);

    let year = date.getFullYear(),
        month = date.getMonth() + 1,
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

export function timeFormat(time) {
    if (!time) {
        return '-'
    }
    if (Number.isNaN(time)) {
        return '0000-00-00';
    }
    if (time === 0) {
        return '-';
    }

    let date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        curYear = curDate.getFullYear(),
        timeStr;

    if (year < curYear) {
        timeStr = year + '年' + month + '月' + day + '日 ';
    } else {
        let pastTime = curDate - date,
            pastH = pastTime / 3600000;
        if (pastH >= 240) {
            timeStr = month + '月' + day + '日 ';
        } else if (pastH >= 24) {
            timeStr = Math.floor(pastH / 24) + '天前';
        } else if (pastH >= 1) {
            timeStr = Math.floor(pastH) + '小时前';
        } else if (pastH * 60 >= 1) {
            timeStr = Math.floor(pastH * 60) + '分钟前';
        } else {
            timeStr = '刚刚';
        }

    }
    return timeStr;
}
