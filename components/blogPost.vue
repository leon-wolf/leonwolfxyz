<template>
  <v-layout>
    <v-flex xs12 sm8 md6>
      <v-card class="blogPost">
        <v-card-title>
          {{ article.heading }}
        </v-card-title>
        <v-card-subtitle>
          {{ user.first_name }} {{ user.last_name }}
        </v-card-subtitle>
        <v-card-text v-html="article.content">
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  name: 'blogPost',
  computed: {
    user: function() {
      return this.users.find(user => user.id === this.article.created_by)
    }
  },
  props: [
    'article',
    'users'
  ]
}
</script>
<style>
  .blogPost {
    margin-bottom: 10px;
  }
</style>
