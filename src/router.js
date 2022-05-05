import { createRouter, createWebHistory } from 'vue-router'
import PublicationViewAll from './components/publication/PublicationViewAll.vue'
import UsersViewAll from './components/user/UsersViewAll.vue'
import UserViewDetails from './components/user/UserViewDetails.vue'
import PublicationCreate from './components/publication/PublicationCreate.vue'
import PublicationViewDetails from './components/publication/PublicationViewDetails.vue'
import RegisterForm from './components/login/RegisterForm.vue'
import AccountViewDetails from './components/account/AccountViewDetails.vue'

import { isAuth } from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Julkaisut',
            component: PublicationViewAll
        },
        {
            path: '/users',
            name: 'Käyttäjät',
            component: UsersViewAll
        },
        {
            path:'/users/:userId',
            props: true,
            name:'Yksittäinen käyttäjä',
            component: UserViewDetails
        },
        {
            path: '/create',
            name: 'Uusi Postaus',
            component: PublicationCreate
        },
        {
            path: '/publication/:publicationId',
            props: true,
            name: 'Yksittäinen postaus',
            component: PublicationViewDetails
        },
        {
            path: '/register',
            name: 'Rekisteröidy',
            component: RegisterForm
        },
        {
            path:'/account',
            name:'Oma tili',
            component: AccountViewDetails
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path == '/users' && !isAuth.value){
    next('/')
    } else {
        next()
    }
})

export {router}