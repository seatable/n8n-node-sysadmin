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
				name: 'Get system information',
				value: 'get_system_info',
				description: 'Get more information of the SeaTable Server.',
			},
		],
		default: '',
	},
	...get_system_info.description,
];
