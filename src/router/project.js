import ProjectSetting from "../views/setting/project_setting";
import Projects from '../views/project/projects';
import AddProject from '../views/project/add';
import ProjectPermissionSetting from '../views/setting/permission';
import Project from "../views/project/project";

let project = [
    {
        path: '/main/team/:team/projects',
        meta: { title: "项目管理" },
        name: 'Projects',
        component: Projects
    }, {
        path: '/main/team/:team/project_add',
        meta: { title: "新建项目" },
        name: 'AddProject',
        component: AddProject
    }, {
        path: '/main/team/:team/project/:project',
        meta: { title: "正在跳转中..." },
        name: 'Project',
        component: Project
    }, {
        path: '/main/setting/team/:team/project/:type',
        meta: { title: "项目管理" },
        name: 'ProjectSetting',
        component: ProjectSetting
    }, {
        path: '/main/setting/team/:team/project/:project/manager/permission',
        meta: { title: "项目权限设置" },
        name: 'ProjectPermissionSetting',
        component: ProjectPermissionSetting
    }
]

export default project;