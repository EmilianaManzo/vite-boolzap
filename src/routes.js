import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            //nome della rotta
            name: 'home',
            component: Home
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: Error404
        },

    ]
})

export { router }