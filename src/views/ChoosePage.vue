<template>
<v-container fluid class="main" id="ChoosePage">
    <div class="headText">
      <v-img 
      src=""
      ></v-img>
      <h1>ยินดีต้อนรับ</h1>
    </div>
    <div class="btn">
    
        <div  class="my-16">
          <v-row style="margin-top:20px"  justify="center">
            <v-btn
              to="/repairselect"
              class="ma-2"
              color="blue"
              x-large
              dark
            >
              แจ้งซ่อมครุภัณฑ์
            </v-btn>
            <div></div>
            <v-btn
              to="/"
              class="ma-2"
              x-large
              color="blue"
              dark
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


position: relative;
width: 1920px;
height: 1310px;

background: #FFFFFF;                                                                                                                                
}
.ma-2{
  height: 120px;
  font-family: 'Athiti', sans-serif;
  text-align: center;
  font-size: 30px;
  
}




</style>

