<script setup>
import { computed, reactive, ref } from 'vue';
import { publicationService } from '../../services/publicationService';

const previewCanvas = ref(null)
const dataUrl = ref('')

const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, 
    tags: []
})

const dataUrlSize = computed(() => {
    return (dataUrl.value.length / 1000).toFixed(2)
})

const isDataValid = computed(() => {
    const urlValidation = publicationData.url.includes('https://')
    const descriptionValidation = publicationData.description.length < 1000 && publicationData.description.length > 0
    const titleValidation = publicationData.title.length > 2
    const dataUrlValidation = dataUrlSize.value < 200
    
    return {
        urlValidation: urlValidation ? 'OK' : 'Vain https osoitteet ovat sallittu',
        descriptionValidation: descriptionValidation ? 'OK' : 'Kuvauksen teksti on liian pitkä',
        titleValidation: titleValidation ? 'OK' : 'Otsikon täytyy olla ainakin kolme merkkiä pitkä',
        dataUrlValidation: dataUrlValidation ? 'OK' : 'max 200Kt',
        isAllValid: (urlValidation || dataUrlValidation) && descriptionValidation && titleValidation
    }
})

const createNewPublication = async () => {
    if (!isDataValid.value.isAllValid) return
    const publication = {
        title: publicationData.title,
        description: publicationData.description,
        url: publicationData.url == '' ? dataUrl.value : publicationData.url,
        visibility: 2, 
        tags: []
    }
    const { data, error } = await publicationService.usePost(publication)
    if (data.value && !error.value) {
        publicationData.title = ''
        publicationData.description = ''
        publicationData.url = ''
    }
}
const fileUpload = (event) => {
    const { name, size, type } = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        const image = new Image()
        image.onload = () => {
            previewCanvas.value.width = image.width
            previewCanvas.value.height = image.height
            const ctx = previewCanvas.value.getContext('2d')
            ctx.drawImage(image, 0, 0)
            dataUrl.value = previewCanvas.value.toDataURL('image/jpeg', 5)
            console.log(dataUrl.value)
        }
        image.src = e.target.result
    }
    reader.readAsDataURL(event.target.files[0])
}


</script>

<template>
    <div class="publication-form">
        <label>Otsikko</label>
        <input v-model="publicationData.title" type="text" />
        
        <small>{{ isDataValid.titleValidation }}</small>
        
        <label>Kuvaus</label>
        <input v-model="publicationData.description" type="text" />
        <small>{{ isDataValid.descriptionValidation }}</small>
        
        <label>URL</label>
        <input v-model="publicationData.url" type="text" />
        <small>{{ isDataValid.urlValidation }}</small>
        
        <label>Kuva tiedosto {{ dataUrlSize }} Kt </label>
        <input type="file" @change="fileUpload" />

        <canvas ref="previewCanvas"></canvas>
        
        
        <button :disabled="!isDataValid.isAllValid" @click="createNewPublication">Lähetä</button>
    </div>
</template>

<style scoped>
.publication-form {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
    color: white;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: large;
}

</style>