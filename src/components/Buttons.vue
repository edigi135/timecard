<template>
	<md-card id="buttons">
		<md-button class="md-raised md-primary">Punch In</md-button>
		<md-button class="md-raised">Lunch (out)</md-button>
		<md-button class="md-raised">Lunch (in)</md-button>
		<md-button class="md-raised md-accent">Punch Out</md-button>
	</md-card>
</template>

<script>
export default {

  name: 'Buttons',
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

	button {
		display: block;
		width: 150px;
		height: 40px;
		margin: 20px 0;
	}

	button,
	#buttons {
		margin-left: auto;
		margin-right: auto;
	}
</style>