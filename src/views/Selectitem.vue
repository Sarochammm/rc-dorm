<template>
  <v-container fluid class="main" id="RepairSelect">
    <!-- Head -->
    <div class="headText">
      <h2 align="center" justify="center">กรุณาเลือกครุภัณฑ์ที่ต้องการซ่อม</h2>
      <h5 align="center" justify="center">
        (Click ที่ครุภัณฑ์ เพื่อเลือกครุภัณฑ์ที่ต้องการซ่อม
        เมื่อต้องการยกเลิกการซ่อมให้กดที่รูปอีกครั้ง)
      </h5>
      <br />
      <hr />
    </div>
    <div class="cart" align="right">
        <h3>{{ Title }}</h3>
        <v-img
          align="right"
          contain
          max-height="200"
          max-width="100"
          src="../assets/shopbasket.png"
        >
          <h3>{{ count }}</h3>
        </v-img>
    <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      cart
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          cart
        </v-card-title>

        <v-card-text>
         <p>หลอดไฟ  : {{count1001}}</p>
         <p>ฝักบัว : {{count1002}}</p>
         <p>หน้าต่าง: {{count1003}}</p>
         <p>ผ้าม่าน: {{count1004}}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

    </div>
    <!-- <v-sheet v-for="item in preset" :key="item.item_id"> -->
    <div
      class="grid-container"
      align="right"
      v-for="item in preset"
      :key="item.item_id"
    >
      <div class="grid-item">
        <v-card
          class="rounded-t-xl"
          elevation="5"
          shaped
          color="#F5CDA3"
          width="250px"
          style="padding-left: 50px; padding-right: 50px"
        >
          <br /><v-card-content round>
            <v-img
              :src="require('../assets/image/cardImage/' + item.src + '.png')"
            >
            </v-img>
          </v-card-content>
          <v-card-text>
            {{ item.title }}
          </v-card-text>
          <v-card-action>
            <v-btn
              x-large
              color="success"
              @click="logItem(item.item_id,item.title)"
              >{{ item.title }}</v-btn
            >            
          </v-card-action>
      </v-card>
      </div>
    </div>
  <div >
    <v-col col="1" offset="10">
    <v-btn
    x-large
    depressed
    color="primary"
    width = 110
    >
      ยืนยัน
    </v-btn></v-col></div>
    <!-- </v-sheet> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    preset: [
      {
        item_id: "ITEM1001",
        src: "LIGHT_BULD",
        title: "หลอดไฟ",
      },
      {
        item_id: "ITEM1002",
        src: "SHOWER_HEAD",
        title: "ฝักบัว",
      },
      {
        item_id: "ITEM1003",
        src: "WINDOW",
        title: "หน้าต่าง",
      },
      {
        item_id: "ITEM1004",
        src: "CURTAINS",
        title: "ผ้าม่าน",
      },
      {
        item_id: "ITEM1005",
        src: "AIR_CON",
        title: "แอร์",
      },
      {
        item_id: "ITEM1006",
        src: "WATER_HEATER",
        title: "เครื่องทำน้ำอุ่น",
      },
    ],
    touch: [],
    Title:[],
    dialog: false,
    count: 0,
    count1001: 0,
  }),
  methods: {
    DataItemList : {
      item_id : null
    },
    
    logItem(id,title) {
      this.count = this.count + 1;
      console.log(id);
      this.touch.push(id);
      this.Title.push(title);
      console.log(this.touch);
      id.preventDefault()
      var bodyFormData = new FormData();
      bodyFormData.append('item_id',this.DataItemList.item_id);

      axios ({

      })
    
    },
  },
};
</script>

<style >
.grid-container {
  margin-top: 30px;
  margin-left: 100x;
  display: inline-grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto;
  padding-left: 50px;
}

.grid-item {
  justify-content: center;
  display: flex;
  padding-left: 210px;
  font-size: 36px;
  text-align: center;
}
</style>                 