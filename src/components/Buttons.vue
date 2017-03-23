<template>
	<md-card id="buttons">
		<button @click="punchIn">Punch In</button>
		<button @click="breakOut">Break (Out)</button>
		<button @click="breakIn">Break (In)</button>
		<button @click="punchOut">Punch Out</button>
	</md-card>
</template>

<script>
import { getTime } from '../util';
export default {
  name: 'Buttons',
  methods: {
  	punchIn: function() {
  		this.$store.commit('punchIn', getTime());
  	},
  	breakOut: function() {
  		this.$store.commit('breakOut', getTime());
  	},
  	breakIn: function() {
  		this.$store.commit('breakIn', getTime());
  	},
  	punchOut: function() {
  		this.$store.commit('punchOut', getTime());
  	}
  }
};
</script>

<style lang="css" scoped>

	button {
		display: block;
		width: 150px;
		height: 40px;
	}

	button,
	#buttons {
		margin: 20px auto;
	}
</style>