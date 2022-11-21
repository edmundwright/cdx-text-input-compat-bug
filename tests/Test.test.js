const TestComponent = require('./TestComponent.vue'),
 	{ mount } = require('@vue/test-utils');

// Test fails if Vue compat mode is specified in jest.config.js - CdxTextInput emits an Input event as its updated
// model value, rather than the inputted text. Test succeeds if compat mode isn't specified.
it( 'Component containing CdxTextInput receives event correctly', async () => {
	const wrapper = mount(TestComponent);
	wrapper.get('input').setValue('inputted value');
	await wrapper.vm.$nextTick();
	expect(wrapper.text()).toEqual('Value of CdxTextInput: "inputted value"');
});
