<script setup>
import UsersView from './UsersView.vue';
import { useRouter } from 'vue-router';
import { userService } from '../../services/userService';

const router = useRouter()
const { data, error, isFinished } = publicationService.useGetAll()
watch(isAuth,()=>{
    if (isAuth.value){

        router.push('/')
    }
</script>

<template>
    <div v-if="error">Valitettavasti postauksia ei ollut juuri nyt saatavilla</div>
    <div v-else-if="!isFinished">Ladataan...</div>
    <template v-else>
        <div
            @click="router.push('/users/' + user._id)"
            class="item"
            v-for="user in data.users"
        >
            <UsersView :user="user"></UsersView>
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
</style>