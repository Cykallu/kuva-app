<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue';
import { authService } from '../../services/authService';
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
            
            </form>


      
    </div>
</template>

<style>
.login {
    width: 250px;
    padding: 20px;
    background-color: aquamarine;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-wrap: wrap;
}
input {
    margin-bottom: 10px;
    flex: 6;
    /* width: 80%; */
}
label {
    flex: 6;
}
/* .overlay {
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: flex-start;
    top: 30%;
} */
</style>