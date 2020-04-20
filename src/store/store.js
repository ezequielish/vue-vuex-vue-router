/**
 * ¿Qué es vuex?
 * 
 * Vuex es un patrón de gestión de estado de nuestra app, nos permite tener una única fuente de la verdad en una tienda centralizada para todos nuestros componentes
 * Esto nos permite tener un mayor control de nuestro estado y controlar de mejor maneras nuestras mutaciones.
 * 
 * -¿Para que nos sirve la propiedad - state?
 * 
 * En esta propiedad vamos a establecer el estado inicial de nuestra aplicacioón
 * 
 * -¿Para que nos sirve la propiedad - mutations?
 * 
 * En esta propiedad como su nombre hace referencia van las mutaciones es decir cada vez que nuestro estado se vaya a modificar lo debemos hacer mediante una mutación,
 * ej tenemos un contandor que suma y resta una cifra si va a sumar deberiamos manejar ese cambio mediante una mutación. 
 * 
 * 
 * - ¿Para que nos sirve el método  - commit?
 * 
 *  Este método nos permite ejecutar una mutación que tengamos definida por ejemplo cuando ejecutamos una acción para modificar la data podemos definir un type el cual sera una mutación
 *  cuando llamemos a este type ejecutamos commit ej:
 * 
 *    commit(TYPE, data)
 *    podemos pasar data o no
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { GET_ALL_FILMS, FILMS_LOADING, LIKE_MOVIE } from './types/fimlsTypes'
import { getAll } from '../api/movies'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      films: [],
      loading_films: false,
    },
    mutations: {
        GET_ALL_FILMS (state, payload) {
        state.films = payload
      },
      FILMS_LOADING(state, payload){
        state.loading_films = payload
      },
      LIKE_MOVIE(state, payload){       
        if(localStorage.getItem(payload) === null){
            localStorage.setItem(payload,  true)            
        }else{
          const like = JSON.parse(localStorage.getItem(payload));
          localStorage.setItem(payload, !like);
          
        }

      }
    },
    actions: {
        getAllFilmsApi({ commit }){
            commit(FILMS_LOADING, true)
            getAll()
            .then(data => {
                commit(GET_ALL_FILMS, data)
                commit(FILMS_LOADING, false)
            })
            .catch(e => {
                console.log(e);
                commit(FILMS_LOADING, false)
            })
        },
        likedMovie({commit}, id){
          commit(LIKE_MOVIE, id)     
        }
    },

  })

  export default store;