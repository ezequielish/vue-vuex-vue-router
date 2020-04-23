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


 /**
  * - ¿Cómo llamamos a un  state desde nuestro componete ?
  * 
  * Normalmente lo haciamos con un ...mapState(['state'])
  * Pero ahora debemos hacerlo de otro forma si lo vamos hacer con mapState usamos:
  * ...mapState('nameModule',['state1', 'state2'])
  * ...mapState('filmsStore',['films', 'error'])
  * 
  * En caso de que no usamos el state y sea directamente que lo llamemos usamos:
  * 
  * $store.nameModule.state.stateName
  * $store.filmsStore.state.films
  * 
  *  - ¿Cómo llamamos a las acciones de nuestro módulo desde nuestro componete ?
  * 
  * Normalmente lo haciamos con un ...mapActions(['action'])
  * 
  * Pero ahora debemos hacerlo de otro forma si lo vamos hacer con mapActions usamos:
  * ...mapActions('nameModule',['action1', 'action2']),
  * ...mapActions('filmsStore',['getAllFilmsApi', 'likedMovie']),
  * 
  * Ahora en el caso de realizar un action sin el mapActions lo hacemos de la siguiente manera:
  * 
  * this.$store.dispatch(`filmsStore/nameAction`, '')
  * 
  * - En caso de que lo estemos haciendo desde un TYPE
  * this.$store.dispatch(`filmsStore/${FILMS_ACTION}`, '')
  * 
  * ** De igual forma en caso de que sea un commit:
  * this.$store.commit(`filmsStore/nameMutation`, '')
  * this.$store.commit(`filmsStore/${FILMS_ERROR}`, '')
  * 
  * - En caso de que sea un getters el que quisieramos llamar deberiamos hacerlo de la siguiente forma:
  * 
  *  this.$store.getters['nameModule/getter']
  *  this.$store.getters['filmsStore/getMovieState']
  * 
  *  Si el getter recibe un parámetro
  * this.$store.getters['nameModule/getter'](value)
  *  this.$store.getters['filmsStore/getMovieState'](this.$route.params.id)      
  * 
  */
import Vue from 'vue'
import Vuex from 'vuex'
import filmsStore from './modules/filmsStore'
Vue.use(Vuex)
const store = new Vuex.Store({
    
    modules:{
      filmsStore
    },
    

  })

  export default store;