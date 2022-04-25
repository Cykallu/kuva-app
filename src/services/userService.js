import { useApi } from "../composables/api"

export const userService = {
    useGetById(userId) {
        return useApi(`/users/${userId}`).json()
    },
    
    useGetAll() {
        return useApi('/users').json()
    }
}