<template>
    <v-card hover align="left" justify="left" flat class="col-8">
        <v-card-title>
            <img v-if="project.logo_url != '' && project.logo_url != null" class="logo" :src="project.logo_url" :alt="project.title">
            {{ project.title }}
        </v-card-title>
        <v-card-subtitle style="margin-left: 3rem">
            <a v-if="project.github_url != '' && project.github_url != null " :href="project.github_url" target="_blank">
                <!-- Github Icon -->
                <svg class="icon-link"  viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
            </a>
            <a v-if="project.demo_url != '' && project.demo_url != null" :href="project.demo_url" target="_blank">
                <svg class="icon-link" style="" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
            </a>
            <a v-if="project.documentation_url != '' && project.documentation_url != null"
               :href="project.documentation_url" target="_blank"3>
                <svg class="icon-link" style="" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/>
                </svg>
            </a>
        </v-card-subtitle>
        <v-card-text>
            {{ project.description }}
        </v-card-text>
    </v-card>
</template>
<script>
    import axios from '@/plugins/axios'
    export default {
        name: 'projectCard',
        props: {
            project: {}
        },
        async asyncData() {
            let data = await axios.get(
                `https://directus.leonwolf.xyz/leonwolfxyz/files/${this.project.logo}`
            );
            return { logo: data}
        }
    }
</script>
<style scoped>
    .logo {
        height: 3rem;
        width: 3rem;
        margin: 0.5rem 0.5rem 0.5rem 0;
    }

    .project-icon {
        width:30px;
        height:30px;
        padding: 5px;
    }

    .icon-link:hover {
        color: #888888;
    }

    .icon-link {
        color: rgba(0, 0, 0, 0.87);
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
</style>