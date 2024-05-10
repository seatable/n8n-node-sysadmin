import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Team-ID',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['delete_team_user'],
			},
		},
		default: '',
		description: '',
	},
	{
		displayName: 'User ID',
		name: 'user_id',
		type: 'string',
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['delete_team_user'],
			},
		},
		required: true,
		default: '',
		description:
			'The unique user id in the form ...@auth.local. This is not the email address of the user.',
	},
];
