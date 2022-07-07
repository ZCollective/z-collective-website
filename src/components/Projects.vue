<template>
        <v-row justify="center" class="my-2">
          <v-timeline dense>
            <v-timeline-item
              v-for="entry in entries"
              :key="entry.id"
              :icon="entry.icon"
              color="primary lighten-2"
            >
              <v-card max-width="600" class="mr-16">
                <v-card-title>{{ entry.title }}</v-card-title>
                <v-card-text v-html="entry.description"> </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <div v-for="link in entry.links" :key="link.url">
                    <v-btn
                      small
                      color="secondary lighten-1"
                      class="mx-2"
                      :href="link.url"
                      >
                      <v-icon class="mr-2" v-if="link.icon !== undefined">{{ link.icon }}</v-icon>
                      {{ link.name }}</v-btn
                    >
                  </div>
                </v-card-actions>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-row>
</template>

<script>
export default {
  data () {
    return {
      entries: [
        {
          id: 0,
          title: 'Git Push-it-to-the-limit',
          icon: 'mdi-source-branch',
          description: `Our very first project was born after listening to the song from Scarface: "Push it to the Limit". We decided it would be a fun project to
          attempt and make git play a random song-sample every time you ran "git push". Of course all snippets contain the word "push"!`,
          links: [
            {
              url: 'https://github.com/ZCollective/git-push-it-to-the-limit',
              name: 'Source',
              icon: 'mdi-github'
            }
          ]
        },
        {
          id: 1,
          title: 'I Never',
          icon: 'mdi-dice-multiple',
          description: `As the first try we have created a german version of the often 
          played party game:  I never...<br/> It was a great experience to work on something one can consider as a game, 
          and it was a good excercise in staying active with Android development. We have published the app on the android play store under the ZCollective name`,
          links: [
            {
              url: 'https://play.google.com/store/apps/details?id=de.michael_zigldrum.ich_hab_noch_nie',
              name: 'Playstore',
              icon: 'mdi-android'
            },
            {
              url: 'https://github.com/ZCollective/Inever-Backend',
              name: 'Backend',
              icon: 'mdi-github'
            },
            {
              url: 'https://github.com/ZCollective/Inever-Android',
              name: 'App',
              icon: 'mdi-github'
            }
          ]
        },
        {
          id: 2,
          title: 'ZCollective Website',
          icon: 'mdi-web',
          description: `With more projects being started between us, we decided it would be a good idea to present ourselves online so we could show our projects.
          We built the website using Vue.js and Vuetify. It was important for us to brand it with the Z-Collective logo and colors.`,
          links: [
            {
              url: 'https://github.com/ZCollective/z-collective-website',
              name: 'Source',
              icon: 'mdi-github'
            }
          ]
        },
        {
          id: 3,
          title: 'Magic Mirror Project',
          icon: 'mdi-hammer',
          description: `To widen our horizons and step into hardware projects we are currently working on a magic mirror.<br/>
          This is a one-way mirror, where a screen is hidden on the other side. Information about your day, or other
           interesting things can be displayed. Through a proximity sensor the mirror will turn on whenever someone is close enough to see its contents.`,
          links: [
            {
              url: 'https://github.com/ZCollective/magic-mirror-server',
              name: 'Server',
              icon: 'mdi-github'
            },
            {
              url: 'https://github.com/ZCollective/magic-mirror-ui',
              name: 'UI',
              icon: 'mdi-github'
            },
            {
              url: 'https://github.com/ZCollective/magic-mirror-app',
              name: 'App',
              icon: 'mdi-github'
            }
          ]
        },
        {
          id: 4,
          title: 'Account Analyzer',
          icon: 'mdi-chart-bar',
          description: `During covid we spent more time at home and therefore had more time to think about budgets, costs and our financials. To get a better overview of the monthly expenses we built
          the account analyzer! It is built to parse banking data exported from your online banking. It will visualize statistics about earnings and expenses.
          And the best thing? It's doing it all on the client side! No privacy issues from this code! You can view a demo below!`,
          links: [
            {
              url: 'https://github.com/ZCollective/Account-Analyzer',
              name: 'Source',
              icon: 'mdi-github'
            },
            {
              url: 'https://zcollective.de/',
              name: 'Demo',
              icon: 'mdi-eye'
            }
          ]
        }
      ]
    }
  }
}
</script>
