import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'User-Account',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['delete_user'],
			},
		},
		default: '',
		description:
			'The unique user account in the form ...@auth.local. This is not the email address of the user.',
	},
];
