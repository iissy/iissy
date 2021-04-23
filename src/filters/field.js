export function taskFieldType(type) {
    let name = '';
    switch (type) {
        case 1:
            name = '单选菜单';
            break;
        case 2:
            name = '单行文本';
            break;
        case 3:
            name = '';
            break;
        case 4:
            name = '浮点数';
            break;
        case 5:
            name = '日期';
            break;
        case 6:
            name = '时间';
            break;
        case 7:
            name = '单选迭代';
            break;
        case 8:
            name = '单选成员';
            break;
        case 9:
            name = '项目';
            break;
        case 10:
            name = '';
            break;
        case 11:
            name = '工作项类型';
            break;
        case 12:
            name = '工作项状态';
            break;
        case 13:
            name = '多选成员';
            break;
        case 14:
            name = '工作项编号';
            break;
        case 15:
            name = '';
            break;
        case 16:
            name = '多选菜单';
            break;
        case 17:
            name = '';
            break;
        case 18:
            name = '';
            break;
        case 19:
            name = '';
            break;
        case 20:
            name = '';
            break;
        case 21:
            name = '';
            break;
        case 22:
            name = '状态';
            break;
    }

    return name;
}

export function projectFieldType(type) {
    let name = ''
    switch (type) {
        case 'integer':
            name = '整数';
            break;
        case 'time':
            name = '时间';
            break;
        case 'percentage':
            name = '百分数';
            break;
        case 'date':
            name = '日期';
            break;
        case 'user':
            name = '单选成员';
            break;
        case 'text':
            name = '单行文本';
            break;
        case 'rich_text':
            name = '多文本';
            break;
        case 'status':
            name = '状态';
            break;
    }

    return name;
}