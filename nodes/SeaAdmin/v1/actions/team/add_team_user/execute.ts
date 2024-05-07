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


	let body : FormData = new FormData();
	body.set("email",email);
	body.set("password",password);
	body.set("name",name);
	body.set("with_workspace",with_workspace);

 
	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body,
		uri: baseURL + '/api/v2.1/admin/organizations/' + org_id + '/users/',
		json: false,
	};
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
