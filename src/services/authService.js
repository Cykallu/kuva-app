import { useApi } from "../composables/api"
import { globalState } from "../store"

export const authService = {
    async useLogin(payload) {
        const { data, error } = await useApi('/login').post(payload).json()

        if (data.value && !error.value) {
            globalState.value.accessToken = data.value.access_token
        }
    },

    async useLogout() {
        // logout endpoint ei palauta mitään muuta kuin statuksen 
        // 200 vastaukseksi joten .json() metodia ei käytetä.

        const { error } = await useApi('/logout').post()
        if (!error.value) {
            globalState.value.accessToken = null
        }
    },
    
    async useRegister(payload){
        return useApi('/register').post(payload).json()
    }

}