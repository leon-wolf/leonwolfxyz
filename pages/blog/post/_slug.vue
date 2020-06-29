<template>
    <div>
        <v-row align="center" justify="center">
            <v-card style="margin-bottom: 30px;" class="col-8">
                <img
                    class="blogPostImage"
                    :alt="article.title"
                    :src="article.head_img.data.full_url"
                    v-if="article.head_img !== null"
                />
                <v-card-title>
                    <h1>{{article.title}}</h1>
                </v-card-title>
                <v-card-subtitle>{{new Date(article.created_on).toDateString()}}</v-card-subtitle>
                <v-card-text ref="text" id="text" class="blogPostBody" v-html="article.body"></v-card-text>
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
            return { article: data.data.data }
        },
        mounted: function() {
            console.info("now");
            console.info(this.$refs['text'].getElementsByTagName('img'));
            console.info("done");
        },
    }
</script>

<style lang="css">
    .blogPostImage {
        max-width: 100%;
    }
    .v-card__text img {
        left: 0px;
        width: 75%;
      height: auto;
    }
</style>
