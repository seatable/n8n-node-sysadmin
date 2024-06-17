import * as list_abuse_reports from './list_abuse_reports';
import * as list_email_logs from './list_email_logs';
import * as list_login_logs from './list_login_logs';
import * as list_registration_logs from './list_registration_logs';

import type { INodeProperties } from 'n8n-workflow';

export { list_abuse_reports, list_email_logs, list_login_logs, list_registration_logs };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logs'],
			},
		},
		options: [
			{
				name: 'List Abuse Reports',
				value: 'list_abuse_reports',
				description: 'As system administrator, use this API request to list current abuse reports in the system',
				action: 'List abuse reports',
			},
			{
				name: 'List Email Logs',
				value: 'list_email_logs',
				description:
					'List the email sending logs in the system. The emails sent via 3rd party email accounts are listed here.',
				action: 'List email logs',
			},
			{
				name: 'List Login Logs',
				value: 'list_login_logs',
				description: 'List the logins of all users in the system',
				action: 'List login logs',
			},
			{
				name: 'List Registration Logs',
				value: 'list_registration_logs',
				description: 'Lists Registration Logs',
				action: 'List registration logs',
			},
		],
		default: 'list_abuse_reports',
	},
	...list_abuse_reports.description,
	...list_email_logs.description,
	...list_login_logs.description,
	...list_registration_logs.description,
];
