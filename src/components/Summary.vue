<template>
	<div>
		<h1>Test</h1>
		<p>{{ test() }}</p>
	</div>
</template>

<script>
import { getDate, formatDate } from '../util';
import db from '../db';
export default {
  name: 'Summary',
  firebase: {
  	punches: db.ref('punches')
  },
  methods: {
  	test: function() {
  		console.log(this.$store.state.punches)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>