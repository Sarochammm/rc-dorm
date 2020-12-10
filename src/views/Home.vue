<template>
  <v-container fluid class="main" id="home">
    <div class="background">
    <v-row>
      <v-col cols="2" offset="10">
        <v-img
          src="../assets/logo.png"
        />
      </v-col>
    </v-row>
    <v-row style="margin-top:20px" justify="center">
      <v-card color="#828282" class="transbox">
        <v-row style="margin-top:20px" justify="center" max-height="300">
          <p class="headText">Welcome</p>
        </v-row>
        <v-row style="margin-top:10px" justify="center">
          <v-card color="#F2F2F2" class="box">
            <v-text-field
                label="ROOM ID"
                solo
                :rules="rules"
                hide-details="auto">
            </v-text-field>
          </v-card>
        </v-row>
        <v-row style="margin-top:30px" justify="center">
          <v-card color="#F2F2F2" class="box">
            <v-text-field 
                label="PASSWORD"
                solo
                :rules="rules"
                hide-details="auto">
            </v-text-field>
          </v-card>
        </v-row>
        <v-row style="margin-top:20px" justify="center">
          <v-card-actions>
            <v-btn 
            justify="center"
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="loader = 'loading'"
            width = 250
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-row>

    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  data () {
      return {
        loader: null,
        loading: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {

}
div.background {
  background: url('../assets/rc.png') repeat;
  height: 100vh;
  width: flex;
}

div.transbox {
  margin: 80px;
  width: 640px;
  height: 420px;
  background-color: #ffffff;
  opacity: 0.8;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}

.logoImg {
  width:200px;
}

.box{
  width: 400px;
  height: 45px;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.headText{
  font-size: 50px;
  font-family: "PNB";
}
</style>
