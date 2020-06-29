<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" class="">
      <blog-post
          class="blogPost"
        v-for="article in articles"
        v-bind:key="article.slug"
        :article="article"
      ></blog-post>
    </v-row>
  </v-container>
</template>

<script>
import axios from '@/plugins/axios'
import blogPost from '@/components/blogPost'
export default {
  name: 'Blog',
  components: {
    blogPost
  },
  async asyncData() {
    let data = await axios.get(
      'https://directus.leonwolf.xyz/leonwolfxyz/items/articles?status=published&fields=*.*'
    )
    return { articles: data.data.data }
  }
}
</script>
<style>
  .blogPost {
    min-width: 200px;
  }
</style>
