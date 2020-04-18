<!--
# Ciclos de vida
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
       :handleImgLike="handleImgLike"
       />
    </div>
   </div>  
 </section>
</template>

<script>

// import { getAll } from '../api/movies';
import Loader from './Loader'
import MovieCard from './MovieCard'
import { mapState,mapActions } from 'vuex'



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
   handleImgLike(id){
 
    if(!localStorage.getItem(`movie-${id}`) || localStorage.getItem(`movie-${id}`) === null){
      return false
    } else{
      return true
    } 
    
  }

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
