<script setup>
import PublicationView from './PublicationView.vue';
import { useRouter } from 'vue-router';
import { publicationService } from '../../services/publicationService';
const router = useRouter()
const { data, error, isFinished } = publicationService.useGetAll()
</script>

<template>
    <div v-if="error">Valitettavasti postauksia ei ollut juuri nyt saatavilla</div>
    <div class="spinner" v-else-if="!isFinished">Ladataan...</div>
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
    background: rgb(49, 49, 49);
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

.spinner {
    position: relative;
    width: 80px;
    height: 80px;  
    border-radius: 50px;
  }
 
.spinner:before, .spinner:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }
 
.spinner:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ffffff 0%, #8a8a8a 50%, #333333 100%);
    animation: spin 1.0s infinite linear;
  }
 
.spinner:after {
    width: 70%;
    height: 70%;
    background-color: #000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 
@keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>