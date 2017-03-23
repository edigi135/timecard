<template>
  <div id="main" class="pure-g">
    <div class="pure-u-1">
      <DateTime></DateTime>
      <Buttons></Buttons>
    </div>
  </div>
</template>

<script>
import DateTime from './DateTime.vue';
import Buttons from './Buttons.vue';

export default {
  name: 'Root',
  components: {
    DateTime,
    Buttons
  }
}
</script>

<style scoped>
#main {
  margin: auto;
}

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
