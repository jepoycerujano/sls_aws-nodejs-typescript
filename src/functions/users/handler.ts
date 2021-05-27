import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const users: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
	const { name, age } = event.body
	return formatJSONResponse({
		message : `Hello ${name} with an age of ${age}, welcome to the exciting Serverless world!`,
		event,
	})
}

export const main = middyfy(users)
