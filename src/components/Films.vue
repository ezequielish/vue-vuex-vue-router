<!--
- ¿Para que sirve - mapSate en vuex?
  mapState nos permite traer un estado especifico que necesitemos ejemplo si tenemos la data de las movies en un array y queremos traenos ese array usamos
  import { mapState } from 'vuex'
  ...mapState(['films'])

  Normalmente llamamos a mapState en la propiedad - computed
  
  Esto seria equivalente en redux a mapStateToProps


- ¿Para que sirve - mapActions en vuex?

  mapActions nos permite traer las funciones de actions es decir las acciones paa poderlas ejecutar desde nuestro componente, ej si tenemos el actions que hace el llamado al api
  y nos trae todas las movies gracias mapActions la podemos usar de forma sencilla es equivalente en redux a mapDispatchToProps

  Normalmente colocamos mapActions en nuestra propiedad computed ej:

  import { mapActions } from 'vuex'
  ...mapActions(['getAllFilmsApi']),


  - ¿Para que sirve - mapMutations en vuex?

  mapMutations nos permite llamar a una función que muta nuestro estado esto en el caso que no necesitemos llamar al actions si no directamente a una mutación
-->


<template>
 <section>
   <h1>MOVIES</h1>
   
   <Loader v-show="this.loading_films" />
   <div id="container-movies">
     <div v-for="(film,index) in this.films" :key="index">
       <MovieCard 
       :index="index" 
       :id="film.id"
       :title="film.title"
       :description="film.description"
       :director="film.director" 
       :producer="film.producer"
       :date="film.release_date"
       :handleText="handleText"
       :handleLikeMovie="handleLikeMovie"
       />
    </div>
   </div>  
 </section>
</template>

<script>

import Loader from './Loader'
import MovieCard from './MovieCard'
import { mapState, mapActions } from 'vuex'



export default {
  name: 'Films',
  components: {
    Loader,
    MovieCard
  },
  // props: {
  //   msg: String
  // }
  data: () => ({
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
    },

  ...mapActions(['getAllFilmsApi', 'likedMovie']),
  gatAllFilms(){
    if(!this.films.length){
      this.getAllFilmsApi()
    }
  },
  handleLikeMovie(id){
    this.likedMovie(`movie-${id}`)
  },
   

  }),
 computed: {
    ...mapState(['films', 'loading_films']),
  },

  created(){
    this.gatAllFilms()
    
  },
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
