<template>
  <v-app>
    <v-app-bar
      app
      inverted-scroll>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-spacer></v-spacer>
      <v-img
        class="mx-2"
        :src="require('./assets/logo.png')"
        max-height="50"
        max-width="50"
        contain
      ></v-img>
      <v-toolbar-title class="headline text-uppercase">
      <div class="company-name">Z-Collective</div>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');
.company-name {
  font-family: 'Arvo', serif;
  color: #5d6250
}

</style>
