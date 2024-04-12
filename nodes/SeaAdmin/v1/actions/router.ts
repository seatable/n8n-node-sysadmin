import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import * as team from './team';
import * as statistics from './statistics';

import { SeaAdmin } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<SeaAdmin>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		//console.log(operation);
		//console.log(resource);

		const seaadmin = {
			resource,
			operation,
		} as SeaAdmin;

		try {
			if (seaadmin.resource === 'team') {
				responseData = await team[seaadmin.operation].execute.call(this, i);
			} else if (seaadmin.resource === 'statistics') {
				responseData = await statistics[seaadmin.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
