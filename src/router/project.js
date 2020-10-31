import ProjectSetting from "@/views/setting/project_setting";
import Projects from '../views/project/projects';
import AddProject from '../views/project/add';
import Task from '../views/project/task';
import ProjectPermissionSetting from '../views/setting/permission';

let project = [
    {
        path: '/main/setting/team/:team/project/:type',
        meta: { title: "项目管理" },
        name: 'ProjectSetting',
        component: ProjectSetting
    }, {
        path: '/main/setting/team/:team/issue_type/:type',
        meta: { title: "工作项管理" },
        name: 'TeamIssueTypeSetting',
        component: ProjectSetting
    }, {
        path: '/main/setting/team/:team/project/:project/manager/permission',
        meta: { title: "项目管理" },
        name: 'ProjectPermissionSetting',
        component: ProjectPermissionSetting
    }, {
        path: '/main/team/:team/projects',
        meta: { title: "项目管理" },
        name: 'Projects',
        component: Projects
    }, {
        path: '/main/team/:team/project/add',
        meta: { title: "新建项目" },
        name: 'AddProject',
        component: AddProject
    }, {
        path: '/main/team/:team/project/:project/issue_type/:issue_type/task/:task',
        meta: { title: "查看任务" },
        name: 'Task',
        component: Task
    }
]

export default project;