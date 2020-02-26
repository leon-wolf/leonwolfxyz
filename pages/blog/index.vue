<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" class="" v-for="i in Math.ceil(articles.length / 3)" :key="i">

      <blog-post
        v-for="article in articles.slice((i - 1) * 3, i * 3)"
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
      'https://directus.leonwolf.xyz/leonwolfxyz/items/articles?status=published'
    );
    return { articles: data.data.data }
  }
}
</script>
