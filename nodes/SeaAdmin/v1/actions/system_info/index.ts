import type { INodeProperties } from 'n8n-workflow';
import * as get_system_info from './get_system_info';

export { get_system_info };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['system_info'],
			},
		},
		options: [
			{
				name: 'Get System Information',
				value: 'get_system_info',
				description: 'Gets more information about the SeaTable Server',
				action: 'Get system information',
			},
		],
		default: 'get_system_info',
	},
	...get_system_info.description,
];
