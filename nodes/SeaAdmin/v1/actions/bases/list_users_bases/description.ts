import type { SeaAdminBasesProperties } from '../../Interfaces';

export const description: SeaAdminBasesProperties = [
	{
		displayName: 'User-Account',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: '...@auth.local',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_users_bases'],
			},
		},
		default: '',
		description:
			'The unique user account in the form ...@auth.local. This is not the email address of the user.',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_users_bases'],
			},
		},
		default: '1',
		description: 'The page number you want to start showing the entries.',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: false,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_users_bases'],
			},
		},
		default: '25',
		description: 'The number of results that should be returned.',
	},
];
