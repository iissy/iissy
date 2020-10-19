import IssueTypeSetting from "@/views/setting/issue_type_setting";

let issue_type = [
    {
        path: '/main/setting/team/:team/issue_type/:issue_type/config',
        meta: { title: "工作项管理" },
        name: 'IssueTypeSetting',
        component: IssueTypeSetting
    }
]

export default issue_type;