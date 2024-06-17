import type { INodeTypeDescription } from 'n8n-workflow';

import * as team from './team';
import * as statistics from './statistics';
import * as users from './users';
import * as system_info from './system_info';
import * as bases from './bases';
import * as groups from './groups';
import * as logs from './logs';

export const versionDescription: INodeTypeDescription = {
	displayName: 'SeaTable Sys-Admin',
	name: 'seaadmin',
	icon: 'file:seaadmin.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Execute SeaTable API calls as Sys-Admin.',
	defaults: {
		name: 'SeaTable Sys-Admin',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'seaadminApi',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Base',
					value: 'bases',
				},
				{
					name: 'Group',
					value: 'groups',
				},
				{
					name: 'Log',
					value: 'logs',
				},
				{
					name: 'Statistic',
					value: 'statistics',
				},
				{
					name: 'System Info',
					value: 'system_info',
				},
				{
					name: 'Team',
					value: 'team',
				},
				{
					name: 'User',
					value: 'users',
				},
			],
			default: 'system_info',
		},
		...system_info.descriptions,
		...bases.descriptions,
		...groups.descriptions,
		...users.descriptions,
		...team.descriptions,
		...statistics.descriptions,
		...logs.descriptions,
	],
};
