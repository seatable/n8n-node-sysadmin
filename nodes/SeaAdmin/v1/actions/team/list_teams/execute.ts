import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list_teams(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const page = this.getNodeParameter('page', index) as string;
	const per_page = this.getNodeParameter('per_page', index) as string;
	const role = this.getNodeParameter('role', index) as boolean;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			page: page,
			per_page: per_page,
			role: role,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/organizations/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
