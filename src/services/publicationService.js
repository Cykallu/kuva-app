import { useApi } from "../composables/api"

export const publicationService = {

    useGetById(publicationId) {
        return useApi(`/publications/${publicationId}`).json()
    },

    useGetAll() {
        return useApi('/publications').json()
    },

    usePost(payload) {
        return useApi('/publications').post(payload).json()
    }

}