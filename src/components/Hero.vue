<template>
  <v-parallax :src="require('../assets/backgrounds/hero_background.png')" height="600">
    <v-layout
      column
      align-center
      justify-center
    >
      <v-img :src="require('../assets/logo_text.png')" alt="Z-Collective" height="200" contain />
      <h1 class="mb-2 display-1 text-center">Welcome to the Z-Collective!</h1>
      <div class="subheading mb-4 text-center">Contact us at: contact@zcollective.de</div>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
