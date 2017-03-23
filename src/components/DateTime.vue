<template>
	<div>
		<p>{{ date }}</p>
		<p
			class="time"
			style="cursor: pointer" 
			@click="isMilitary = !isMilitary">
			{{ time }}{{ ampm }}
		</p>
	</div>
</template>

<script>
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
	  		
	  		// Left-pad numbers < 10 with 0
	  		if (min < 10) min = '0' + min;
	  		if (sec < 10) sec = '0' + sec;
	  		
	  		// Set this.time to result
	  		self.time = `${ hour }:${ min }:${ sec }`
  		}, 100);
  	},
  	amOrpm: function() {
  		let self = this;
  		let theHour = new Date().getHours();

  		// Set this.data.ampm
  		return self.ampm = theHour > 11 ? 'pm' : 'am';
  	},
  	getDate: function() {
  		let self = this;

  		let day = new Date().getDay();
  		let month = new Date().getMonth();
  		let date = new Date().getDate();
  		let year = new Date().getFullYear();

  		const week = [
  			'Sunday',
  			'Monday',
  			'Tuesday',
  			'Wednesday',
  			'Thursday',
  			'Friday',
  			'Saturday'
  		];

  		const months = [
  			'January',
  			'February',
  			'March',
  			'April',
  			'May',
  			'June',
  			'July',
  			'August',
  			'September',
  			'October',
  			'November',
  			'December'
  		];

  		// Set this.date
  		self.date = `${ week[day] }, ${ months[month] } ${ date } ${ year }`;
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
	.time {
		font-size: 3em;
		margin-top: 0px;
		display: inline-block;
	}
</style>
