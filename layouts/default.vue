<template>
  <v-app>
    <v-app-bar dense flat color="white" light app>
      <nuxt-link to="/" class="header">
        <v-toolbar-title style="color: rgba(0,0,0,0.87)"
          >Leon Wolf</v-toolbar-title
        >
      </nuxt-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <nuxt-link
          class="menu-item-1 menu-item"
          text
          to="/projects"
          prefetch
          :active="$nuxt.$route.path === '/projects'"
        >
          <v-btn :ripple="false" text>Projekte</v-btn>
        </nuxt-link>
        <nuxt-link
          class="menu-item-3 menu-item"
          text
          to="/blog"
          :active="$nuxt.$route.path === '/blog'"
        >
          <v-btn :ripple="false" text>Blog</v-btn>
        </nuxt-link>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>

      <a
        href="https://github.com/leon3103"
        style="margin-left: 1rem;color: rgba(0,0,0,0.87); text-decoration: none; text-align: -webkit-match-parent;"
      >
        <div class="svg-icon svg-baseline" style="font-size: 16px;">
          <!-- Github Icon -->
          <svg class="icon-link" style="" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          leon3103
        </div>
      </a>
      <a
        href="https://www.xing.com/profile/Leon_Wolf6"
        style="margin-left: 1rem;color: rgba(0,0,0,0.87); text-decoration: none; text-align: -webkit-match-parent;"
      >
        <div class="svg-icon svg-baseline" style="font-size: 16px;">
          <!-- XING Icon -->
          <svg class="icon-link" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4.8,3C3.8,3 3,3.8 3,4.8V19.2C3,20.2 3.8,21 4.8,21H19.2C20.2,21 21,20.2 21,19.2V4.8C21,3.8 20.2,3 19.2,3M16.07,5H18.11C18.23,5 18.33,5.04 18.37,5.13C18.43,5.22 18.43,5.33 18.37,5.44L13.9,13.36L16.75,18.56C16.81,18.67 16.81,18.78 16.75,18.87C16.7,18.95 16.61,19 16.5,19H14.47C14.16,19 14,18.79 13.91,18.61L11.04,13.35C11.18,13.1 15.53,5.39 15.53,5.39C15.64,5.19 15.77,5 16.07,5M7.09,7.76H9.1C9.41,7.76 9.57,7.96 9.67,8.15L11.06,10.57C10.97,10.71 8.88,14.42 8.88,14.42C8.77,14.61 8.63,14.81 8.32,14.81H6.3C6.18,14.81 6.09,14.76 6.04,14.67C6,14.59 6,14.47 6.04,14.36L8.18,10.57L6.82,8.2C6.77,8.09 6.75,8 6.81,7.89C6.86,7.81 6.96,7.76 7.09,7.76Z"
            />
          </svg>
          Leon Wolf
        </div>
      </a>
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
.nuxt-link-exact-active {
  text-decoration-line: underline !important;
}

.menu-item {
  text-decoration: none;
}

.v-btn.v-size--default {
  font-size: 1rem;
}

.icon-link:hover {
  color: #888888;
}

.svg-icon {
  display: inline-flex;
  align-self: center;
}

.svg-icon svg {
  height: 1.2rem;
  width: 1.2rem;
}

.svg-icon.svg-baseline svg {
  top: 0.125em;
  position: relative;
}

.icon-link {
  color: rgba(0, 0, 0, 0.87);
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.5rem;
  margin-right: 0.1rem;
}

.v-content {
  margin-top: 20px;
}

.header {
  text-decoration: none !important;
}

.v-btn {
  height: 50px;
}

.v-btn:before {
  display: none;
}
</style>
