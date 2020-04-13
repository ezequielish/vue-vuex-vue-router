<!--
# Métodos

## ¿Qué son los métodos en Vue?

Es la forma en la que manejamos los eventos dentro de vue es decir los eventos en JS son acciones que realiza el usuario.


## ¿Cuál es la directiva para manejar eventos en vue?

La directiva que vamos a usar sera **v-**


## ¿En donde colocamos nuestros métodos?

Los métodos los vamos a colocar dentro de la propiedad que sera un objeto **methods: {}*


## ¿Cómo enlazamos un elemento del DOM a nuestra lógica de JavaScript?

En este ejemplo vamos agregar una nueva fruta a un array dentro de data llamado frutas.

Para esto vamos a agregar un **input** enlzado a un dato tipo string que también va a estar dentro de data, cada vez que escribamos dentro del campo el valor de
la dato string va a cambiar gracias a vue para esto vamos a utilizar: **v-model** en el input

## ¿Cómo vamos agregar la nueva fruta al array de fruta?

Lo que vamos hacer es agregar un nuevo evento al método click en un botón de agregar frutas y haremos un push a ese array

**NOTA**: Para referinos a algún valor dentro de la instacia de Vue vamos a usar this es decir si queremos referirnos dentro de los métodos a algun valor de **data** usamos la palabra reservada *this*


## ¿Cómo podemos declarar un evento?

Lo podemos hacer de dos maneras en este caso de un botón podeos usar:  v-on:click || @click
-->


<template>
  <div class="hello">
    <div>
      <label>Agregar frutas</label>
      <input type="text" v-model="nuevaFruta" />
      <button @click="agregaFruta">Agregar</button>
    </div>
    <ul>
        <li v-for="fruta in frutas" :key="fruta">
          <span>{{fruta}}</span>
          <span v-if="fruta === 'melon'"> - fruta no permitida</span>
        </li> 
    </ul>  
   
  </div>
</template>

<script>
export default {
  name: 'Methods',
  // props: {
  //   msg: String
  // }
  data: () => ({
    frutas: ['banana','manzana','fresa','pera','uva'],
    nuevaFruta: ""
  }),

  methods: ({
    agregaFruta(){
      this.frutas.push(this.nuevaFruta)
      this.nuevaFruta = "" //limpiamos el valor de la nueva fruta luego que la agregamos al array
      
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
