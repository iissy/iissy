import Component from "@/views/project/component";
import Main from "@/views/main";

let task = [
    {
        path: '/main/team/:team/project/:project/component/:com/task/:task',
        meta: { title: "查看任务" },
        name: 'Task',
        component: Component
    },
    {
        path: '/main/team/:team/workbench/:type/task/:task',
        meta: { title: "查看任务" },
        name: 'TaskInTeam',
        component: Main
    }
]

export default task;