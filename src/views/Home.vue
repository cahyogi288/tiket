<template>
    <v-app>
      <AppBar />
      <router-view></router-view>
    </v-app>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import AppBar from './AppBar.vue'

export default {
  components: {
    HelloWorld,
    AppBar,
  }
}
</script>
