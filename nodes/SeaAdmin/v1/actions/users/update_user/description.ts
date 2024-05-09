import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'User-Account',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description:
			'The unique user account in the form ...@auth.local. This is not the email address of the user.',
	},
	{
		displayName: 'Grant system admin rights',
		name: 'is_staff',
		type: 'boolean',
		required: false,
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: false,
		description: 'true or false if the user will be an (system) admin.',
	},
	{
		displayName: 'Active the account',
		name: 'is_active',
		type: 'boolean',
		required: false,
		placeholder: 'true',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: true,
		description: 'An active account could be used right away. Login is possible.',
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'string',
		required: false,
		placeholder: 'default',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description:
			'Update their role. For details about roles, refer to SeaTable Roles and Permissions.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: false,
		placeholder: 'Example User',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'Full name of the user.',
	},
	{
		displayName: 'Login ID',
		name: 'login_id',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'Optional login ID. Valid only if the system configuration allows login ID.',
	},
	{
		displayName: 'Email',
		name: 'contact_email',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'The contact email address of the user.',
	},
	{
		displayName: 'ID in the organization',
		name: 'id_in_org',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: "The team ID of the user, could be a student's ID or employee ID.",
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: false,
		placeholder: 'password_test',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'Login password of the user.',
	},
	{
		displayName: 'Row Limit',
		name: 'row_limit',
		type: 'number',
		required: false,
		placeholder: '50000',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '0',
		description: "User's total row limit in number. For example 10000. 0 means unlimited.",
	},
	{
		displayName: 'Quota total (in MB)',
		name: 'quota_total',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'Update their total quota in MB.',
	},
	{
		displayName: 'Asset Quota (in MB)',
		name: 'asset_quota_mb',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: 'The asset quota in MB.',
	},
];
