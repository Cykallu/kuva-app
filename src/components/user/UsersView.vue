<script setup>
defineProps({
    user: Object
})
</script>
<template>
    <h1>{{  user.username }}</h1>
    <img :src="user.profile_picture" />
</template>


<style scoped>
img{
    width: 150px;
    height: 150px;
    margin: 20px;
}
h1{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
p{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
</style>