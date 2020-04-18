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