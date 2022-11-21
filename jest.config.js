module.exports = {
	moduleNameMapper: {
		// Comment out the line below to make the test pass. 
		'^vue$': '@vue/compat'
	},

	moduleFileExtensions: [
		'js',
		'json',
		'vue'
	],

	transform: {
		'.*\\.(vue)$': '<rootDir>/node_modules/@vue/vue3-jest'
	},

	testEnvironment: 'jsdom',
};
