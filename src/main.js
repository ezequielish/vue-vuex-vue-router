import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false
/**
 * - ¿Cuál tag usamos para agregar correctamente nuesto vue router?
 *  <router-view/>
 * 
 * -¿Qué etiqueta reemplaza al ancla de html?
 *  <router-link to="/">
 *     
 * importamos el router y lo agregamos a nuestra instancia vue
 * 
 * En nuestro componente App antes del <div id='app'> debemos agregar el siguiente tag para que nuestro router funcione correctamente
 * 
 * <div id="app">
        <router-link to="/">Home</router-link> 
    <router-view/>
  </div>

  arriba de del <router-view/> se suele crear el nav con para el app aunque no es obligatorio

 *
 * - Otra de las formas de navegar por el historial de nuestro navegador es usando js para hacer usamos:
 * r= this.$router.push('path')
 * r= this.$router.go(1) avanza una ruta en el historial, como darle a la flecha ->
 * r= this.$router.go(-1) retrocede una ruta en el historial, como darle a la flecha <-
 * 
 * - ¿Cómo le damos estilos a nuestro link activo?
 * 
 * Para hacerlo necesitamos estilar la clase: a.router-link-exact-active
 * 
 * 
 */

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
