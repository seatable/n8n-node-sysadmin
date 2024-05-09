import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'User Id',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get_user'],
			},
		},
		default: '',
		description:
			'The unique user id in the form ...@auth.local. This is not the email address of the user.',
	},
];
