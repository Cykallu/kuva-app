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
        <router-link v-if="isAuth" to="/users">Käyttäjät</router-link>
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
    padding: 10px;
    background-color: rgb(0, 0, 0);
}
a {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    padding: 15px;
    font-size: large;
    margin-right: 1px;
    box-sizing: content-box;
}


a:before{
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
a:active {
  color: #000
}
a:active:after {
    background: transparent;
}

a:hover:before {
    opacity: 1;
}
a:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

</style>
