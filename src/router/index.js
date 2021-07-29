import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../layout';
import WikiLayout from '../layout/wiki';
import ProjectLayout from "../layout/project";
import WorkbenchLayout from "../layout/workbench";

import Main from '../views/main';
import Reg from '../views/reg';

import CenterAccount from '../views/center/account';
import CenterSafe from '../views/center/safe';
import CenterCertificate from '../views/center/certificate';
import Logout from '../views/center/logout';

import Workbench from '../views/workbench/index';
import Projects from "../views/project/projects";
import AddProject from "../views/project/add";
import Project from "../views/project/project";
import ProjectSetting from "../views/setting/project_setting";
import ProjectPermissionSetting from "../views/setting/permission";
import Component from "../views/project/component";
import Spaces from "../views/wiki/spaces";
import WikiSetting from "../views/setting/wiki_setting";
import Space from "../views/wiki/space";
import Page from "../views/wiki/page";
import Draft from "../views/wiki/draft";
import AddPage from "../views/wiki/add_page";
import EditPage from "../views/wiki/edit_page";
import Settings from "../views/wiki/settings";
import TeamSetting from "../views/setting/team_setting";
import Department from "../views/setting/department";
import IssueTypeSetting from "../views/setting/issue_type_setting";
import Help from "../views/help/help";

Vue.use(Router);
const routes = [
    {
        path: '/',
        meta: { title: "爱斯园" },
        name: 'Main',
        component: Main
    }, {
        path: '/reg',
        meta: { title: "注册 - 爱斯园" },
        name: 'Reg',
        component: Reg
    }, {
        path: '/team',
        meta: { title: "我的工作台" },
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: ':team/setting/project/:type',
                meta: { title: "项目配置中心", tagIndex: 82 },
                name: 'ProjectSetting',
                component: ProjectSetting
            }, {
                path: ':team/setting/project/:project/manager/permission',
                meta: { title: "项目配置中心", tagIndex: 82 },
                name: 'ProjectPermissionSetting',
                component: ProjectPermissionSetting
            }, {
                path: ':team/setting/issue_type/:type',
                meta: { title: "项目配置中心", tagIndex: 82 },
                name: 'TeamIssueTypeSetting',
                component: ProjectSetting
            }, {
                path: ':team/setting/issue_type/:issue_type/:type',
                meta: { title: "项目配置中心", tagIndex: 82 },
                name: 'IssueTypeSetting',
                component: IssueTypeSetting
            }, {
                path: ':team/project_list',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'Projects',
                component: Projects
            }, {
                path: ':team/project_add',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'AddProject',
                component: AddProject
            }, {
                path: ':team/project/:project',
                meta: { title: "正在跳转中...", tagIndex: 21 },
                name: 'Project',
                component: Project
            }, {
                path: ':team/wiki',
                meta: { title: "文档中心", tagIndex: 23 },
                name: 'Spaces',
                component: Spaces
            }, {
                path: ':team/setting/wiki/:type',
                meta: { title: "文档配置中心", tagIndex: 83 },
                name: 'WikiSetting',
                component: WikiSetting
            }, {
                path: ':team/setting/:type',
                meta: { title: "团队配置中心", tagIndex: 26 },
                name: 'TeamSetting',
                component: TeamSetting
            }, {
                path: ':team/setting/department/:department',
                meta: { title: "团队配置中心", tagIndex: 26 },
                name: 'Department',
                component: Department
            }, {
                path: ':team/center/account',
                meta: { title: "个人中心" },
                name: 'CenterAccount',
                component: CenterAccount
            }, {
                path: ':team/center/safe',
                meta: { title: "个人中心" },
                name: 'CenterSafe',
                component: CenterSafe
            }, {
                path: ':team/center/certificate',
                meta: { title: "个人中心" },
                name: 'CenterCertificate',
                component: CenterCertificate
            }, {
                path: 'logout',
                meta: { title: "退出登录" },
                name: 'Logout',
                component: Logout
            }
        ]
    }, {
        path: '/team',
        meta: { title: "我的工作台" },
        name: 'WorkbenchLayout',
        component: WorkbenchLayout,
        children: [
            {
                path: ':team/workbench/:type',
                meta: { title: "我的工作台", tagIndex: 1 },
                name: 'Workbench',
                component: Workbench
            }
        ]
    }, {
        path: '/team',
        meta: { title: "我的工作台" },
        name: 'ProjectLayout',
        component: ProjectLayout,
        children: [
            {
                path: ':team/project/:project/component/:com',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'Component',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/:attr',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'ComponentDesigner',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/issue_type/:issue_type/:attr',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'ComponentIssueTypeDesigner',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/task/:task',
                meta: { title: "项目管理", tagIndex: 21 },
                name: 'Task',
                component: Component
            }
        ]
    }, {
        path: '/team',
        meta: { title: "文档" },
        name: 'Wiki',
        component: WikiLayout,
        children: [
            {
                path: ':team/space/:space',
                meta: { title: "文档中心" },
                name: 'Space',
                component: Space
            }, {
                path: ':team/space/:space/page/:page',
                meta: { title: "文档中心" },
                name: 'Page',
                component: Page
            }, {
                path: ':team/space/:space/draft/:draft',
                meta: { title: "文档中心" },
                name: 'Draft',
                component: Draft
            }, {
                path: ':team/space/:space/page/:page/add',
                meta: { title: "添加页面" },
                name: 'AddPage',
                component: AddPage
            }, {
                path: ':team/space/:space/page/:page/edit',
                meta: { title: "编辑页面" },
                name: 'EditPage',
                component: EditPage
            }, {
                path: ':team/space/:space/draft/:draft/edit',
                meta: { title: "编辑页面" },
                name: 'EditDraft',
                component: EditPage
            }, {
                path: ':team/space/:space/settings/:type',
                meta: { title: "页面组设置", tagIndex: 83 },
                name: 'SpaceSettings',
                component: Settings
            }
        ]
    }, {
        path: '/help',
        meta: { title: "帮助文档中心" },
        name: 'Help',
        component: Help
    }
];

export default new Router({
    mode: 'history',
    routes: routes
});