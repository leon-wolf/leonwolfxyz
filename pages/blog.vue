<template>
  <v-layout>
    <v-flex xs12 sm8 md6>
      <blog-post
        v-for="article in articles"
        v-bind:key="article.id"
        :article="article"
        :users="users"
      ></blog-post>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from '~/plugins/axios'
import blogPost from '../components/blogPost'
export default {
  name: 'Blog',
  components: {
    blogPost
  },
  async asyncData() {
    let data = await axios.get(
      'https://directus.leonwolf.xyz/leonwolfxyz/items/articles?status=published'
    );
    let userData = await axios.get(
      'https://directus.leonwolf.xyz/lenonwolfxyz/users'
    );
    return { articles: data.data.data, users: userData.data.data }
  }
}
</script>
