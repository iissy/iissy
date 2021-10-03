import config from "./config";

let urls = {
    team_create: '/api/team',
    login_url: '/api/login',
    check_login_status: "/api/check_login_status",
    logout: '/api/logout',
    verify_phone: '/api/verify_phone/{0}',
    send_phone_code: '/api/send_phone_code/{0}',

    team_get: '/api/team/{0}',
    team_update: '/api/team/{0}/update',
    team_member_list: '/api/team/{0}/get_team_members',
    team_member_add: '/api/team/{0}/members/add',
    team_member_delete: '/api/team/{0}/members/delete',
    team_project_list: '/api/team/{0}/projects',
    team_roles_members: '/api/team/{0}/team_roles_members',
    team_department_tree: '/api/team/{0}/setting/department/tree',
    team_user_get: '/api/team/{0}/user/{1}',
    upload: config.upload_url,

    department_member_list: '/api/team/{0}/department/{1}/list',

    space_add: '/api/team/{0}/spaces/add',
    space_get: '/api/team/{0}/space/{1}',
    space_update: '/api/team/{0}/space/{1}/update',
    space_user_domain_group: '/api/team/{0}/space/{1}/space_user_domain_group',
    spaces: '/api/team/{0}/spaces',
    page_tree_get: '/api/team/{0}/space/{1}/page_tree_get',
    default_main_page: '/api/team/{0}/space/{1}/default_main_page',
    page_get: '/api/team/{0}/space/{1}/page/{2}',
    page_draft_add: '/api/team/{0}/space/{1}/page_draft_add',
    page_draft_update: '/api/team/{0}/space/{1}/draft/{2}/update',
    drafts: '/api/team/{0}/space/{1}/drafts',
    draft_get: '/api/team/{0}/space/{1}/draft/{2}',
    draft_delete: '/api/team/{0}/space/{1}/draft/{2}/delete',

    issue_type_get: '/api/team/{0}/issue_type/{1}',
    issue_type_template_get: '/api/team/{0}/issue_type/{1}/get_issue_type_template',
    issue_type_field_list: '/api/team/{0}/issue_type_field',
    issue_type_field_option_list: '/api/team/{0}/issue_type_field_options/{1}',
    issue_type_field_update: '/api/team/{0}/issue_type_field/{1}/update',
    issue_type_list: '/api/team/{0}/issue_type_list',
    issue_type_priority: '/api/team/{0}/issue_type_priority',
    issue_type_status: '/api/team/{0}/issue_type_status',
    issue_type_task_status_list: '/api/team/{0}/issue_type/{1}/issue_type_task_status_list',

    project_field: '/api/team/{0}/projects/field',
    project_list: '/api/team/{0}/projects/list',
    project_status: '/api/team/{0}/projects/status',
    project_add: '/api/team/{0}/projects/add',
    project_update: '/api/team/{0}/project/{1}/update',
    project_plan_update: '/api/team/{0}/project/{1}/update_plan',
    project_first_component: '/api/team/{0}/project/{1}/components/first',
    project_template: '/api/team/{0}/project/{1}/setting/template',
    project_get: '/api/team/{0}/project/{1}',
    status_data_list: '/api/team/{0}/project/{1}/status_data_list',
    project_change_assign: '/api/team/{0}/project/{1}/change_assign',
    project_role_members: '/api/team/{0}/project/{1}/project_role_members',
    project_member_add: '/api/team/{0}/project/{1}/members/add',
    project_change_status: '/api/team/{0}/project/{1}/project_change_status',
    project_user_domain_group: '/api/team/{0}/project/{1}/project_user_domain_group',
    project_delete: '/api/team/{0}/project/{1}/delete',

    role_members: '/api/team/{0}/project/{1}/role_members',

    project_issue_type_field: '/api/team/{0}/project/{1}/issue_type/{2}/field',
    project_issue_type_flow: '/api/team/{0}/project/{1}/issue_type/{2}/get_project_issue_type_flow',
    project_issue_type_flow_submit: '/api/team/{0}/project/{1}/issue_type/{2}/update_project_issue_type_flow',

    component_get: '/api/team/{0}/project/{1}/component/{2}',
    component_update: '/api/team/{0}/project/{1}/component/{2}/update',
    components: '/api/team/{0}/project/{1}/components',

    next_status_list: '/api/team/{0}/project/{1}/issue_type/{2}/next_status_list/{3}',

    certificate_add: '/api/ding/login_certificate/add',

    task_add: '/api/team/{0}/project/{1}/issue_type/{2}/tasks/add',
    task_update: '/api/team/{0}/project/{1}/issue_type/{2}/task/{3}/update',
    task_list: '/api/team/{0}/project/{1}/issue_type/{2}/tasks',
    task_get: '/api/team/{0}/task/{1}',
    task_priority_options: '/api/team/{0}/task_priority_options',
    task_change_assign: '/api/team/{0}/task/{1}/change_assign',
    task_change_status: '/api/team/{0}/task/{1}/change_status',
    task_change_priority: '/api/team/{0}/task/{1}/change_priority',
    task_list_by_assign: '/api/team/{0}/tasks_by_assign',
    task_list_by_owner: '/api/team/{0}/tasks_by_owner',
    task_list_by_watcher: '/api/team/{0}/tasks_by_watcher',
    watchers_update: '/api/team/{0}/project/{1}/task/{2}/watchers/{3}',
    link_tasks: '/api/team/{0}/project/{1}/link_tasks',
    linked_tasks_add: '/api/team/{0}/task/{1}/linked_tasks_add',
    linked_tasks: '/api/team/{0}/task/{1}/linked_tasks',
    linked_source_tasks: '/api/team/{0}/task/{1}/linked_source_tasks',
    linked_tasks_del: '/api/team/{0}/task/{1}/linked_tasks_delete/{2}',

    permission_rules_add: '/api/team/{0}/permission_rules/add',
    permission_rule_delete: '/api/team/{0}/permission_rule/{1}/delete',
    team_permission_rules: '/api/team/{0}/team_permission_rules',
    issue_type_permission_rules_add: '/api/team/{0}/issue_type/{1}/permission_rules/add',
    issue_type_permission_rule_delete: '/api/team/{0}/issue_type/{1}/permission_rule/{2}/delete',
    issue_type_user_domain_group: '/api/team/{0}/project/{1}/issue_type/{2}/issue_type_user_domain_group',

    field_option_value_list: '/api/team/{0}/project/{1}/issue_type/{2}/field/{3}/list',
    field_option_update: '/api/team/{0}/project/{1}/issue_type/{2}/update_field_option',
};

export default urls;