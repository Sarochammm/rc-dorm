<template>
  <v-app class="">
    <Header v-if="true"/>
    <Content/>
    <Footer v-if="true"/>
  </v-app>
</template>

<script>
import Content from './components/core/content';
import Header from "./components/core/header";
import Footer from "./components/core/footer";

export default {
  name: 'App',

  components: {
    Content,
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@font-face {
  font-family: "PNB";
  src: local("PostNoBillsJaffnaSemiBold600"),
   url(./assets/font/PostNoBillsJaffnaSemiBold600.ttf) format("truetype");
}
</style>
