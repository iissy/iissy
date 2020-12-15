import Vue from 'vue';
import Router from 'vue-router';

import Master from '../views/master';
import Reg from '../views/reg';
import Main from '../views/main';

import Robot from '../views/ding/robot';
import CenterAccount from '../views/center/account';
import CenterSafe from '../views/center/safe';
import CenterCertificate from '../views/center/certificate';
import CenterRobot from '../views/center/robot';
import Logout from '../views/center/logout';
import MainRedirect from '@/views/workbench/redirect';

import Project from './project.js';
import IssueType from './issue_type.js';
import Ex from './help.js';
import Component from './component.js';
import Wiki from './wiki.js';
import Commit from './commit.js';
import Team from './team.js';
import Task from './task.js';

Vue.use(Router);

let Index = [
    {
        path: '/',
        meta: { title: "Soul 项目管理系统" },
        name: 'Master',
        component: Master
    }, {
        path: '/reg',
        meta: { title: "注册 - Soul 项目管理系统" },
        name: 'Reg',
        component: Reg
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

let routes = Index.concat(Project, IssueType, Ex, Component, Wiki, Commit, Team, Task);
export default new Router({
    mode: 'history',
    routes: routes
});