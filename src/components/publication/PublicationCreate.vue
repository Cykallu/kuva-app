<script>
import { computed, reactive, unref } from 'vue';
import { publicationService } from '../../services/publicationService';

//julkaisun datan määritys
const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, // tarkoittaa julkista postausta
    tags: []
})
//Datan Validointi
//const GoodExtensions = ['jpg','jpeg','gif','png','webp']
const isDataValid = computed(() => {
    const urlValidation = publicationData.url.includes('https://')
    const oldUrlValidation = publicationData.url.includes('http://')
    const descriptionValidation = publicationData.description.length < 1000
    const titleValidation = publicationData.title.length > 2
    /*let parts = publicationData.url.split(".")
    let extension = parts[parts.length - 1]
    let extensionValidation = false
    if (goodExtensions.includes(extension)) {
        extensionValidation = true
    }*/
    // const urlValidation = (newUrlValidation || oldUrlValidation) && extensionValidation
    return {
        urlValidation: urlValidation ? "OK" : "Vain https-osoitteet sallittu",
        descriptionValidation: descriptionValidation ? "OK" : "Liian pitkä kuvaus",
        titleValidation: titleValidation ? "OK" : "Liian lyhyt otsikko",
        isAllValid: urlValidation && descriptionValidation && titleValidation && oldUrlValidation 
    }
})
//Uuden julkaisun luonti
const createNewPublication = async () => {
    if (!isDataValid.value.isAllValid) return
    const { data, error } = await publicationService.usePost(publicationData)
    if (data.value && !error.value) {
        publicationData.title = ''
        publicationData.description = ''
        publicationData.url = ''
    }
}


</script>

<template>
    <div class="publication-form">
        <label> otsikko </label>
        <small class="errorMessage" >{{isDataValid.titleValidation}}</small>
        <input v-model="publicationData.title" type="text">
        <label> kuvaus </label>
        <small class="errorMessage" >{{isDataValid.descriptionValidation}}</small>
        <input v-model="publicationData.description" type="text">
        <label> URL </label>
        <small class="errorMessage" >{{isDataValid.urlValidation}}</small>
        <input v-model="publicationData.url" type="text">
    </div>
    
</template>

<style>
.errorMessage{
    color: red;
}
.publication-form {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
}
</style>
