import Help from "@/views/help/help";
import Hello from "@/views/help/hello";

let help = [
    {
        path: '/main/help',
        meta: { title: "帮助文档中心" },
        name: 'Help',
        component: Help
    },{
        path: '/main/hello',
        meta: { title: "爱斯园" },
        component: Hello
    }
]

export default help;