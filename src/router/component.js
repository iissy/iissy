import Redirect from '../views/component/common/redirect'

let component = [
    {
        path: '/main/redirect/team/:team/project/:project',
        meta: { title: "正在调整中..." },
        name: 'Redirect',
        component: Redirect
    }
]

export default component;