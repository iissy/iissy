import Doc from "@/views/doc/list";
import DocSetting from "@/views/setting/doc_setting";

let doc = [
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
    }
]

export default doc;