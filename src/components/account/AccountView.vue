<script setup>
import { RouterLink } from 'vue-router';


defineProps({
    account: Object
})
</script>

<template>
    
        <img :src="account.profile_picture" />
        <h1>{{account.username}}</h1>
        <p>{{account.email}}</p>
        <router-link to="/account/password">Vaihda salasanasi</router-link>
</template>

<style scoped>

img {
    width: 200px;
    height: 200px;
    margin: 20px;
    border: 2px;
    border-style: dashed;
    border-color: white;
}
h1{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
p{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

</style>