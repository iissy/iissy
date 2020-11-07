import Component from "@/views/project/component";

let component = [
    {
        path: '/main/team/:team/project/:project/component/:com',
        meta: { title: "项目管理" },
        name: 'Component',
        component: Component
    }, {
        path: '/main/team/:team/project/:project/component/:com/:attr',
        meta: { title: "项目设置" },
        name: 'ComponentDesigner',
        component: Component
    }, {
        path: '/main/team/:team/project/:project/component/:com/issue_type/:issue_type/:attr',
        meta: { title: "工作项类型设置" },
        name: 'ComponentIssueTypeDesigner',
        component: Component
    }, {
        path: '/main/team/:team/project/:project/component/:com/task/:task',
        meta: { title: "查看任务" },
        name: 'Task',
        component: Component
    }
]

export default component;