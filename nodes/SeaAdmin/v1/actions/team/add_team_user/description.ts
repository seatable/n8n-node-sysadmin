import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Org Id',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: 'Demo Testing',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['add_team_user'],
			},
		},
		default: '',
		description: 'The Id of your team/organization. Get it from Get Team',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		placeholder: 'username',
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
		placeholder: 'password_test',
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
		description: 'Full name of the User.',
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
		default: '',
		description: 'If a workspace should be automatically created for the user. Optional. false by default.',
	}	
];
