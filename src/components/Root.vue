<template>
  <div id="main" class="pure-g">
    <div class="pure-u-1">
      <Buttons></Buttons>
      <div v-if="this.$store.state.punches">
        <PunchSummary></PunchSummary>
      </div>
      <div v-else>
        <p>Punch in to get started!</p>
      </div>
    </div>
  </div>
</template>

<script>
import DateTime from './DateTime.vue';
import Buttons from './Buttons.vue';
import PunchSummary from './Summary.vue';

export default {
  name: 'Root',
  components: {
    Buttons,
    PunchSummary
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
