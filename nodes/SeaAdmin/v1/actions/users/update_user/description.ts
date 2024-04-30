import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'User Id',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: 'a1201923ffas919@auth.local',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['update_user'],
			},
		},
		default: '',
		description: '',
	},
	{
		displayName: 'Is Staff',
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
		description: 'true or false if the user will be an (system) admin. false by default.',
	},
	{
		displayName: 'Is Active',
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
		description: 'true or false if the user could log in. true by default.',
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
		description: 'Update their role. For details about roles, refer to SeaTable Roles and Permissions.',
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
		displayName: 'login_id',
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
		displayName: 'Contact Email',
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
		displayName: 'ID In Organization',
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
		description: 'The team ID of the user, could be a student\'s ID or employee ID. String.',
	},
	{
		displayName: 'Unit',
		name: 'unit',
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
		description: 'Business unit. Only valid if the system configuration allows the feature.',
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
		displayName: 'Institution',
		name: 'institution',
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
		description: 'Institution. Only valid if the system configuration allows the feature.',
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
		default: '',
		description: 'User\'s total row limit in number. For example 10000.',
	},
	{
		displayName: 'Quota total',
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
		displayName: 'Asset Quota MB',
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
