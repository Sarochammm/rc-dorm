<template>
<v-container fluid class="main" id="status">
<div class="background" >
    <div style="margin-top:30px">
        <v-row class="sText" style="margin-top:30px" justify="center">
            <p class="mb-0">
                เลือกดูสถานะ
            </p>
        </v-row>
        <v-row justify="center">
            <p class="mb-3">
                ( click ดูสถานะที่ต้องการ )
            </p>
        </v-row>
    </div>


    <div style="margin-top:30px">

    <v-row justify="center">

    
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
    <v-col col="3" offset="1">
      <v-card rounded color="#EEF3FB" class="transbox">
          <v-col>
                <v-row style="margin-top:50px" justify="center">
                    <p class="headText">STATUS</p>
                </v-row>
                <v-row justify="center" > 

        <v-tabs vertical
                background-color="#EEF3FB" 
                color="#000000" 
                style="margin-top:20px">
            <v-item
                v-slot="{ active, toggle }">
                <div >   
                    <v-tab 
                    :input-value="active"
                    @click="toggle">
                    ยืนยันการแจ้งซ่อม
                    </v-tab>
                </div>
            </v-item>
            <v-item
                v-slot="{ active, toggle }">
                <div >   
                    <v-tab 
                    :input-value="active"
                    @click="toggle">
                    ช่างซ่อมได้รับการแจ้งซ่อม
                    </v-tab>
                </div>
            </v-item>
            <v-item
                v-slot="{ active, toggle }">
                <div >   
                    <v-tab 
                    :input-value="active"
                    @click="toggle">
                    อยู่ระหว่างการแจ้งซ่อม
                    </v-tab>
                </div>
            </v-item>
            <v-item
                v-slot="{ active, toggle }">
                <div >   
                    <v-tab 
                    :input-value="active"
                    @click="toggle">
                    ซ่อมเสร็จแล้ว
                    </v-tab>
                </div>
            </v-item>
        </v-tabs>
        </v-row></v-col>
      </v-card>
      </v-col>
    </v-item-group>

    <v-col col="3" offset="0">
        
    <v-card height="400px">
    <v-responsive
    class="overflow-y-auto"
    max-height="400">
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card>
            <template>
                <v-expansion-panels>
                    <v-expansion-panel
                        v-for="(item,i) in n"
                        :key="i"
                    >
                        <v-expansion-panel-header>
                             ใบแจ้งซ่อมที่ 
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
          </v-card>
        </v-window-item>
      </v-window>
    </v-responsive>
    </v-card>

    </v-col>

  </v-row>

  </div>

  <v-row></v-row>

  </div>

</v-container>

</template>


<script>
  export default {
    data: () => ({
      length: 4,
      window: 0,
      isActive: false,
      n: 20,
    }),
  }
</script>

<style scoped>
.main{
    width: flex;
    height: flex;
}
div.background{
    background: url('../assets/technician.png') no-repeat right;
    height: 75vh;
}
.transbox {
  width: 300px;
  height: 400px;
  
}
.headText{
    font-size: 30px;
}
.sText{
    font-size: 20px;
}
</style>