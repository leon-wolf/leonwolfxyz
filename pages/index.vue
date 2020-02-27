<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-row align="center" justify="center">
        <v-card flat>
          <v-card-title class="headline typewriter">
            <h1>Hi. I develop awesome Software.</h1>
          </v-card-title>
          <v-card-actions>
            <v-spacer/>
            <v-btn
                    color="primary"
                    nuxt
                    to="/projects"
            >
              Projects
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style>
  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation:
            typing 2.5s steps(40, end),
            blink-caret .75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #47494e; }
  }
</style>
