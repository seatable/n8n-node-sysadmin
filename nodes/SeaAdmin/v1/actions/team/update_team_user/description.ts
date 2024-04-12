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
				operation: ['update_team_user'],
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
				operation: ['update_team_user'],
			},
		},
		required: true,
		default: '',
		description:
			'The unique user id in the form ...@auth.local. This is not the email address of the user.',
	},
	{
		displayName: 'Team Admin',
		name: 'is_admin',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		required: false,
		default: 'false',
		description: 'true or false if the user will be an (team) admin. false by default.',
	},
	{
		displayName: 'Activate/Deactivate User',
		name: 'is_active',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		required: false,
		default: 'false',
		description: 'true or false if the user could log in. true by default.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		required: false,
		default: '',
		description: 'Full name of the user.',
	},
	{
		displayName: 'E-Mail address',
		name: 'contact_email',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		required: false,
		default: '',
		description: 'The contact email address of the user.',
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'string',
		placeholder: 'default',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team_user'],
			},
		},
		required: false,
		default: '',
		description: 'Update the role of this team member.',
	},
];
