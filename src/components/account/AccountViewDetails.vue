<script setup>
import {accountService} from '../../services/accountService'
import AccountView from './AccountView.vue';
import { isAuth } from '../../store';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const router = useRouter()
watch(isAuth,()=>{
    if (isAuth.value = null){
        router.push('/')
    }
})

const props = defineProps({
    accountId:String
})
const { data, error, isFinished } = accountService.useGetAccount(props.accountId)


</script>

<template>
    <div v-if="error">Tapahtui virhe</div>
    <div class="spinner" v-else-if="!isFinished">Ladataan...</div>
    <div v-else-if="data?.account">
        <div class="center">
            <AccountView :account="data.account"></AccountView>
            
        </div>
    </div>
</template>

<style scoped>
.center {
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