import IssueTypeSetting from "@/views/setting/issue_type_setting";
import ProjectSetting from "@/views/setting/project_setting";

let issue_type = [
    {
        path: '/main/setting/team/:team/issue_type/:type',
        meta: { title: "工作项管理" },
        name: 'TeamIssueTypeSetting',
        component: ProjectSetting
    }, {
        path: '/main/setting/team/:team/issue_type/:issue_type/config',
        meta: { title: "工作项管理" },
        name: 'IssueTypeSetting',
        component: IssueTypeSetting
    }
]

export default issue_type;