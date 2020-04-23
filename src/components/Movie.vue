 <template>
    <section>
        <h1>Movie</h1>
        <Loader v-show="this.loading_films" />
        <div id="card" v-if="!error">

            <div>
                <h2>
                    {{this.movieSelected.title}}
                </h2>   
                <p>
                    {{this.movieSelected.description}}
                </p>
                <p style="display: flex; align-items: center">
                    {{storeMovieTen(this.movieSelected.rt_score ? this.movieSelected.rt_score: 0)}}
                    <span>/10</span>
                     <img src="../assets/star-24px.svg" />
                </p>
            </div>
            <div>
                <p> <strong>Director:</strong> </p>
                <p>{{this.movieSelected.director}}</p>
                <p> <strong>Producer:</strong> </p>
                <p>{{this.movieSelected.producer}}</p>
                <p> <strong>Year:</strong> </p>
                <p>{{this.movieSelected.release_date}}</p>
               
            </div>
        </div>
        <div id="error" v-else>
            <h4>{{error}}</h4>
        </div>
    </section>
</template>

<script>
import {  mapState } from 'vuex'
import Loader from './Loader' 
import { FILMS_ERROR } from '../store/types/fimlsTypes'
export default {
    name: 'Movie',
    components: {
        Loader,
    },
    methods: {
    storeMovieTen(value){
        return Number(value) / 10
    }
    },
    created(){
    if(!this.films.length){
       this.$store.dispatch('filmsStore/getAllFilmsApi')
       .then(() =>{           
         this.$store.getters['filmsStore/getMovieState'](this.$route.params.id)    
        })
    } else{
        this.$store.getters['filmsStore/getMovieState'](this.$route.params.id)  
    }   
    },
    computed: {
    ...mapState('filmsStore',['films','movieSelected','loading_films', 'error']),
  
    },
    destroyed(){
      this.$store.commit(`filmsStore/${FILMS_ERROR}`, '')
  }
    
}
</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #card{
        display: grid;
        grid-template-columns: 70% 30%;
        width: 80%;
    }
    #card div:first-child{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }
    #card div:first-child p{
        text-align: left;
    }
    #card div:last-child{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }

</style>