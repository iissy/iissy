let urls = {
    team_create: '/api/team',
    team_member_list: '/api/team/{0}/get_team_member_list',
    team_member_add: '/api/team/{0}/member/add',
    team_project_list: '/api/team/{0}/list/project',
    user_get: '/api/team/{0}/user/{1}',

    priority_options_get: '/api/team/{0}/priority_options_get',

    commit_overview: '/api/team/{0}/commit/overview',

    space_add: '/api/team/{0}/space_add',
    space_list: '/api/team/{0}/space_list',
    pages: '/api/team/{0}/space/{1}/pages',
    page_get: '/api/team/{0}/page/{1}',
    page_draft_add: '/api/team/{0}/space/{1}/page_draft_add',
    drafts: '/api/team/{0}/space/{1}/drafts',
    draft_get: '/api/team/{0}/space/{1}/draft/{2}',

    issue_type_get: '/api/team/{0}/issue_type/{1}/get',
    issue_type_template_get: '/api/team/{0}/issue_type/{1}/get_issue_type_template',
    issue_type_field_list: '/api/team/{0}/setting/issue_type/field',
    issue_type_list: '/api/team/{0}/setting/issue_type/list',
    issue_type_priority: '/api/team/{0}/setting/issue_type/priority',
    issue_type_status: '/api/team/{0}/setting/issue_type/status',
    issue_type_task_status_list: '/api/team/{0}/issue_type/{1}/issue_type_task_status_list',

    project_field: '/api/team/{0}/setting/project/field',
    project_list: '/api/team/{0}/setting/project/list',
    project_status: '/api/team/{0}/setting/project/status',
    project_add: '/api/team/{0}/add/project',
    project_update: '/api/team/{0}/project/{1}/update',
    project_first_component: '/api/team/{0}/project/{1}/component/first',
    project_template: '/api/team/{0}/project/{1}/setting/template',
    project_get: '/api/team/{0}/project/{1}/get',
    status_data_list: '/api/team/{0}/project/{1}/status_data_list',
    project_change_assign: '/api/team/{0}/project/{1}/change_assign',
    project_role_members: '/api/team/{0}/project/{1}/project_role_members',
    project_member_add: '/api/team/{0}/project/{1}/project_member_add',
    project_task_list: '/api/team/{0}/project/{1}/list/task',
    project_change_status: '/api/team/{0}/project/{1}/project_change_status',

    project_issue_type_field: '/api/team/{0}/project/{1}/issue_type/{2}/field',
    project_issue_type_flow: '/api/team/{0}/project/{1}/issue_type/{2}/get_project_issue_type_flow',
    project_issue_type_flow_submit: '/api/team/{0}/project/{1}/issue_type/{2}/update_project_issue_type_flow',

    component_get: '/api/team/{0}/project/{1}/component/get/{2}',
    components: '/api/team/{0}/project/{1}/components',

    next_status_list: '/api/team/{0}/project/{1}/issue_type/{2}/next_status_list/{3}',

    certificate_add: '/api/ding/login_certificate/add',

    task_add: '/api/team/{0}/project/{1}/issue_type/{2}/add/task',
    task_list: '/api/team/{0}/project/{1}/issue_type/{2}/list/task',
    task_get: '/api/team/{0}/project/{1}/issue_type/{2}/get/task/{3}',
    task_change_assign: '/api/team/{0}/project/{1}/change_assign/task/{2}',
    task_change_status: '/api/team/{0}/project/{1}/change_status/task/{2}',
    task_change_priority: '/api/team/{0}/project/{1}/change_priority/task/{2}',
    task_list_by_assign: '/api/team/{0}/task_list_by_assign',
    task_list_by_owner: '/api/team/{0}/task_list_by_owner',
    task_list_by_watcher: '/api/team/{0}/task_list_by_watcher',

    department_add: '/api/team/{0}/setting/department/add',
    department_tree: '/api/team/{0}/setting/department/tree',

    logout: '/api/logout',
};

export default urls