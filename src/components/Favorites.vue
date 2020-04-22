<template>
    <section>
         <h1>FAVORITES</h1>
        <Loader v-show="this.loading_films" />
        <div id="container-movies" v-if="!error">
            <div v-for="(film,index) in this.favs" :key="index">
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
        <div id="error" v-else>
            <h4>{{error}}</h4>
        </div> 
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { FILMS_ERROR } from '../store/types/fimlsTypes'
import Loader from './Loader'
import MovieCard from './MovieCard'
export default {
  name: 'Favorites',
  components: {
    Loader,
    MovieCard
  },
  data: () =>({
      favs: []
  }),
  computed: {
    ...mapState(['films', 'loading_films', 'error']),
  },
  methods: {
    ...mapActions(['moviesILike','getAllFilmsApi', 'likedMovie']),
     handleText(text){
      const textLength = text.length;
      if(textLength > 250){
        const newText = text.slice(0,250).concat('...')
        return newText
      }
      return text
    },
    handleLikeMovie(id){
        this.likedMovie(`movie-${id}`)
    },
  },
  created(){
    if(!this.films.length){
       this.getAllFilmsApi()
       .then(() =>{
        this.moviesILike()
       .then(data => {
           this.favs = data
          })
       })
    } else{
      this.moviesILike()
       .then(data => {
           this.favs = data
        })  
    }
   
  },
  destroyed(){
    this.$store.commit(FILMS_ERROR, '')
  }

}
</script>

<style  scoped>
#container-movies{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 25px;

}
</style>