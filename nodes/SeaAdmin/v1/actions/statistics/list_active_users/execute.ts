import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list_active_users(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const date = this.getNodeParameter('date', index) as string;
	const page = this.getNodeParameter('page', index) as string;
	const per_page = this.getNodeParameter('per_page', index) as string;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			page: page,
			per_page: per_page,
			date: date,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/daily-active-users/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
