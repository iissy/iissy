import ProjectSetting from "@/views/project/setting";
import Project from '../views/project/list';
import AddProject from '../views/project/add';
import ProjectPermissionSetting from '../views/project/permission';

let project = [
    {
        path: '/main/setting/team/:team/project/:com',
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
    }
]

export default project;