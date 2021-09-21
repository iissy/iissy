import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../layout';
import WikiLayout from '../layout/wiki';

import Main from '../views/main';
import Reg from '../views/reg';

import Center from '../views/center/center';
import Logout from '../views/logout';

import Workbench from '../views/workbench/index';
import Projects from "../views/project/projects";
import AddProject from "../views/project/add";
import Project from "../views/project/project";
import ProjectSetting from "../views/setting/project_setting";
import ProjectSettingManager from "../components/setting/project/list";
import ProjectSettingField from "../components/setting/project/field";
import ProjectSettingStatus from "../components/setting/project/status";
import IssueTypeSettingManager from "../components/setting/issue_type/list";
import IssueTypeSettingField from "../components/setting/issue_type/field";
import IssueTypeSettingStatus from "../components/setting/issue_type/status";
import IssueTypeSettingPriority from "../components/setting/issue_type/priority";
import ProjectPermissionSetting from "../components/setting/project/permission";
import Component from "../views/project/component";
import Spaces from "../views/wiki/spaces";
import WikiSetting from "../views/setting/wiki_setting";
import Space from "../views/wiki/space";
import Article from "../views/wiki/article_layout";
import Page from "../views/wiki/page";
import Draft from "../views/wiki/draft";
import AddPage from "../views/wiki/add_page";
import EditPage from "../views/wiki/edit_page";
import Settings from "../views/wiki/settings";
import TeamSetting from "../views/setting/team_setting";
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
        path: '/logout',
        meta: { title: "退出登录" },
        name: 'Logout',
        component: Logout
    }, {
        path: '/team',
        meta: { title: "我的工作台" },
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: ':team/setting/project',
                meta: { title: "项目配置中心" },
                name: 'ProjectSetting',
                component: ProjectSetting,
                children: [
                    {
                        path: 'manager',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'ProjectSettingManager',
                        component: ProjectSettingManager,
                    }, {
                        path: 'field',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'ProjectSettingField',
                        component: ProjectSettingField,
                    }, {
                        path: 'status',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'ProjectSettingStatus',
                        component: ProjectSettingStatus,
                    }, {
                        path: ':project/permission',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'ProjectPermissionSetting',
                        component: ProjectPermissionSetting,
                    }
                ]
            }, {
                path: ':team/setting/issue_type',
                meta: { title: "项目配置中心" },
                name: 'TeamIssueTypeSetting',
                component: ProjectSetting,
                children: [
                    {
                        path: 'manager',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'IssueTypeSettingManager',
                        component: IssueTypeSettingManager,
                    }, {
                        path: 'field',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'IssueTypeSettingField',
                        component: IssueTypeSettingField,
                    }, {
                        path: 'status',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'IssueTypeSettingStatus',
                        component: IssueTypeSettingStatus,
                    }, {
                        path: 'priority',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'IssueTypeSettingPriority',
                        component: IssueTypeSettingPriority,
                    }, {
                        path: ':issue_type/:type',
                        meta: { title: "项目配置中心", tagIndex: 82 },
                        name: 'IssueTypeSetting',
                        component: IssueTypeSetting
                    }
                ]
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
                path: ':team/center/:type',
                meta: { title: "个人中心" },
                name: 'Center',
                component: Center
            }, {
                path: ':team/workbench/:type',
                meta: { title: "我的工作台", tagIndex: 1 },
                name: 'Workbench',
                component: Workbench
            }, {
                path: ':team/project/:project/component/:com',
                meta: { title: "项目管理", tagIndex: 21, tab: "project" },
                name: 'Component',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/:attr',
                meta: { title: "项目管理", tagIndex: 21, tab: "project" },
                name: 'ComponentDesigner',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/issue_type/:issue_type/:attr',
                meta: { title: "项目管理", tagIndex: 21, tab: "project" },
                name: 'ComponentIssueTypeDesigner',
                component: Component
            }, {
                path: ':team/project/:project/component/:com/task/:task',
                meta: { title: "项目管理", tagIndex: 21, tab: "project" },
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
                path: ':team/space/:space/article',
                meta: { title: "文档中心" },
                name: 'Article',
                component: Article,
                children: [
                    {
                        path: 'page/:page',
                        meta: { title: "文档中心" },
                        name: 'Page',
                        component: Page
                    }, {
                        path: 'draft/:draft',
                        meta: { title: "文档中心" },
                        name: 'Draft',
                        component: Draft
                    }
                ]
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