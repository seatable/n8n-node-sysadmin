import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list_groups(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const page = this.getNodeParameter('page', index) as number;
	const per_page = this.getNodeParameter('per_page', index) as number;
	const name = this.getNodeParameter('name', index) as string;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			page: page,
			per_page: per_page,
			name: name,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/groups/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
