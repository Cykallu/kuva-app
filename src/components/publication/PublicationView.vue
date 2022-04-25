<script setup>
defineProps({
    publication: Object
})
</script>

<template>
    <h1>{{  publication.title }}</h1>
    <img :src="publication.url" />
    <p>{{ publication.owner ? publication.owner.username : 'Anonymous' }}</p>
</template>

<style>
img {
    width: 400px;
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