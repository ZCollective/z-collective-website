<template>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center align-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Alternative Contact</div>
                </v-card-title>
                <v-card-text class="layout justify-center">
                  More traditional means of contact and other general information
                </v-card-text>
                <v-list class="transparent">
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="accent--text">{{markerIcon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Leonberg, Germany</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="accent--text">{{emailIcon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>contact@zcollective.de</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="accent--text">{{phoneIcon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>Available Soon</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</template>
<script>
import { mdiMapMarker, mdiEmail, mdiPhone, mdiFax } from '@mdi/js'
export default {
  data: () => {
    return {
      emailIcon: mdiEmail,
      markerIcon: mdiMapMarker,
      phoneIcon: mdiPhone,
      faxIcon: mdiFax
    }
  }
}
</script>
