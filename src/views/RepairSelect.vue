<template>
<v-container fluid class="main" id="RepairSelect">
    <div class="headText">
        <h2 align="center" justify="center">กรุณาเลือกครุภัณฑ์ที่ต้องการซ่อม</h2>
        <h8 align="center" justify="center">(Click ที่ครุภัณฑ์ เพื่อเลือกครุภัณฑ์ที่ต้องการซ่อม เมื่อต้องการยกเลิกการซ่อมให้กดที่รูปอีกครั้ง)</h8>
    </div>
    <div>
        <v-row>
            <v-col col="1" align="right" justify="center">
                <v-img 
                    contain
                    src="../assets/Ellipse 14.png"
                    max-width="200"
                    max-height="260"
                    >
                    <v-img
                        contain
                        max-height="150"
                        max-width="250"
                        src="../assets/light-bulb 1.png"
                    ></v-img>
                    
                </v-img>
            </v-col>
            <v-col col="2" align="center">
                <v-img
                    contain
                    max-height="150"
                    max-width="250"
                    src="../assets/shower-head 1.png"
                >
                </v-img>
            </v-col>
            <v-col col="3" align="left">
                <v-img
                    contain
                    max-height="150"
                    max-width="250"
                    src="../assets/window 2.png"
                >
                </v-img>
            </v-col>
        </v-row>
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

</style>