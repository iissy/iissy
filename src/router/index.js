import Vue from 'vue';
import Router from 'vue-router';

import Master from '../views/master';
import Help from '../views/help';
import Main from '../views/main';
import Project from '../views/project/list';
import Doc from '../views/doc/list';
import DocSetting from '../views/doc/setting';
import Robot from '../views/ding/robot';
import MemberSetting from '../views/member/setting';
import Overview from '../views/commit/overview';
import CenterAccount from '../views/center/account';
import CenterSafe from '../views/center/safe';
import CenterCertificate from '../views/center/certificate';
import CenterRobot from '../views/center/robot';

import Logout from '../views/logout';

import Hello from '../views/hello';

import ProjectComponent from './project.js';

Vue.use(Router);

const index = [
    {
        path: '/main/hello',
        meta: { title: "爱斯园" },
        component: Hello
    }, {
        path: '/',
        meta: { title: "爱斯园 - 你找的人正在找你" },
        component: Master
    }, {
        path: '/main',
        meta: { title: "我的工作台" },
        name: 'Main',
        component: Main
    }, {
        path: '/main/help',
        meta: { title: "帮助文档中心" },
        name: 'Help',
        component: Help
    }, {
        path: '/main/project',
        meta: { title: "项目管理" },
        name: 'Project',
        component: Project
    }, {
        path: '/main/team/uh8rjki3/doc',
        meta: { title: "项目文档" },
        name: 'Doc',
        component: Doc
    }, {
        path: '/main/team/uh8rjki3/doc/setting',
        meta: { title: "文档配置中心" },
        name: 'DocSetting',
        component: DocSetting
    }, {
        path: '/main/ding/robot',
        meta: { title: "群机器人" },
        name: 'Robot',
        component: Robot
    }, {
        path: '/main/team/:team/member/setting',
        meta: { title: "团队配置中心" },
        name: 'MemberSetting',
        component: MemberSetting
    },{
        path: '/main/team/:team/commit',
        meta: { title: "代码提交" },
        name: 'Overview',
        component: Overview
    },{
        path: '/main/center/account',
        meta: { title: "个人中心" },
        name: 'CenterAccount',
        component: CenterAccount
    },{
        path: '/main/center/safe',
        meta: { title: "个人中心" },
        name: 'CenterSafe',
        component: CenterSafe
    },{
        path: '/main/center/certificate',
        meta: { title: "个人中心" },
        name: 'CenterCertificate',
        component: CenterCertificate
    },{
        path: '/main/center/robot',
        meta: { title: "个人中心" },
        name: 'CenterRobot',
        component: CenterRobot
    },{
        path: '/main/logout',
        meta: { title: "退出登录" },
        name: 'Logout',
        component: Logout
    }
];

let routes = index.concat(ProjectComponent)

export default new Router({
    mode: 'history',
    routes: routes
});