<template>
    <div>
        <v-row align="center" justify="center">
            <v-card style="margin-bottom: 30px;" class="col-8">
                <v-card-title>
                    <h1>{{article.title}}</h1>
                </v-card-title>
                <v-card-subtitle>{{new Date(article.created_on).toDateString()}}</v-card-subtitle>
                <v-card-text v-html="article.body"></v-card-text>
            </v-card>
        </v-row>
    </div>
</template>

<script>
    import axios from '@/plugins/axios'
    export default {
        async asyncData({route}) {
            let data = await axios.get(
                `https://directus.leonwolf.xyz/leonwolfxyz/items/articles/${route.params.slug}`
            );
            return { article: data.data.data }
        }

    }
</script>
