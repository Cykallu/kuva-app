<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';
import { authService } from '../../services/authService';
import { RouterLink } from 'vue-router'

const showLoginView = inject('showLoginView')
const credentials = reactive({
    username: '',
    password: ''
})
const target = ref(null)
onClickOutside(target, () => {
    showLoginView.value = false
})
</script>

<template>
    <div class="overlay">
        

            <form ref="target" class="login" @submit.prevent="authService.useLogin(credentials)">

                <label>Käyttäjänimi</label>
                <input v-model="credentials.username" type="text">
            
            
                <label>Salasana</label>
                <input v-model="credentials.password" type="password">

                <button type="submit">Kirjaudu</button>
                <router-link to="/register" @click="showLoginView=false">Rekisteröidy</router-link>

                
            </form>


      
    </div>
</template>

<style>
.login {
    width: 300px;
    padding: 20px;
    background-color: rgb(78, 78, 78);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    border-radius: 25px;
    
}
input {
    margin-bottom: 10px;
    flex: 6;
   
}
input:hover{
    background-color: rgb(209, 202, 202);
}

label {
    flex: 6;
}
button {
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


button:before{
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
button:active {
  color: #000
}
button:active:after {
    background: transparent;
}

button:hover:before {
    opacity: 1;
}
button:after {
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