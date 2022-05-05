import { set } from "@vueuse/core/node_modules/vue-demi"
import { useApi } from "../composables/api"
import { setError, setSucc } from "../composables/Notifications"
import { globalState } from "../store"

export const authService = {
    async useLogin(payload) {
        const { data, error } = await useApi('/login').post(payload).json()

        if (data.value && !error.value) {
            setSucc("Kirjautuminen onnistui")
            globalState.value.accessToken = data.value.access_token
        }
    },

    async useLogout() {
        // logout endpoint ei palauta mitään muuta kuin statuksen 
        // 200 vastaukseksi joten .json() metodia ei käytetä.

        const { error } = await useApi('/logout').post()
        if (error.value) {
            setError("Virhe")
        }
        
            globalState.value.accessToken = null
            setSucc("Sinut on kirjattu ulos")
        
    },
    
    async useRegister(payload){
        return useApi('/register').post(payload).json()
    }

}