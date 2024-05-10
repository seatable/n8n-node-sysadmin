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
		description: 'The page number you want to start showing the entries.',
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
		description: 'The number of results that should be returned.',
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
		description: 'Limit the output by role. If no role is selected, all teams will be returned.',
	},
];
