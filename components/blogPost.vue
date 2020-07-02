<template>
  <v-card outlined width="15%" class="blogPost hoverShadow">
    <img
        class="blogPostImage"
        :alt="article.title"
        :src="article.head_img.data.full_url"
        v-if="article.head_img !== null"
    />
    <v-card-title>
      {{ article.title }}
    </v-card-title>
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
  }

  .blogPostImage {
    max-height: 200px;
    width: 100%;
  }

  .hoverShadow {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  .hoverShadow:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
    transition: all 0.3s ease-in-out;
  }
</style>
