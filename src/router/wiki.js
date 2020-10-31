import Wiki from "@/views/wiki/spaces";
import WikiSetting from "@/views/setting/wiki_setting";
import Space from "@/views/wiki/space";

let wiki = [
    {
        path: '/main/team/:team/wiki',
        meta: { title: "项目文档" },
        name: 'Wiki',
        component: Wiki
    }, {
        path: '/main/setting/team/:team/wiki/:type',
        meta: { title: "文档配置中心" },
        name: 'WikiSetting',
        component: WikiSetting
    }, {
        path: '/main/team/:team/space',
        meta: { title: "文档中心" },
        name: 'Space',
        component: Space
    }
]

export default wiki;