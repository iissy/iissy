import TeamSetting from '../views/setting/team_setting';

let team = [
    {
        path: '/main/setting/team/:team/:type',
        meta: { title: "团队配置中心" },
        name: 'TeamSetting',
        component: TeamSetting
    }
]

export default team;