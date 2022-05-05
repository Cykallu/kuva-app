<script setup>

import {getNotifications,removeNotificationByKey} from '../../composables/Notifications'



</script>

<template>
    <div class="notification">
        <template v-for="(notification,key) in getNotifications ">
            <div class="notification-item" 
            :style="{color:notification.color}"
            @click="removeNotificationByKey(key)">
                {{notification.message}}
            </div>
        </template>
    </div>
</template>






<style scoped>
.notification{
    position: fixed;
    display: flex;
    bottom: 10vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    z-index: 40;
}

.notification-item{
    background-color: rgb(53, 53, 53);
    max-width: 300px;
    cursor: pointer;
    padding: 10px;
    border: solid 2px black;
    margin: 2px;
    border-radius: 3px;
    font-size: large;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
</style>
