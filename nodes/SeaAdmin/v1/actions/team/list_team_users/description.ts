import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Team-ID (org_id)',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['list_team_users'],
			},
		},
		default: '1',
		description: 'desc...',
	},
];
