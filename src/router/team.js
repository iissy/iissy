import TeamSetting from '../views/team/setting';

let team = [
    {
        path: '/main/setting/team/:team',
        meta: { title: "团队配置中心" },
        name: 'TeamSettingDefault',
        component: TeamSetting
    }, {
        path: '/main/setting/team/:team/:type',
        meta: { title: "团队配置中心" },
        name: 'TeamSetting',
        component: TeamSetting
    }
    // ,{
    //     path: '/main/setting/team/:team/member',
    //     meta: { title: "团队配置中心" },
    //     name: 'TeamSetting',
    //     component: TeamSetting
    // },{
    //     path: '/main/setting/team/:team/permission',
    //     meta: { title: "团队配置中心" },
    //     name: 'TeamSetting',
    //     component: TeamSetting
    // }
]

export default team;