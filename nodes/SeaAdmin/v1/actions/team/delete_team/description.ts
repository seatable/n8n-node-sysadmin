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
				operation: ['delete_team'],
			},
		},
		default: '',
		description: '',
	},
];
