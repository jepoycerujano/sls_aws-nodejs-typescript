import type { AWS } from '@serverless/typescript'

import users from '@functions/users'

const serverlessConfiguration: AWS = {
	service          : 'sls-demo1',
	frameworkVersion : '2',
	custom           : {
		webpack : {
			webpackConfig  : './webpack.config.js',
			includeModules : true,
		},
	},
	plugins  : ['serverless-webpack', 'serverless-offline'],
	provider : {
		name             : 'aws',
		runtime          : 'nodejs14.x',
		region           : 'us-east-1',
		deploymentBucket : {
			name : 'deploy.us-east-1.nipahut.club'
		},
		apiGateway : {
			minimumCompressionSize     : 1024,
			shouldStartNameWithService : true,
		},
		environment : {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED : '1',
		},
		lambdaHashingVersion : '20201221',
	},
	// import the function via paths
	functions : { users },
}

module.exports = serverlessConfiguration
