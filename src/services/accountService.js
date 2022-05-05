import { useApi } from "../composables/api"

export const accountService = {

    useGetAccount(){
        return useApi('/account').json()
    },
    
    changePassword(){
        return useApi('/account/password')
    }
}