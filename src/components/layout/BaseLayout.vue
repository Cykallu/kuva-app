<script setup>
import NavigationBar from '../navigation/NavigationBar.vue';
</script>

<template>
    <div class="nav-bar">
        <NavigationBar></NavigationBar>
    </div>
    <div class="container center">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
    justify-content: center;
    background-color: black;
}

</style>