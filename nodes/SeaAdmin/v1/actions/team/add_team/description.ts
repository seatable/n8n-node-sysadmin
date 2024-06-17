import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Name of the Team',
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
		description: 'Name of the team. Required.',
	},
	{
		displayName: 'Admin Email',
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
		typeOptions: { password: true },
		required: true,
		placeholder: 'password_test',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: '',
		description: 'Login password of the user',
	},
	{
		displayName: 'Admin Name',
		name: 'admin_name',
		type: 'string',
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
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team'],
			},
		},
		default: false,
		description:
			'Whether the workspace should be automatically created for the user (true) or not (false)',
	},
];
