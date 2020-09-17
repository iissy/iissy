import ProjectSetting from "@/views/project/setting";
import Project from '../views/project/list';

let project = [
    {
        path: '/main/team/:team/project/:com',
        meta: { title: "项目管理" },
        name: 'ProjectSetting',
        component: ProjectSetting
    }, {
        path: '/main/project',
        meta: { title: "项目管理" },
        name: 'Project',
        component: Project
    }
]

export default project;