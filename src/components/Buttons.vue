<template>
	<div id="buttons" class="pure-g">
		<div class="pure-u-sm-1">
			<md-button class="md-primary" @click.native="punchIn">Punch In</md-button>
			<md-button @click.native="breakOut">Break (Out)</md-button>
			<md-button @click.native="breakIn">Break (In)</md-button>
			<md-button class="md-primary" @click.native="punchOut">Punch Out</md-button>
		</div>

		<md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
	    <span style="text-align: center">{{ message }}</span>
	    <md-button class="md-dense" md-theme="light-blue" @click.native="$refs.snackbar.close()">Close</md-button>
  	</md-snackbar>
	</div>
</template>

<script>
import { getDate, getTime, formatDate } from '../util';
import db from '../db';

export default {
  name: 'Buttons',
  firebase: {
  	punches: db.ref('punches/' + formatDate(getDate()))
  },
  data() {
  	return {
  		vertical: 'top',
    	horizontal: 'center',
    	duration: 2000,
    	message: ''
  	};
  },
  methods: {
  	open: function() {
      this.$refs.snackbar.open();
    },
  	punchIn: function() {
  		this.$store.commit('punchIn', getTime());
  		this.$firebaseRefs.punches.push({ type: 'punchIn', time: getTime() });
  		this.message = 'You have successfully punched in!';
  		this.open();

  	},
  	breakOut: function() {
  		this.$store.commit('breakOut', getTime());
  		this.$firebaseRefs.punches.push({ type: 'breakOut', time: getTime() });
  		this.message = 'Enjoy your break!';
  		this.open();

  	},
  	breakIn: function() {
  		this.$store.commit('breakIn', getTime());
  		this.$firebaseRefs.punches.push({ type: 'breakIn', time: getTime() });
  		this.message = 'Welcome back from break!';
  		this.open();

  	},
  	punchOut: function() {
  		this.$store.commit('punchOut', getTime());
  		this.$firebaseRefs.punches.push({ type: 'punchOut', time: getTime() });
  		this.message = 'Have a good day!';
  		this.open();
  	}
  }
};
</script>

<style lang="css" scoped>

	button {
		cursor: pointer;
		width: 140px;
		height: 40px;
	}

	button,
	#buttons {
		margin: 20px auto;
	}
</style>