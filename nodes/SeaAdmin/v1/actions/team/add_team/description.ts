import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Name of the team',
		name: 'org_name',
		type: 'string',
		required: true,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: '',
		description: 'Name of the team. Required. ',
	},
	{
		displayName: 'Admin email',
		name: 'admin_email',
		type: 'string',
		required: true,
		placeholder: 'username',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: '',
		description: 'Login email of the team administrator. Required. Has to be unique in the system.',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		placeholder: 'password_test',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: '',
		description: 'Login password of the user.',
	},
	{
		displayName: 'Admin Name',
		name: 'admin_name',
		type: 'string',
		required: false,
		placeholder: 'Max Mustermann',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: '',
		description: 'Full name of the team administrator. Optional.',
	},
	{
		displayName: 'With Workspace',
		name: 'with_workspace',
		type: 'boolean',
		required: false,
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: false,
		description: 'If a workspace should be automatically created for the user.',
	},
];
