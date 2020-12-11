<template>
<v-container fluid class="main" id="RepairSelect">
    <!-- Head -->
    <div class="headText">
        <h2 align="center" justify="center">กรุณาเลือกครุภัณฑ์ที่ต้องการซ่อม</h2>
        <h8 align="center" justify="center">(Click ที่ครุภัณฑ์ เพื่อเลือกครุภัณฑ์ที่ต้องการซ่อม เมื่อต้องการยกเลิกการซ่อมให้กดที่รูปอีกครั้ง)</h8>
    <br><hr>
    </div>
    <!-- cart -->
    <div class="cart" align="right">
        <v-img
        align ="right"
        contain
        max-height="200"
        max-width="100"
        src="../assets/shopbasket.png"
        >

         {{count}} 

        </v-img>
    </div>
    <!-- Body -->
    <div style="margin-top:50px" >
        <v-row>
            <v-col col="1" align="center">
                <!-- light bulb -->
                <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    >
                    <v-img
                            contain
                            max-height="300"
                            max-width="350"
                            src="../assets/light-bulb 1.png"
                    ></v-img>
                    <br>
                    <v-btn id="btn_lightbulb"
                        class="ma-2"
                        color="blue"
                        x-large
                        dark
                        @click="count=count+1 "
                        >
                        หลอดไฟ
                    </v-btn>
                </v-img>
            </v-col>
            <!-- Shower -->
            <v-col col="2" align="center">
                <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    >
                    <br><br>
                    <v-img
                            contain
                            max-height="250"
                            max-width="300"
                            src="../assets/shower.png"
                        >
                    </v-img>
                    <br>
                    <v-btn id="btn_shower"
                        x-large
                        class="ma-2"
                        color="blue"
                        dark
                        @click="addItem"
                        >
                        ฝักบัว
                    </v-btn>
                </v-img>
            </v-col>
            <!-- window -->
            <v-col col="3" align="center">
                <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    ><br><br>
                    <v-img
                        contain
                        max-height="250"
                        max-width="300"
                        src="../assets/window.png"
                    >
                    </v-img><br>
                    <v-btn id="btn_window"
                        x-large
                        class="ma-2"
                        color="blue"
                        dark
                        @click="addItem"
                        >
                       หน้าต่าง
                    </v-btn>
                
                </v-img>
            </v-col>
        </v-row>
        
        <!-- row 2 -->
        <br><br>
        <v-row>
            <!-- curtain -->
            <v-col col="1" align="center">
            <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    ><br><br>
                    <v-img
                        contain
                        max-height="250"
                        max-width="300"
                        src="../assets/curtains.png"
                    ></v-img><br>
                    <v-btn id="btn_curtain"
                        x-large
                        class="ma-2"
                        color="blue"
                        dark
                        @click="addItem"
                        >
                        ผ้าม่าน
                    </v-btn>
                </v-img>
            </v-col>
            <!-- air conditioner -->
            <v-col col="2" align="center">
                <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    ><br>
                    <v-img
                        contain
                        max-height="300"
                        max-width="350"
                        src="../assets/aircond.png"
                    ></v-img>
                    <v-btn id="btn_aircon"
                        x-large
                        class="ma-2"
                        color="blue"
                        dark
                        @click="count=count+1"
                        >
                        <h3>แอร์</h3>
                        
                    </v-btn>
                <h5>{{array}}</h5>
                </v-img>
            </v-col> 
            <!-- water heater -->
            <v-col col="3" align="center">
                <v-img 
                    contain
                    src="../assets/Ellipse 15.png"
                    max-width="400"
                    max-height="420"
                    ><br><br>
                    <v-img
                        x-large
                        contain
                        max-height="250"
                        max-width="300"
                        src="../assets/waterheater.png"
                    ></v-img><br>
                    <v-btn id="btn_waterheater"
                        @click="count=count+1"
                        x-large
                        class ="ma-2"
                        color="blue"
                        dark
                        >
                        เครื่องทำน้ำอุ่น
                    </v-btn>
                </v-img>
            </v-col> 
        </v-row>
    </div>
    <br><br>
    <hr>
    <!-- Submit -->
    <!-- <div align="center">
        <v-btn
            block
            x-large
            class ="ma-2"
            color="red"
            dark
        >
            <h8> ยืนยันการเลือกครุภัณฑ์ </h8>
        </v-btn>
    </div> -->
    

</v-container>
    
</template>

<script>
export default {
    name:"selectpage",
    data() {
        return {
            count:0,
            disabled : false
        }
    },
    methods: {
        addItem () {
            this.count = this.count+1
            
        }
    },


    } 

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@300&display=swap');
.main{
}
.headText{
  font-size: 25px;
  font-family: 'Athiti', sans-serif;
  text-align: center;
}
.ma-2{
  height: 500px;
  font-family: 'Athiti', sans-serif;
  text-align: center;
  font-size: 100px;
  
}
.cart{
    margin: 30px;

}

</style>