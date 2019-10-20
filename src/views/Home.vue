<template>
  <v-container fluid mx-0 my-0 pa-0>
    <section>
      <Hero/>
    </section>
    <section>
      <Info/>
    </section>
    <section>
      <SecondHero/>
    </section>
    <section>
      <Contact/>
    </section>
  </v-container>
</template>

<script>
import Hero from '../components/Hero'
import Info from '../components/Info'
import Contact from '../components/Contact'
import SecondHero from '../components/Second_Hero'

export default {
  components: {
    Hero, Info, Contact, SecondHero
  }
}
</script>
