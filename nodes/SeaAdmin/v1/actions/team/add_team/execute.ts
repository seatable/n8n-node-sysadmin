import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function add_team(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const org_name = this.getNodeParameter('org_name', index) as string;
	const admin_email = this.getNodeParameter('admin_email', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const admin_name = this.getNodeParameter('admin_name', index) as string;
	const with_workspace = this.getNodeParameter('with_workspace', index) as boolean;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			org_name: org_name,
			admin_email: admin_email,
			password: password,
			admin_name: admin_name,
			with_workspace: with_workspace,
		},
		uri: baseURL + '/api/v2.1/admin/organizations/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
