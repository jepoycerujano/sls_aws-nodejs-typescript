export default {
	type       : 'object',
	properties : {
		name : { type: 'string' },
		age  : { type: 'integer' }
	},
	required : ['name', 'age']
} as const