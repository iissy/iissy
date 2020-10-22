let urls = {
    team_member_list: '/api/team/{0}/get_team_member_list',
    team_member_add: '/api/team/{0}/member/add',

    list_project: '/api/team/{0}/list/project',
    logout: '/api/logout',
    commit_overview: '/api/team/{0}/commit/overview',
    issue_type_config: '/api/team/{0}/issue_type/{1}/get',
    issue_type_field: '/api/team/{0}/setting/issue_type/field',
    issue_type_manager: '/api/team/{0}/setting/issue_type/manager',
    issue_type_priority: '/api/team/{0}/setting/issue_type/priority',
    issue_type_status: '/api/team/{0}/setting/issue_type/status',

    project_field: '/api/team/{0}/setting/project/field',
    project_manager: '/api/team/{0}/setting/project/manager',
    project_status: '/api/team/{0}/setting/project/status',
    project_add: '/api/team/{0}/add/project',
    project_first_component: '/api/team/{0}/project/{1}/component/first',
    project_template: '/api/team/{0}/project/{1}/setting/template',
    project_get: '/api/team/{0}/project/{1}/get',

    project_issue_type_field: '/api/team/{0}/project/{1}/issue_type/{2}/field',

    component_get: '/api/team/{0}/project/{1}/component/get/{2}',
    components: '/api/team/{0}/project/{1}/components',

    certificate_add: '/api/ding/login_certificate/add',

    task_add: '/api/team/{0}/project/{1}/issue_type/{2}/add/task',
    task_list: '/api/team/{0}/project/{1}/issue_type/{2}/list/task',
    task_get: '/api/team/{0}/project/{1}/issue_type/{2}/get/task/{3}',

    department_add: '/api/team/{0}/setting/department/add',
    department_tree: '/api/team/{0}/setting/department/tree'
};

export default urls