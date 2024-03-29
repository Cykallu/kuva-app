import { readonly, ref } from "vue";

const notificationData = ref({})

const setNotificationByType = (message, color)=>{
    const key = new Date().getTime().toString(16)
    notificationData.value[key] = {
        message: message,
        color:color
    }
    setTimeout(()=>{
        removeNotificationByKey(key)
    },5000)
}

export const setError = (errorMsg) => {
    setNotificationByType(errorMsg,'red')
}


export const setSucc = (succMsg)=>{
    setNotificationByType(succMsg,'green')
}

export const removeNotificationByKey = (key) =>{
    delete notificationData.value[key]
}

export const getNotifications = readonly(notificationData)