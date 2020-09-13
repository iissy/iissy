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
import ProjectSetting from '../views/project/setting';
import Overview from '../views/commit/overview';
import Me from '../views/member/me';
import Logout from '../views/logout';

import Hello from '../views/hello';

Vue.use(Router);

const routes = [
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
        path: '/main/team/:team/project/setting',
        meta: { title: "项目配置中心" },
        name: 'ProjectSetting',
        component: ProjectSetting
    },{
        path: '/main/team/:team/commit',
        meta: { title: "代码提交" },
        name: 'Overview',
        component: Overview
    },{
        path: '/main/me',
        meta: { title: "个人中心" },
        name: 'Me',
        component: Me
    },{
        path: '/main/logout',
        meta: { title: "退出登录" },
        name: 'Logout',
        component: Logout
    }
];

export default new Router({
    mode: 'history',
    routes: routes
});