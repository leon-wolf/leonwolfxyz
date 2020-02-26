<template>
  <v-container fill-height fluid>
    <v-row
      align="center"
      justify="center"
      class="col-8"
      v-for="project in projects"
      :key="project.slug"
    >
      <projectCard :project="project"/>
    </v-row>
  </v-container>
</template>

<script>
  import axios from '@/plugins/axios'
  import ProjectCard from "../../components/ProjectCard";

  export default {
  name: 'projects',
  components: {ProjectCard},
  data() {},
  async asyncData() {
    let data = await axios.get(
      'https://directus.leonwolf.xyz/leonwolfxyz/items/projects?status=published'
    )
    return { projects: data.data.data }
  }
}
</script>

