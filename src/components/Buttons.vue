<template>
	<div id="buttons">
		<md-button @click.native.once="punchIn">Punch In</md-button>
		<md-button @click.native="breakOut">Break (Out)</md-button>
		<md-button @click.native="breakIn">Break (In)</md-button>
		<md-button @click.native.once="punchOut">Punch Out</md-button>
	</div>
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
		cursor: pointer;
		width: 150px;
		height: 40px;
	}

	button,
	#buttons {
		margin: 20px auto;
	}
</style>