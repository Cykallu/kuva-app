<script setup>
import PublicationView from './PublicationView.vue';
import { useRouter } from 'vue-router';
import { publicationService } from '../../services/publicationService';
const router = useRouter()
const { data, error, isFinished } = publicationService.useGetAll()
</script>

<template>
    <div v-if="error">Valitettavasti postauksia ei ollut juuri nyt saatavilla</div>
    <div v-else-if="!isFinished">Ladataan...</div>
    <template v-else>
        <div
            @click="router.push('/publication/' + publication._id)"
            class="item"
            v-for="publication in data.publications"
        >
            <PublicationView :publication="publication"></PublicationView>
        </div>
    </template>
    
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(41, 41, 41);
    margin: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    border-radius: 3px;
    
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>