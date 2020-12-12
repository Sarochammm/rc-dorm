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
                v-model="user.userid"
                solo
                :rules="[rules.required]"
              >
            </v-text-field>
          </v-card>
        </v-row>
        <v-row style="margin-top:30px" justify="center">
          <v-card color="#F2F2F2" class="box">
            <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show2 ? 'text' : 'password'"
                v-model="user.password"
                solo
                name="input-10-2" 
                label="PASSWORD"
                @click:append="show2 = !show2">
            </v-text-field>
          </v-card>
        </v-row>
        <v-row style="margin-top:20px" justify="center">
          <v-card-actions>
            <v-btn 
            justify="center"
            class="ma-2"
            color="primary"
            @click="onClickLogin"
            width = 250
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-row>
    <!-- Dialog -->
    <v-dialog
      v-model="$store.getters.getDialogState"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          ALERT
        </v-card-title>

        <v-card-text>
       {{ $store.getters.getDialogMsg }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$store.commit('setDialogState', false)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- loading -->
    <v-overlay :value="$store.getters.getLoadingState">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data () {
      return {
        loader: null,
        show2: false,
        password: 'Password',
        user: {
          userid: "",
          password: ""
        },
        rules: {
          required: value => !!value || 'Required.',}
      }
    },
    methods: {
      onClickLogin() {
        this.$store.dispatch({type:"login", userid:this.user.userid, password:this.user.password})
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)

      this.loader = null;
    },
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.background {
  background: url("../assets/rc.png") repeat;
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
  width: 200px;
}

.box {
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
.headText {
  font-size: 50px;
  font-family: "PNB";
}
</style>
