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
				operation: ['add_team_user'],
			},
		},
		default: '1',
		description: 'The ID of your team/organization.',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'me@example.com',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team_user'],
			},
		},
		default: '',
		description: 'Login email of the User',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		placeholder: '***',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team_user'],
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
		placeholder: 'Max Mustermann',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team_user'],
			},
		},
		default: '',
		description: 'Full name of the user.',
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
				operation: ['add_team_user'],
			},
		},
		default: false,
		description: 'If a workspace should be automatically created for the user.',
	},
];
