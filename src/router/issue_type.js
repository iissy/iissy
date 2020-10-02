import IssueTypeSetting from "@/views/issue_type/setting";

let issue_type = [
    {
        path: '/main/setting/team/:team/issue_type/:issue_type/config',
        meta: { title: "工作项管理" },
        name: 'IssueTypeSetting',
        component: IssueTypeSetting
    },{
        path: '/main/setting/team/:team/issue_type/:issue_type/rename',
        meta: { title: "工作项管理" },
        name: 'IssueTypeSetting',
        component: IssueTypeSetting
    }
]

export default issue_type;