import Vue from 'vue';
import Router from 'vue-router';

import Master from '../views/master';
import Main from '../views/main';
import Project from '../views/project/list';
import MemberSetting from '../views/member/setting';
import ProjectSetting from '../views/project/setting';

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
        path: '/main/project',
        meta: { title: "GOOA Project" },
        name: 'Project',
        component: Project
    }, {
        path: '/main/team/:team/member/setting',
        meta: { title: "团队配置中心" },
        name: 'MemberSetting',
        component: MemberSetting
    },{
        path: '/main/team/:team/project/setting',
        meta: { title: "Project 配置中心" },
        name: 'ProjectSetting',
        component: ProjectSetting
    }
];

export default new Router({
    mode: 'history',
    routes: routes
});