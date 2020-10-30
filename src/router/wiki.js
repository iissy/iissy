import Doc from "@/views/wiki/spaces";
import DocSetting from "@/views/setting/doc_setting";
import Space from "@/views/wiki/space";

let wiki = [
    {
        path: '/main/team/:team/doc',
        meta: { title: "项目文档" },
        name: 'Doc',
        component: Doc
    }, {
        path: '/main/setting/team/:team/doc',
        meta: { title: "文档配置中心" },
        name: 'DefaultDocSetting',
        component: DocSetting
    }, {
        path: '/main/setting/team/:team/doc/:type',
        meta: { title: "文档配置中心" },
        name: 'DocSetting',
        component: DocSetting
    }, {
        path: '/main/team/:team/space',
        meta: { title: "文档中心" },
        name: 'Space',
        component: Space
    }
]

export default wiki;