import Wiki from "@/views/wiki/spaces";
import WikiSetting from "@/views/setting/wiki_setting";
import Space from "@/views/wiki/space";
import Page from "@/views/wiki/page";
import Draft from "@/views/wiki/draft";
import AddPage from "@/views/wiki/add_page";

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
        path: '/main/team/:team/space/:space',
        meta: { title: "文档中心" },
        name: 'Space',
        component: Space
    }, {
        path: '/main/team/:team/space/:space/page/:page',
        meta: { title: "文档中心" },
        name: 'Page',
        component: Page
    }, {
        path: '/main/team/:team/space/:space/draft/:draft',
        meta: { title: "文档中心" },
        name: 'Draft',
        component: Draft
    }, {
        path: '/main/team/:team/space/:space/page/:page/add',
        meta: { title: "添加页面" },
        name: 'AddPage',
        component: AddPage
    }, {
        path: '/main/team/:team/space/:space/draft/:draft/edit',
        meta: { title: "编辑页面" },
        name: 'AddPage',
        component: AddPage
    }
]

export default wiki;