<!--
# Computed

## ¿Qué son los computed en Vue?

A diferencia de los métodos o propiedades calculadas las propiedades computadas se actualizan automáticamente una vez cambian sus dependencias. No aceptan ningún argunmento y deben devolver un solo valor,
también es bueno saber que se guardan en caché.

Es decir supongamos que vamos a sacar el total de cuantas frutas tenemos y vamos a crear un computed para eso cada vez que cambie o se agregue o se reste un fruta la función computadase va a ejecutar.


-->


<template>
  <div class="hello">
    <div>
      <label>Agregar frutas</label>
      <input type="text" v-model="nuevaFruta" @keyup.enter="agregaFruta"/>
      <button @click="agregaFruta">Agregar</button>
    </div>
    <ul>
        <li v-for="fruta in frutas" :key="fruta">
          <span>{{fruta}}</span>
          <span v-if="fruta === 'melon'"> - fruta no permitida</span>
        </li> 
    </ul>  
    <p>Total frutas: {{totalFrutas}}</p><!-- llamamos nuestro computed que nos retorna el total -->
   
  </div>
</template>

<script>
export default {
  name: 'Computed',
  // props: {
  //   msg: String
  // }
  data: () => ({
    frutas: ['banana','manzana','fresa','pera','uva'],
    nuevaFruta: "",
    total: 0
  }),

  methods: ({
    agregaFruta(){
      this.frutas.push(this.nuevaFruta)
      this.nuevaFruta = "" //limpiamos el valor de la nueva fruta luego que la agregamos al array
      
    }
  }),

  computed: ({
    totalFrutas(){
       return this.total + (this.frutas.length - 1)
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
