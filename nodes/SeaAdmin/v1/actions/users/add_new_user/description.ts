import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'me@example.com',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: '',
		description: 'Login email of the user',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		placeholder: '***',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: '',
		description: 'Login password of the user',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		placeholder: 'Max',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: '',
		description: 'Full name of the user',
	},
	{
		displayName: 'Grant System Admin Rights',
		name: 'is_staff',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: false,
		description: 'Whether the user will be an (system) admin',
	},
	{
		displayName: 'Active the Account',
		name: 'is_active',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: true,
		description:
			'Whether the account is activated right away and the login is possible (true) or the account is created but not activated (false)',
	},
];
