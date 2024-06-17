import type { SeaAdminTeamProperties } from '../../Interfaces';

export const description: SeaAdminTeamProperties = [
	{
		displayName: 'Team ID',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: 'The ID of your team/organization',
	},
	{
		displayName: 'New Name of the Team',
		name: 'org_name',
		type: 'string',
		placeholder: 'Team ABC',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: 'Name of the team. Required.',
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'string',
		placeholder: 'default',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: 'Name of the role that will be assigned to the team',
	},
	{
		displayName: 'Row Limit',
		name: 'row_limit',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: "User's total row limit in number. For example 10000. 0 means unlimited.",
	},
	{
		displayName: 'Maximum Team Size',
		name: 'max_user_number',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: 'The maximum number of users in this team',
	},
	{
		displayName: 'Asset Quota (in MB)',
		name: 'asset_quota_mb',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
		default: '',
		description: 'The asset quota in MB',
	},
	{
		displayName: 'Hint: If the input is empty, the values will not be changed.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['team'],
				operation: ['update_team'],
			},
		},
	},
];
