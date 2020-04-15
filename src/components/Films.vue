<!--
# Ciclos de vida
-->


<template>
 <section>
   <h1>MOVIES</h1>
   <Loader v-show="loading" />
   <div id="container-movies">
     <div class="frame-movie" v-for="(film,index) in films" :key="index">
       <div class="frame-movie-head">
         <h2>{{film.title}}</h2>
       </div>
      <div class="frame-movie-body">
        <p id="description">{{handleText(film.description)}}</p>
      </div>
      
     <div class="frame-movie-body-footer">
        <div class="frame-movie-body-footer-info">
          <p>{{film.director}}</p>
          <p>{{film.producer}}</p>
        </div>
        <div>
          <p>{{film.release_date}}</p>
        </div>
     </div>

    </div>
   </div>  
 </section>
</template>

<script>

import { getAll } from '../api/movies';
import Loader from './Loader'

export default {
  name: 'Films',
  components: {
    Loader
  },
  // props: {
  //   msg: String
  // }
  data: () => ({
    films: [],
    loading: false
  }),
  methods: ({
   messageConsole(msg){
      console.log(msg);
  },

  handleText(text){
      const textLength = text.length;
      if(textLength > 250){
        const newText = text.slice(0,250).concat('...')
        return newText
      }
      return text
    }

  }),

  beforeCreate(){
    console.log('beforeCreate - Se ejecuta antes de que todo cargue');
      
  },

  created(){
    this.messageConsole('created - Se ejecuta al después de crear los métodos, obervadores y eventos, pero antes de montar el DOM')
     this.loading = true 
       getAll().then(data => {
       this.films = data   
       this.loading = false            
    })
    .catch(err => {
      console.log(err);
      
    }) 
  },

  beforeMount(){
    this.messageConsole('beforeMount - Se ejecuta antes de insertar el DOM')
  },

  mounted(){
    this.messageConsole('mounted - Se ejecuta al insertar el DOM')    
  },

  beforeUpdate(){
    this.messageConsole('beforeUpdate - Se ejecuta al detectar un cambio es decir antes que se haga el cambio, normalmente en la data || props')
  },

  update(){
    this.messageConsole('update - Se ejecuta al realizar un cambio normalmente en la data || props')
  },

  beforeDestroy(){
    this.messageConsole('beforeDestroy - Se ejecuta antes de desmotar el componente o destruir la instancia')
  },

  destroyed(){
    this.messageConsole('destroyed - Se ejecuta al destruir la instancia')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container-movies{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 25px;

}
.frame-movie{
    width: 260px;
    border: solid;
    min-width: 260px;
    height: 365px;
    display: grid;
    grid-template-rows: 20% 50% 30%;
    cursor: pointer;
  }
 #description{
    text-align: justify;
    margin: 10px;
  } 
  .frame-movie-body-footer-info{
    display: flex;
    justify-content: space-evenly;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
