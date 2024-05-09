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
		description: 'Login email of the user.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		placeholder: '***',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: '',
		description: 'Login password of the user.',
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
		description: 'Full name of the user.',
	},
	{
		displayName: 'Grant system admin rights',
		name: 'is_staff',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: false,
		description: 'true or false if the user will be an (system) admin. false by default.',
	},
	{
		displayName: 'Active the account',
		name: 'is_active',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: true,
		description: 'An active account could be used right away. Login is possible.',
	},
];
