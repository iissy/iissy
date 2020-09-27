import ProjectSetting from "@/views/setting";
import Project from '../views/project/list';
import AddProject from '../views/project/add';
import Component from '../views/project/component';
import ProjectPermissionSetting from '../views/project/permission';

let project = [
    {
        path: '/main/setting/team/:team/:type/:com',
        meta: { title: "项目管理" },
        name: 'ProjectSetting',
        component: ProjectSetting
    },{
        path: '/main/setting/team/:team/project/:project/manager/permission',
        meta: { title: "项目管理" },
        name: 'ProjectPermissionSetting',
        component: ProjectPermissionSetting
    }, {
        path: '/main/project',
        meta: { title: "项目管理" },
        name: 'Project',
        component: Project
    }, {
        path: '/main/team/:team/project/add',
        meta: { title: "新建项目" },
        name: 'AddProject',
        component: AddProject
    }, {
        path: '/main/team/:team/project/:project/component/:com',
        meta: { title: "项目管理" },
        name: 'Component',
        component: Component
    }
]

export default project;