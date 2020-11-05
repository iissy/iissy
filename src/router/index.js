import Vue from 'vue';
import Router from 'vue-router';

import Master from '../views/help/master';
import Main from '../views/main';

import Robot from '../views/ding/robot';
import CenterAccount from '../views/center/account';
import CenterSafe from '../views/center/safe';
import CenterCertificate from '../views/center/certificate';
import CenterRobot from '../views/center/robot';
import Logout from '../views/center/logout';
import MainRedirect from '@/views/workbench/redirect';

import ProjectComponent from './project.js';
import IssueTypeComponent from './issue_type.js';
import Ex from './help.js';
import Component from './component.js'
import Wiki from './wiki.js'
import Commit from './commit.js'
import Team from './team.js'

Vue.use(Router);

const index = [
    {
        path: '/',
        meta: { title: "Soul - 你找的人正在找你" },
        component: Master
    }, {
        path: '/main',
        meta: { title: "我的工作台" },
        name: 'MainRedirect',
        component: MainRedirect
    }, {
        path: '/main/team/:team/workbench/:type',
        meta: { title: "我的工作台" },
        name: 'Workbench',
        component: Main
    }, {
        path: '/main/ding/robot',
        meta: { title: "群机器人" },
        name: 'Robot',
        component: Robot
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
routes = routes.concat(IssueTypeComponent)
routes = routes.concat(Ex)
routes = routes.concat(Component)
routes = routes.concat(Wiki)
routes = routes.concat(Commit)
routes = routes.concat(Team)

export default new Router({
    mode: 'history',
    routes: routes
});