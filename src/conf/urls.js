let urls = {
    team_create: '/api/team',
    team_member_list: '/api/team/{0}/get_team_member_list',
    team_member_add: '/api/team/{0}/member/add',
    team_project_list: '/api/team/{0}/list/project',
    team_task_list: '/api/team/{0}/list/task',
    team_roles_members: '/api/team/{0}/team_roles_members',
    user_get: '/api/team/{0}/user/{1}',

    priority_options_get: '/api/team/{0}/priority_options_get',

    commit_overview: '/api/team/{0}/commit/overview',

    space_add: '/api/team/{0}/space_add',
    space_get: '/api/team/{0}/space/{1}',
    space_update: '/api/team/{0}/space/{1}/update',
    space_list: '/api/team/{0}/space_list',
    pages: '/api/team/{0}/space/{1}/pages',
    page_tree_get: '/api/team/{0}/space/{1}/page_tree_get',
    home_page_get: '/api/team/{0}/space/{1}/home_page_get',
    page_get: '/api/team/{0}/space/{1}/page/{2}',
    page_draft_add: '/api/team/{0}/space/{1}/page_draft_add',
    page_draft_update: '/api/team/{0}/space/{1}/draft/{2}/update',
    drafts: '/api/team/{0}/space/{1}/drafts',
    draft_get: '/api/team/{0}/space/{1}/draft/{2}',
    draft_delete: '/api/team/{0}/space/{1}/draft/{2}/delete',

    issue_type_get: '/api/team/{0}/issue_type/{1}',
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
    project_first_component: '/api/team/{0}/project/{1}/components/first',
    project_template: '/api/team/{0}/project/{1}/setting/template',
    project_get: '/api/team/{0}/project/{1}/get',
    status_data_list: '/api/team/{0}/project/{1}/status_data_list',
    project_change_assign: '/api/team/{0}/project/{1}/change_assign',
    project_role_members: '/api/team/{0}/project/{1}/project_role_members',
    project_member_add: '/api/team/{0}/project/{1}/project_member_add',
    project_task_list: '/api/team/{0}/project/{1}/list/task',
    project_change_status: '/api/team/{0}/project/{1}/project_change_status',
    project_user_domain_group: '/api/team/{0}/project/{1}/project_user_domain_group',
    role_members: '/api/team/{0}/project/{1}/role_members',

    project_issue_type_field: '/api/team/{0}/project/{1}/issue_type/{2}/field',
    project_issue_type_flow: '/api/team/{0}/project/{1}/issue_type/{2}/get_project_issue_type_flow',
    project_issue_type_flow_submit: '/api/team/{0}/project/{1}/issue_type/{2}/update_project_issue_type_flow',

    component_get: '/api/team/{0}/project/{1}/component/{2}',
    components: '/api/team/{0}/project/{1}/components',

    next_status_list: '/api/team/{0}/project/{1}/issue_type/{2}/next_status_list/{3}',

    certificate_add: '/api/ding/login_certificate/add',

    task_add: '/api/team/{0}/project/{1}/issue_type/{2}/add/task',
    task_list: '/api/team/{0}/project/{1}/issue_type/{2}/list/task',
    task_get: '/api/team/{0}/task/{1}',
    task_change_assign: '/api/team/{0}/task/{1}/change_assign',
    task_change_status: '/api/team/{0}/task/{1}/change_status',
    task_change_priority: '/api/team/{0}/task/{1}/change_priority',
    task_list_by_assign: '/api/team/{0}/task_list_by_assign',
    task_list_by_owner: '/api/team/{0}/task_list_by_owner',
    task_list_by_watcher: '/api/team/{0}/task_list_by_watcher',
    watchers_add: '/api/team/{0}/task/{1}/watchers/add',

    department_add: '/api/team/{0}/setting/department/add',
    department_tree: '/api/team/{0}/setting/department/tree',

    permission_rules_add: '/api/team/{0}/permission_rules/add',
    permission_rule_delete: '/api/team/{0}/permission_rule/{1}/delete',
    team_permission_rules: '/api/team/{0}/team_permission_rules',
    issue_type_permission_rules_add: '/api/team/{0}/issue_type/{1}/permission_rules/add',
    issue_type_permission_rule_delete: '/api/team/{0}/issue_type/{1}/permission_rule/{2}/delete',

    logout: '/api/logout',
};

export default urls