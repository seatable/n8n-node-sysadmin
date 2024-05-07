import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list_all_bases(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const per_page = this.getNodeParameter('per_page', index) as number;
	const page = this.getNodeParameter('page', index) as number;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			per_page:per_page,
			page:page,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/dtables/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
