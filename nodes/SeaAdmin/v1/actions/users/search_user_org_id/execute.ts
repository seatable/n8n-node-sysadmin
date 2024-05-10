import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function search_user_org_id(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const query = this.getNodeParameter('query', index) as string;
	const org_id = this.getNodeParameter('org_id', index) as string;
	const limit = this.getNodeParameter('limit', index) as number;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: { query: query, org_id: org_id, limit: limit },
		body: {},
		uri: baseURL + '/api/v2.1/admin/search-user-by-org-id/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
