<template>
  <div id="StartPage">
    <input type="text" placeholder="Search..." v-model="item" v-on:keyup.enter="search">
    <button @click="search">Search</button>

    <div class="grid-container">
      <div v-for="product of products" :key="product.id" id="item" class="grid-item"> 
        <img v-bind:src="product.image" v-bind:alt="product.name" width="80px">
        <span>
          <h3>{{product.name}}</h3> 
        </span>
        <span>
          <h5>{{product.description}}</h5> 
        </span>
        <span>
          <h4>{{product.price}} €</h4> 
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'StartPage',
  data () {
    return {
      item: '',
      products: []
    }
  },
  methods: {
    async search(){
      console.log(this.item);

      try{
      const res = await axios.get('http://localhost:3000/items?name='+this.item);

      this.products = res.data;
    } catch(e){
      console.error(e);
    }
    }
  },
  async created(){ 
    try{
      const res = await axios.get('http://localhost:3000/items');

      this.products = res.data;
    } catch(e){
      console.error(e);
    }

  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
nav li:hover, nav li a:hover{
  font-weight: bold;
  font-size: 1.1em;
}
a {
  color: #35495E;
}
.grid-container {
  width: max-content;
  margin: 5% auto;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 7px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10%;
  text-align: center;
  
}
div#item img:hover{
  width: 300px;
}
</style>
