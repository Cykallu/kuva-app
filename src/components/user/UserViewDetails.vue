<script setup>
import { userService } from '../../services/userService';
import UsersView from './UsersView.vue';

const props = defineProps({
    userId: String
})

const {data,error,isFinished} = userService.useGetById(props.userId)
</script>

<template>
    <div v-if="error">Tapahtui virhe</div>
    <div class="spinner" v-else-if="!isFinished">Ladataan...</div>
    <div v-else-if="data?.user">
        <div class="user">
           <UsersView :user="data.user"></UsersView>
        
        </div>
    </div>
</template>

<style scoped>
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.spinner {
    position: relative;
    width: 80px;
    height: 80px;  
    border-radius: 50px;
  }
 
.spinner:before, .spinner:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }
 
.spinner:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, #ffffff 0%, #8a8a8a 50%, #333333 100%);
    animation: spin 1.0s infinite linear;
  }
 
.spinner:after {
    width: 70%;
    height: 70%;
    background-color: #000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 
@keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

</style>