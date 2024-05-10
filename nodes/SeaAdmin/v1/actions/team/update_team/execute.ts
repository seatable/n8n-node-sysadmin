import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function update_team(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const org_id = this.getNodeParameter('org_id', index) as string;
	const org_name = this.getNodeParameter('org_name', index) as string;
	const role = this.getNodeParameter('role', index) as string;
	const row_limit = this.getNodeParameter('row_limit', index) as string;
	const max_user_number = this.getNodeParameter('max_user_number', index) as string;
	const asset_quota_mb = this.getNodeParameter('asset_quota_mb', index) as string;

	let body: FormData = new FormData();

	let options: OptionsWithUri = {
		method: 'PUT',
		qs: {},
		body,
		uri: baseURL + '/api/v2.1/admin/organizations/' + org_id + '/',
		json: true,
	};

	function checkAndSet(options: OptionsWithUri, body_variable: string, key: string) {
		if (body_variable !== '') {
			body.set(key, body_variable);
		}
	}

	checkAndSet(options, org_name, 'org_name');
	checkAndSet(options, role, 'role');
	checkAndSet(options, row_limit, 'row_limit');
	checkAndSet(options, max_user_number, 'max_user_number');
	checkAndSet(options, asset_quota_mb, 'asset_quota_mb');

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
