import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#5d6250',
        secondary: '#009688',
        accent: '#3f51b5',
        error: '#ff5722',
        warning: '#ff9800',
        info: '#03a9f4',
        success: '#8bc34a'
      }
    }
  },
  icons: {
    iconfont: 'mdiSVG'
  }
})
