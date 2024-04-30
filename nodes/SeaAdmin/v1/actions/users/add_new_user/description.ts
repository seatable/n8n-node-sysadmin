import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'test_email',
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
		placeholder: 'password_test',
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
		placeholder: 'Example User',
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
		displayName: 'Is Staff',
		name: 'is_staff',
		type: 'boolean',
		required: false,
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['add_new_user'],
			},
		},
		default: 'false',
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
				operation: ['add_new_user'],
			},
		},
		default: 'true',
		description: 'true or false if the user could log in. true by default.',
	},
];
