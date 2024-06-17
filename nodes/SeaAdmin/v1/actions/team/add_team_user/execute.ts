import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function add_team_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const org_id = this.getNodeParameter('org_id', index) as number;
	const email = this.getNodeParameter('email', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const with_workspace = this.getNodeParameter('with_workspace', index) as boolean;

	let body: FormData = new FormData();
	body.append('email', email);
	body.append('password', password);
	body.append('name', name);
	body.append('with_workspace', with_workspace);

	const options: OptionsWithUri = {
		headers: {
			Accept: 'application/json',
		},
		method: 'POST',
		qs: {},
		body,
		uri: baseURL + '/api/v2.1/admin/organizations/' + org_id + '/users/',
		json: false,
	};
	// I have absolutely no idea, why this has to be json: false.
	// With json: true, this call is not working.

	let responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);
	responseData = JSON.parse(responseData);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
