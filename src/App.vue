<template>
  <div id="app">

    <vue-page-transition name="overlay-left">
      <router-view/>
    </vue-page-transition>

    <p class="me">Timothée DURAND @ DevChallenges.io</p>
  </div>
</template>
<script>
  export default {
    methods: {

    },
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap&family=Material+Icons');

body, html, root {
  font-size:62.5%;
}

:root {
  --overlay-bg: #F7DF94;
}

.overlay-left,  .overlay-right,  .overlay-top,  .overlay-bottom   {
  background: #F7DF94 !important;
}

#app {
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  padding: 30px 100px;
  font-size: 2rem;

}

button.random{
  font-size: 1.8rem;
  text-align: right;
  text-decoration: none;
  color: black;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  transition: all ease 200ms;
  padding: 6px 0;
  background-color: transparent;
  border:none;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
}

button.random > .material-icons {
  font-size: 2.2rem;
  margin-left: 1rem;
  transition: transform ease 400ms;
}

button.random:hover, button.random:focus {
  background-color: #F7DF94;
  outline: none;
}

button.random:hover .material-icons {
  transform: rotate(400deg);
}

.me {
  margin-top: 7rem;
  display: block;
  text-align: center;
  color: #A9A9A9;
  font-size: 1.4rem;
  width: 100%;
}





</style>
