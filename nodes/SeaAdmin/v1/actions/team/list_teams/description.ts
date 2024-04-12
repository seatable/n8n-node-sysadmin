import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['list_teams'],
			},
		},
		default: '1',
		description: '',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: true,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['list_teams'],
			},
		},
		default: '25',
		description: 'Number of entries to be shown',
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'string',
		placeholder: 'default',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['list_teams'],
			},
		},
		required: false,
		default: '',
		description: 'Limit the output by role. Return all teams, if no role is selected.',
	},
];
