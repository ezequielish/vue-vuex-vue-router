<!--
# For y If en Vue

Cuando estamos programando casi siempre tendramos que usar la sentencia for o el condicional if en vue es muy sencillo de usar
vamos a usar un ejemplo sencillo para demostrarlo.

## ¿Cómo usamos la senticia for ?

Lo primero que vamos hacer es crear un array dentro de data en nuestra instacia y luego en nuestro template vamos a usar:

v-for="itemArray in nameArray" también debemos especificar un key que debe ser un valor único lo mas recomendable es que sea el id, en este caso ya que es un ejemplo usaremos el mismo nombre del valor

podemos usar v-key:"value"  o :key="value"



## ¿Cómo usamos el condicional if ?

Digamos que tenemos la lista de frutas pero en caso de que la fruta sea un coco vamos a decir que no esta permitida esta fruta.

Para colocar un if debemos usar:  v-if="valorPasado  condicional valorAEvaluar"
-->


<template>
  <div class="hello">
    <div>
      <h1>Frutas</h1>
    </div>
    <ul>
        <li v-for="fruta in frutas" :key="fruta">
          <span>{{fruta}}</span>
          <span v-if="fruta === 'coco'"> - fruta no permitida</span>
        </li> 
    </ul>  
     <ul>
        <li v-for="numero in numeros" :key="numero">
          <span>{{numero}}</span>
          <span v-if="numero > 10"> - es mayor a 10</span>
        </li> 
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'Forif',
  // props: {
  //   msg: String
  // }
  data: () => ({
    frutas: ['banana','manzana','fresa','pera','uva', 'coco'],
    numeros: [1,5,6,8,7,15]
  }),
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
