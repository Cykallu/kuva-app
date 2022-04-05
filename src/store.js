import { computed, reactive } from "vue";

export const globalState = reactive({
    accessToken: null,
})

export const isAuth = computed(() => globalState.accessToken != null)