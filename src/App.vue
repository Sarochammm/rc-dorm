<template>
  <v-app class="">
    <Header v-if="$store.getters.getIsLogin"/>
    <Content/>
    <Footer v-if="$store.getters.getIsLogin"/>
  </v-app>
</template>

<script>
import Content from './components/core/content';
import Header from "./components/core/header";
import Load from "./components/load";
// import Footer from "./components/core/footer";

export default {
  name: 'App',

  components: {
    Content,
    Header,
    Load
    // Footer
  },
  mounted () {
    this.$store.dispatch({ type: "restoreLogin" });
  }
};
</script>

<style scoped>
@font-face {
  font-family: "PNB";
  src: local("PostNoBillsJaffnaSemiBold600"),
   url(./assets/font/PostNoBillsJaffnaSemiBold600.ttf) format("truetype");
}
</style>
