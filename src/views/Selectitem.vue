<template>
  <v-container fluid class="main" id="RepairSelect">
    <v-snackbar
      v-model="snackbar"
    >
      เพิ่มเข้ารายการเรียบร้อย
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
        <h3>{{ Array.from(Title) }}</h3>
        <v-img
          align="right"
          contain
          max-height="200"
          max-width="100"
          src="../assets/shopbasket.png"
        >
          <h3>{{ count }}</h3>
        </v-img>
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
          style="padding:50px;"
        >
          <v-img
            :src="require('../assets/image/cardImage/' + item.src + '.png')"
          >
          </v-img>
          <v-card-text>
            {{ item.title }}
          </v-card-text>
          <v-btn
            x-large
            color="success"
            @click="addItem(item.item_id,item.title)"
            >{{ item.title }}</v-btn
          >
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
    to="/repairform"
    >
      ยืนยัน
    </v-btn></v-col></div>
    <!-- </v-sheet> -->
        <!-- Dialog -->
  </v-container>
</template>

<script>
export default {
  name : "SelectItem",
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
    Title: new Set(),
    dialog: false,
    count: 0,
    count1001: 0,
    DataItemList : {
      item_id : null
    },
    snackbar:false
  }),
  methods: {
    async addItem(id,title) {
      this.$store.commit('addItems',id);
      this.count = this.$store.getters.getItems.size;
      this.Title.add(title);
      this.snackbar = true
    }
  }
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