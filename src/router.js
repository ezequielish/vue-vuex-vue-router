/**
 * En este archivo vamos a configurar todas nuestras rutas en una instancia de vue Router
 * 
 * Las rutas se configuran en un array de objetos luego de configurar la instancia la exportamos y la llamamos en el main.js
 * 
 * - ¿Cómo llamamos rutas dinámicas?
 * 
 * - Para llamar a una ruta dinámica usamos :params dos puntos seguido del nombre de nuestro parámetro ej
 *  /movie/:id entonces el parámetro sera id
 * 
 * - ¿Cómo llamamos al parámetro desde nuestro compomente?
 * 
 * Si como en el ejemplo anterior nuestro parámetro es id podemos llamar el valor de ese params de la siguiente forma: 
 * -$router.params.id
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Films.vue')// de esta forma importamos nuestros componentes en lazy loading
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: () => import('./components/Favorites.vue')
        }
    ]

})