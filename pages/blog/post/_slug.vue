<template>
  <div>
    <v-row align="center" justify="center">
      <v-card class="col-8 card" style="margin-bottom: 30px;">
        <img
          :alt="article.title"
          :src="article.head_img.data.full_url"
          class="blogPostImage"
          v-if="article.head_img !== null"
        />
        <template>
          <h1 class="card-title">{{article.title}}</h1>
        </template>
        <v-card-subtitle>{{new Date(article.created_on).toDateString()}}</v-card-subtitle>
        <v-card-text class="blogPostBody" id="text" ref="text" v-html="article.body"></v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
  import axios from '@/plugins/axios'

  export default {
    async asyncData({route}) {
      let data = await axios.get(
        `https://directus.leonwolf.xyz/leonwolfxyz/items/articles/${route.params.slug}?fields=*.*`
      );
      return {article: data.data.data}
    },
    head () {
      return {title: this.article.title}
    },
    mounted: function () {
      console.info("now");
      console.info(this.$refs['text'].getElementsByTagName('img'));
      console.info("done");
    },
  }
</script>

<style lang="sass">
  .blogPostImage
    width: 100%
    height: 45vh
    object-fit: cover
    border-radius: inherit

    .v-card__text img
      left: 0
      width: 75%
      height: auto

    .v-card__title
      word-wrap: break-word !important

    .card-title
      font-size: 1.75rem
      align-items: center
      text-align: justify
      hyphens: auto


    h1
      font-size: 1.5rem

    h2
      font-size: 1.25rem
</style>
