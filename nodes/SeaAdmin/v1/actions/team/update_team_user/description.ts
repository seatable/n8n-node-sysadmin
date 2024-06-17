import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Team ID',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'The ID of your team/organization',
	},
	{
		displayName: 'User-Account',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description:
			'The unique user account in the form ...@auth.local. This is not the email address of the user.',
	},
	{
		displayName: 'Grant System Admin Rights',
		name: 'is_staff',
		type: 'boolean',
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: false,
		description: 'Whether the user will be a system-admin',
	},
	{
		displayName: 'Grant Team Admin Rights',
		name: 'is_admin',
		type: 'boolean',
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: false,
		description: 'Whether the user will be an team-admin',
	},
	{
		displayName: 'Active the Account',
		name: 'is_active',
		type: 'boolean',
		placeholder: 'true',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: true,
		description:
			'Whether the account is activated right away and the login is possible (true) or the account is created but not activated (false)',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: 'Example User',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'Full name of the user',
	},
	{
		displayName: 'Login ID',
		name: 'login_id',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'Optional login ID. Valid only if the system configuration allows login ID.',
	},
	{
		displayName: 'Email',
		name: 'contact_email',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'The contact email address of the user',
	},
	{
		displayName: 'ID in the Organization',
		name: 'id_in_org',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: "The team ID of the user, could be a student's ID or employee ID",
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		placeholder: 'password_test',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'Login password of the user',
	},
	{
		displayName: 'Row Limit',
		name: 'row_limit',
		type: 'number',
		placeholder: '50000',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: 0,
		description: "User's total row limit in number. For example 10000. 0 means unlimited.",
	},
	{
		displayName: 'Quota Total (in MB)',
		name: 'quota_total',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		default: '',
		description: 'Update their total quota in MB',
	},
	{
		displayName: 'Hint: If the input is empty, the values will not be changed.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
	},
];
