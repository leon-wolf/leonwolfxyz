<template>
  <v-app>
    <v-app-bar
      dense
      max-height="50px"
      color="white"
      light
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>leonwolf.xyz</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
      <nuxt-link prefetch class="menu-item-1" text to="/">Projekte</nuxt-link>
      <nuxt-link :ripple="false" class="menu-item-3" text to="/blog">Blog</nuxt-link>
    </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.v-content {
  margin-top: 20px;
}
</style>
