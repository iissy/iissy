import Doc from "@/views/doc/list";
import DocSetting from "@/views/doc/setting";

let doc = [
    {
        path: '/main/team/:team/doc',
        meta: { title: "项目文档" },
        name: 'Doc',
        component: Doc
    }, {
        path: '/main/team/:team/doc/setting',
        meta: { title: "文档配置中心" },
        name: 'DocSetting',
        component: DocSetting
    }
]

export default doc;