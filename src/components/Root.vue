<template>
  <div id="main">
    <DateTime></DateTime>
    <Buttons></Buttons>
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
  width: 50%;
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
