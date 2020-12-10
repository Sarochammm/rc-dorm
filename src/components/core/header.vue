<template>
<header>
  <v-col cols="1" offset="0">
    <v-img
      src="../../assets/profileicon.png"
      contain
      class="profileiconImg"
    />
  </v-col>
  <v-col cols="4" offset="7" >
  <v-tabs
    background-color="#3F4C90"
    dark
    rigth
  >
    <v-tab>
      หน้าแรก
    </v-tab>
    <v-tab>
      แจ้งซ่อมครุภัณฑ์
    </v-tab>
    <v-tab>
      ติดตามสถานะ
    </v-tab>
    <v-tab>
      ออกจากระบบ
    </v-tab>
  </v-tabs>
  </v-col>
</header>
</template>

<script>
  export default {
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background-color: #3F4C90;
  height: 70px;
  display: flex;
}
.profileiconImg{
  width: 60px;
}

</style>
