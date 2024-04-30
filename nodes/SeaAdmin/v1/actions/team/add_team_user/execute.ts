import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function add_team_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const org_id = this.getNodeParameter('org_id', index) as number;
	const email = this.getNodeParameter('email', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const with_workspace = this.getNodeParameter('with_workspace', index) as boolean;

 
	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			email:email,
			password:password,
			name:name,
			with_workspace:with_workspace
		},
		uri: baseURL + '/api/v2.1/admin/organizations/' + org_id + '/users/',
		json: true,
	};
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
