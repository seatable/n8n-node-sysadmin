import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'User ID',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['reset_user_password'],
			},
		},
		default: '',
		description:
			'The unique user id in the form ...@auth.local. This is not the email address of the user.',
	},
];
