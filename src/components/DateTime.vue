<template>
	<div class="card">
		<p class="date">{{ date }}</p>
		<template v-if="!time">
			<md-spinner md-indeterminate></md-spinner>
		</template>
		<h1
			v-else
			class="time"
			style="cursor: pointer" 
			@click="isMilitary = !isMilitary">
			{{ time }}{{ ampm }}
		</h1>
	</div>
</template>

<script>
import { week, months } from '../util';
export default {
  name: 'DateTime',
	data () {
    return {
    	date: '',
    	time: '',
    	ampm: '',
    	isMilitary: false
    };
  },
  computed: {
  	getTime: function() {
  		let self = this;

  		// Update current time
  		setInterval(function() {
	  		let hour = new Date().getHours();
	  		let min = new Date().getMinutes();
	  		let sec = new Date().getSeconds();
	  		
	  		// Define military time
	  		if (!self.isMilitary) {
	  			if (hour > 12) hour -= 12;
	  		};
	  		
	  		// Left-pad minutes and seconds < 10 with '0'
	  		if (min < 10) min = '0' + min;
	  		if (sec < 10) sec = '0' + sec;
	  		
	  		// Set this.time to result
	  		self.time = `${ hour }:${ min }:${ sec }`
  		}, 100);
  	},
  	amOrpm: function() {
  		let theHour = new Date().getHours();

  		// Set this.data.ampm
  		return this.ampm = theHour > 11 ? 'pm' : 'am';
  	},
  	getDate: function() {
  		const day = new Date().getDay();
  		const month = new Date().getMonth();
  		const date = new Date().getDate();
  		const year = new Date().getFullYear();

  		// Set this.date
  		this.date = `${ week[day] }, ${ months[month] } ${ date } ${ year }`;
  	}	
  },
  created() {
  	this.getDate;
 		this.getTime;
 		this.amOrpm;
  }
};
</script>

<style lang="css" scoped>
	.card {
		display: inline-block;
		padding: 20px 60px;
	}
	.time {
		display: inline-block;
	}
</style>
