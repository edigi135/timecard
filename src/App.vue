<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <DateTime></DateTime>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateTime from './components/DateTime.vue';
export default {
  name: 'app',
  components: {
    DateTime
  }
}
</script>

<style>
.container-fluid {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 100px;*/
}
</style>
