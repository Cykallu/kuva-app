<script setup>
import { computed, reactive, ref } from 'vue';
import { authService } from '../../services/authService';



const RegisterData = reactive({
        username:'',
        password:'',
        email:''
})
const confirmPassword = ref('')

const regSucc = ref(false)

const isRegisterDataValid= computed(() => {
    const passwordValidation = RegisterData.password.length < 1000 && RegisterData.password.length > 6
    const emailValidation = RegisterData.email.includes('@')
    const passwordMatchValidation = RegisterData.password == confirmPassword
    const usernameValidation = RegisterData.username.length < 20 && RegisterData.username.length > 3
    return {
        passwordValidation: passwordValidation ? 'OK' : 'Salasana oltava 6 - 1000 merkkiä pitkä',
        usernameValidation:usernameValidation ? 'OK' : 'Käyttäjänimi oltava 3 - 20 merkkiä',
        emailValidation: emailValidation ? 'OK' : 'Sähköposti ei kelpaa',
        passwordMatchValidation: passwordMatchValidation ? 'OK' : 'Salasanat eivät vastaa toisiaan',
        isAllValid: passwordValidation && emailValidation && usernameValidation
    }
})
const register = async () => {
    const { data, error } = await authService.useRegister(RegisterData)
    if (data.value && !error.value) {
        regSucc.value = true
    }
}
</script>



<template>
<div class="register_form">
    <div v-if="regSucc">Rekisteröityminen onnistui</div>
    <form class="register_form" v-else @submit.prevent="register">
        
        <label>Sähköposti</label>
        <input v-model="RegisterData.email" type="email">
        <small>{{isRegisterDataValid.emailValidation}}</small>
        
        
        <label>Käyttäjänimi</label>
        <input v-model="RegisterData.username" type="text">
        <small>{{isRegisterDataValid.usernameValidation}}</small>

        <label>Salasana</label>
        <input v-model="RegisterData.password" type="password">
        <small>{{ isRegisterDataValid.passwordValidation }}</small>
       
        <label>Salasana vahvistus</label>
        <input v-model="confirmPassword" type="password">
        <small>{{ isRegisterDataValid.passwordMatchValidation }}</small>
        
        <button :disabled="!isRegisterDataValid.isAllValid" type="submit">Lähetä</button>
        
    </form>
</div>
</template>



<style>
.register_form{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    justify-content: space-evenly;
    width: 200px;
    color: white;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: large;
    text-align: center;
    
}
input{
    border-radius: 4px;
    height: 30px;
}
button:disabled{
    background-color: grey;
    color: grey;
    border-color: grey;
}

</style>