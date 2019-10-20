<template>
  <v-parallax :src="require('../assets/backgrounds/hero_background.png')" height="380">
    <v-layout column align-center justify-center>
      <div class="headline primary--text mb-4 text-center">You want to know more? Contact us!</div>
      <em class="primary--text">Click the button below to send an email</em>
      <v-btn
        class="mt-12"
        color="primary lighten-2"
        dark
        large
        href="mailto:contact@zcollective.de"
      >
      Contact
      </v-btn>
    </v-layout>
  </v-parallax>
</template>
<script>
export default {
}
</script>
