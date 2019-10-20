<template>
  <v-parallax :src="require('../assets/backgrounds/hero_background.png')" height="600">
    <v-layout
      column
      align-center
      justify-center
    >
      <img :src="require('../assets/logo_text.png')" alt="Z-Collective" height="300" />
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
