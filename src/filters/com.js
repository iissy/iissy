export function formatComponentTemplate(uuid) {
    let name = ''
    switch (uuid) {
        case 'com00001':
            name = '需求';
            break;
        case 'com00002':
            name = '缺陷';
            break;
        case 'com00003':
            name = '任务';
            break;
        case 'com00004':
            name = '成员';
            break;
        case 'com00005':
            name = '报表';
            break;
        case 'com00009':
            name = '项目概览';
            break;
    }

    return name;
}