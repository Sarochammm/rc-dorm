<template>
<v-container fluid class="main" id="ChoosePage">

    <div class="headText" style="margin-top:100px">
      <v-col cols="2" offset="5">
          <v-row align="center" justify="center">
            <v-img
              max-height="250"
              max-width="225"
              contain
              src="../assets/Ellipse 14.png"
            >
            <br><br>
            <h1>ยินดีต้อนรับ</h1>
            </v-img>
            <h2>ผู้เช่าห้อง {{ RoomNumber }}</h2>
        </v-row>
      </v-col>
    </div>
    <div class="btn">
     <!-- <v-row style="margin-top:20px" justify="center"> -->
        <div  class="my-16">
          <v-row style="margin-top:20px"  justify="center">
            <v-btn
              class="ma-2"
              color="blue"
              x-large
              dark
              to="/selectitem"
            >
              แจ้งซ่อมครุภัณฑ์
            </v-btn>
            <div></div>
            <v-btn
              class="ma-2"
              color="blue"
              x-large
              dark
              to="/status"
            >
              ติดตามสถานะ
            </v-btn>
          </v-row>
        </div> 
     <!-- </v-row> -->
    </div>

</v-container>  
  
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@300&display=swap');
.headText{
  font-size: 25px;
  font-family: 'Athiti', sans-serif;
  text-align: center;
}
.main{
  /* หน้าหลัก */

}
.ma-2{
  height: 120px;
  font-family: 'Athiti', sans-serif;
  text-align: center;
  font-size: 30px;
  
}




</style>

