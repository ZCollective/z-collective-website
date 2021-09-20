<template>
  <v-row justify="center">
    <v-col>
      <v-row justify="center">
        <div class="text-center">
          <h2 class="headline">Welcome to the Z-Collective</h2>
          <span class="subheading"> We make ideas real </span>
        </div>
      </v-row>
      <v-row justify="center">
        <v-card flat class="transparent mx-8" max-width="500">
          <v-card-text class="text-center">
            <v-icon size="60" color="primary">{{ groupIcon }}</v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">Who we are</div>
          </v-card-title>
          <v-card-text>
            We are a group of people who have always had a passion for our own
            software projects. We decided to create this umbrella to better
            publish our projects and carry our ideas into the world.<br />
            We aim to create high quality software and projects that improves
            the lives of its users. Even if it is just for a laugh!
          </v-card-text>
        </v-card>
        <v-card flat class="transparent mx-8" max-width="500">
          <v-card-text class="text-center">
            <v-icon size="60" color="primary">{{ screenIcon }}</v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">Existing Projects</div>
          </v-card-title>
          <v-card-text>
            If you want to take a look at our existing projects feel free to go
            ahead. We have published multiple Android apps under our Developer
            name 'Z&#8209;Collective'. We also have some hardware projects in the
            pipeline right now.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  color="secondary" v-if="expand===null" @click="expand=0">More</v-btn>
            <v-btn v-else @click="expand=null">Less</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row>
        <v-expansion-panels v-model="expand">
          <v-expansion-panel :key="0">
            <v-expansion-panel-content>
              <Projects/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mdiDevices, mdiAccountGroup, mdiProjectorScreen } from '@mdi/js'
import Projects from './Projects.vue'
export default {
  components: { Projects },
  data: () => {
    return {
      deviceIcon: mdiDevices,
      groupIcon: mdiAccountGroup,
      screenIcon: mdiProjectorScreen,
      expand: null
    }
  }
}
</script>
