<template>
  <v-footer 
    color="#EEF3FB"
    class="foot">
      <v-col cols="1" offset="0">
      <v-btn
      depressed
      color="primary"
      width = 114
      >
        ย้อนกลับ
      </v-btn>
      </v-col>

      <v-col cols="1" offset="10">
      <v-btn
      depressed
      color="primary"
      width = 110

      >
        ยืนยัน
      </v-btn>
      </v-col>
  </v-footer>
</template>


<script>
  export default {
    name: "Footer",
  }
    
</script>

<style scoped>
.foot{
  display: flex;
}
</style>