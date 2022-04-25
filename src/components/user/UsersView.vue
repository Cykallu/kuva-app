<script setup>
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { userService } from '../../services/userService';
import { isAuth } from '../../store';

const router = useRouter()
const {data, error, isFinished} = userService.useGetAll()
watch(isAuth,()=>{
    if (isAuth.value = null){
        router.push('/')
    }
})

</script>

<template>
<div v-if="error">Tapahtui virhe</div>
<div v-else-if="!isFinished">Ladataan</div>
<div v-else-if="data?.users">
    <div v-for="user in data.users">
        <p>{{user.username}}</p>
        <img class="prof_pic" :src="user.profile_picture" />
    </div>
</div>
</template>

<style>
.prof_pic{
    width: 100px;
    margin: 20px;
}

h1{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
p{
    text-align: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

</style>