<template>
<header>
  <v-col cols="2" offset="0" style="margin-left:20px">
    <v-row>
    <v-img
      src="../../assets/profileicon.png"
      class="profileiconImg"
      max-height= "65"
      max-width= "65"
    /> <p style="margin-top:10px; color: white; font-size: 20px;" >ผู้เช่าห้อง</p>
    </v-row>
  </v-col>

  <v-col cols="4" offset="6" >
  <v-tabs
    background-color="#3F4C90"
    dark
    rigth
  >
    <v-tab to="/choosepage"> 
      หน้าแรก
    </v-tab>
    <v-tab to="/selectitem">
      แจ้งซ่อมครุภัณฑ์
    </v-tab>
    <v-tab to="/status">
      ติดตามสถานะ
    </v-tab>
    <v-tab to="/">
      ออกจากระบบ
    </v-tab>
  </v-tabs>
  </v-col>
</header>
</template>

<script>
  export default {
  
  }
  // @Watch("$route", { immediate: true })
  // OnRouteChange(route: Route) 
  // {
  //   if (route.name == "login" || route.name == "signup") 
  //   {
  //     this.showHeader = false;
  //   } else {
  //     this.showHeader = true;
  //   }
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background-color: #3F4C90;
  height: 70px;
  display: flex;
}
.profileiconImg{

 display: flex;
}
</style>
