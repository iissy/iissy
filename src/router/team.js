import Department from '../views/component/setting/team/department';
import TeamSetting from '../views/setting/team_setting';

let team = [
    {
        path: '/main/setting/team/:team/:type',
        meta: { title: "团队配置中心" },
        name: 'TeamSetting',
        component: TeamSetting
    }, {
        path: '/main/setting/team/:team/department/:department',
        meta: { title: "团队配置中心" },
        name: 'Department',
        component: Department
    }
]

export default team;