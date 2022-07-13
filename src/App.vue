<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import msalInstance from './msal.js';

export default {
  name: 'App',
  data() {
    return {
      msalRequest: {
        scopes: ["user.read"]
      }
    } 
  },
  components: {
    HelloWorld
  },
  async mounted() {
    console.log(msalInstance)

    // initial setup for msal
    msalInstance.handleRedirectPromise().then(()=>{
      // Check if user signed in 
      const account = msalInstance.getActiveAccount();
      if(!account){
        // redirect anonymous user to login page 
        msalInstance.loginRedirect();
      }
    }).catch(err=>{
      // TODO: Handle errors
      console.log(err);
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
