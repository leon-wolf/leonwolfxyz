<template>
    <v-layout
            justify-center
            align-center
    >
        <v-flex
                xs12
                sm10
                md8
        >
            <v-row
                    v-for="project in projects"
                    :key="project.slug"
                    justify="center"
            >
                <projectCard class="col-10" style="margin: 0.5rem;" :project="project"/>
            </v-row>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from '@/plugins/axios'
    import ProjectCard from "../../components/ProjectCard";

    export default {
        name: 'projects',
        components: {ProjectCard},
        data() {
            return {
            }
        },
        async asyncData() {
            let data = await axios.get(
                'https://directus.leonwolf.xyz/leonwolfxyz/items/projects?status=published'
            )
            return {projects: data.data.data}
        }
    }
</script>

<style scoped lang="css">
</style>