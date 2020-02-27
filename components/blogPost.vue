<template>
    <v-card hover flat width="200px" class="blogPost">
        <v-card-title>
            {{ article.title }}
        </v-card-title>
        <v-card-subtitle>
            {{ article.created_at }}
        </v-card-subtitle>
        <v-card-text v-if="article"> {{excerpt}}</v-card-text>
        <v-card-text v-else>FOO</v-card-text>
        <v-card-actions>
            <nuxt-link :to="'/blog/post/' + article.slug">
                <v-btn
                        text
                        color="deep-grey accent-4"
                >
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
                return this.article.content.substring(0, 111) + '...'
            }
        },
        props: ['article', 'users']
    }
</script>
<style>
    .blogPost {
        margin: 10px;
    }
</style>
