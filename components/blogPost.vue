<template>
  <v-card class="blogPost hoverShadow" outlined>
    <img
      :alt="article.title"
      :src="article.head_img.data.full_url"
      class="blogPostImage"
      v-if="article.head_img !== null"
    />
    <template>
      <h1 class="card-title">{{article.title}}</h1>
    </template>
    <v-card-subtitle>
      {{ article.created_at }}
    </v-card-subtitle>
    <v-card-text v-if="article"> {{ excerpt }}</v-card-text>
    <v-card-text v-else>FOO</v-card-text>
    <v-card-actions>
      <nuxt-link :to="'/blog/post/' + article.slug">
        <v-btn text color="deep-grey accent-4">
          Read More
        </v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'blogPost',
    computed: {
      excerpt: function () {
        return this.article.subtitle
      }
    },
    props: ['article', 'users']
  }
</script>
<style>
  .blogPost {
    margin: 10px;
    cursor: default;
    min-width: 200px;
    max-width: 20%;
    text-align: justify;
  }

  .blogPostImage {
    max-height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .hoverShadow {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  .hoverShadow:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
    transition: all 0.3s ease-in-out;
  }


  .card-title {
    margin: auto;
    width: auto;
    padding: 0 16px 0 16px;
    align-items: center;
    hyphens: auto;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }
</style>
