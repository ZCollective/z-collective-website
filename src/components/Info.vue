<template>
<v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">Welcome to the Z-Collective</h2>
              <span class="subheading">
                We make projects real
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="accent--text">mdi-account-group</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Who we are</div>
                    </v-card-title>
                    <v-card-text>
                      We are a group of people who have always had a passion for our own software projects.
                      We decided to create this organization to better publish our projects and carry our mission into the world.<br/>
                      We aim to create high quality software that improves the lives of its users.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="accent--text">mdi-devices</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">What we can do</div>
                    </v-card-title>
                    <v-card-text>
                      We have a collective experience of multiple applications.
                      From basic Apps, over websites all the way to big scalable software systems capable of processing large amounts of data.
                      We can also offer multiple languages including Java, Javascript, Kotlin and Python.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="accent--text">mdi-projector-screen</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Existing Projects</div>
                    </v-card-title>
                    <v-card-text>
                      If you want to take a look at our existing projects feel free to go ahead. We have published multiple Android apps under our
                      Developer name 'Z-Collective'. Links to our open source projects will follow soon!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
</template>
<script>
export default {

}
</script>
