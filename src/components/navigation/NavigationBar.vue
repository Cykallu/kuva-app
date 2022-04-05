<script setup>
import { provide, ref } from 'vue';
import { RouterLink } from 'vue-router'
import { authService } from '../../services/authService';
import { isAuth } from '../../store';
import LoginView from '../login/LoginView.vue';
const showLoginView = ref(false)
provide('showLoginView', showLoginView)
</script>

<template>
    <div class="nav">
        <router-link to="/">Koti</router-link>
        <router-link to="/create">Uusi</router-link>
        <router-link to="/users">Käyttäjät</router-link>
        <a href="#" v-if="!isAuth" @click="showLoginView = !showLoginView">Kirjaudu</a>
        <a href="#" @click="authService.useLogout()" v-else>Ulos</a>
    </div>

    <LoginView v-if="showLoginView && !isAuth"></LoginView>
</template>

<style>
.nav {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0px;
}
a {
    margin: 20px;
    font-size: 18px;
}
</style>