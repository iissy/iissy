import Redirect from '../views/project/redirect'
import Component from "@/views/project/component";
import ComponentDesigner from "@/views/project/component_designer";

let component = [
    {
        path: '/main/redirect/team/:team/project/:project',
        meta: { title: "正在调整中..." },
        name: 'Redirect',
        component: Redirect
    }, {
        path: '/main/team/:team/project/:project/component/:com',
        meta: { title: "项目管理" },
        name: 'Component',
        component: Component
    }, {
        path: '/main/team/:team/project/:project/component_designer/:feature',
        meta: { title: "项目设置" },
        name: 'ComponentDesigner',
        component: ComponentDesigner
    }
]

export default component;