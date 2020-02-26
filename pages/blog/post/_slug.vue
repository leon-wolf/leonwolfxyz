<template>
    <div>
        <v-row align="center" justify="center">
            <v-card flat class="col-8">
                <v-card-title>
                    {{article.heading}}
                </v-card-title>
                <v-card-text v-html="article.content"></v-card-text>
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