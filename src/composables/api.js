import { createFetch } from "@vueuse/core";
import { globalState, isAuth } from "../store";
import { authService } from "../services/authService";

export const useApi = createFetch({
    baseUrl: 'https://vara.onrender.com/api',
    options: {
        beforeFetch({ options }) {
            if (isAuth.value) {
                options.headers = {
                    Authorization: `Bearer ${globalState.value.accessToken}`
                }
            }

            return { options }
        },
        async onFetchError({data,error,response}){
            if(response.status === 401 
                && data?.msg != null 
                && data.msg instanceof Array 
                && data.msg.includes("Unauthorized")
                ){
                authService.useLogout()
            }
        }
    }
})