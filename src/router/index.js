import Vue from 'vue';
import Router from 'vue-router';

import Master from '../views/master';
import Main from '../views/main';
import Notice from '../views/notice/list';
import Task from '../views/task/list';
import Robot from '../views/robot/list';
import MemberSetting from '../views/member/setting';
import DingSetting from '../views/ding/setting';

Vue.use(Router);

const routes = [
    {
        path: '/',
        meta: { title: "主站" },
        component: Master
    }, {
        path: '/main',
        meta: { title: "首页" },
        name: 'Main',
        component: Main
    }, {
        path: '/main/notice',
        meta: { title: "消息通知" },
        name: 'Notice',
        component: Notice
    }, {
        path: '/main/task',
        meta: { title: "待办任务" },
        name: 'Task',
        component: Task
    }, {
        path: '/main/robot',
        meta: { title: "群机器人" },
        name: 'Robot',
        component: Robot
    }, {
        path: '/main/team/:team/member/setting',
        meta: { title: "团队配置中心" },
        name: 'MemberSetting',
        component: MemberSetting
    },{
        path: '/main/team/:team/ding/setting',
        meta: { title: "钉钉配置中心" },
        name: 'DingSetting',
        component: DingSetting
    }
];

export default new Router({
    mode: 'history',
    routes: routes
});