<template>
	<cdx-text-input
		v-model="modelValueForCdxTextInput"
	></cdx-text-input>
	<span>Value of CdxTextInput: "{{modelValueForCdxTextInput}}"</span>
</template>

<script>
const CdxTextInput = require( '@wikimedia/codex' ).CdxTextInput;

// @vue/component
module.exports = exports = {
	compatConfig: {
   		MODE: 3
  	},
	name: 'test-component',
	components: { CdxTextInput },
	data() {
		return {
			modelValueForCdxTextInput: 'initial value'
		}
  	}
};
</script>