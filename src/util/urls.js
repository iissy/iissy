let urls = {
    list_project: '/api/team/{0}/list/project',
    logout: '/api/logout',
    commit_overview: '/api/team/{0}/commit/overview',
    project_first_component: '/api/team/{0}/project/{1}/component/first',
    issue_type_config: '/api/team/{0}/issue_type/{1}/get',
    issue_type_field: '/api/team/{0}/setting/issue_type/field',
    issue_type_manager: '/api/team/{0}/setting/issue_type/manager',
    issue_type_priority: '/api/team/{0}/setting/issue_type/priority',
    issue_type_status: '/api/team/{0}/setting/issue_type/status',
    project_field: '/api/team/{0}/setting/project/field',
    project_manager: '/api/team/{0}/setting/project/manager',
    project_get: '/api/team/{0}/setting/project/{1}/get',
    project_status: '/api/team/{0}/setting/project/status',
    certificate_add: '/api/ding/login_certificate/add',
    project_add: '/api/team/{0}/add/project',
    component_get: '/api/team/{0}/project/{1}/component/get/{2}'
};

export default urls