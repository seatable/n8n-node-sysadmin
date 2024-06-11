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
			name: 'seaadmin',
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
					name: 'System Info',
					value: 'system_info',
				},
				{
					name: 'Bases',
					value: 'bases',
				},
				{
					name: 'Groups',
					value: 'groups',
				},
				{
					name: 'Users',
					value: 'users',
				},
				{
					name: 'Team',
					value: 'team',
				},
				{
					name: 'Statistics',
					value: 'statistics',
				},
				{
					name: 'Logs',
					value: 'logs',
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
