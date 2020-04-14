<!--
# Clases en vue

Digamos que estamos trabajando con clases dinámicas estonces tenemos ue decirle a vue que tome esa clase para manejarla.

## ¿Cómo indicamos que la clase va ser manejada por vue?

usamos:  :class="'nameClass'"

## ¿Cómo indicamos que la clase va tener + de un valor?

Para eso debemos definir los valores dentro de un array

:class="['class1','class2']"



En el segundo párrafo estamos colocando un condicional diciendo que si es == false sea de color normal
pero si igual a true va cambiar a un color rojo

:class="{'color-danger':  fondoBoolean}"
-->


<template>
 <div>
    <div  :class="['paddingSmall', fondo]">
    <p> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt reprehenderit. Voluptate officia dolor quod, dicta distinctio qui ipsum, enim deserunt veritatis minima nisi commodi nulla, rerum tenetur blanditiis eaque?
    </p>
      <button v-on:click="fondo = 'color-danger'">Cambiar a Rojo</button>
      <button v-on:click="fondo = 'color-info'">Cambiar a Azul</button>
      <button v-on:click="fondo = 'color-warning'">Cambiar a Amarillo</button>
  
  </div>
  <div :class="{'color-danger':  fondoBoolean}">
    <p> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nesciunt reprehenderit. Voluptate officia dolor quod, dicta distinctio qui ipsum, enim deserunt veritatis minima nisi commodi nulla, rerum tenetur blanditiis eaque?
    </p>
    <button @click="fondoBoolean = !fondoBoolean">Cambiar color</button>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Bindclass',
  // props: {
  //   msg: String
  // }
  data: () => ({
    fondo: "",
    fondoBoolean: false
  }),


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-danger {
  color: red
}
.color-info {
  color: blue
}
.color-warning {
  color: yellowgreen
}
.paddingSmall {
  padding: 5px;
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
