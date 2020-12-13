<template>
  <div align="center">
    <h1>แจ้งรายละเอียดที่ต้องการซ่อม...</h1>
    <h4>(กดปุ่มเลือกวัน-เวลาที่จะเข้าซ่อม แจ้งความเสียหายของครุภัณฑ์ และอัพเดตวิดีโอแจ้งซ่อม(ถ้ามี) แล้ว click ปุ่มยืนยัน)</h4>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-row style="margin-top:20px" justify="center">
    <v-card color="#EEF3FB" class="transbox">  
      <div class="cart" align="right">
      <v-img
      align ="right"
      contain
      max-height="100"
      max-width="50"
      src="../assets/shopbasket.png"
      >
      </v-img>
      </div> 
    <v-row style="margin-top:5px" justify="center">
      <v-col col = "1" align="left">
          <br><p>วันที่แจ้งซ่อม: {{ new Date() }}</p> 
          </v-col>
          <v-col col = "1" align="right" >
            <br><p> จำนวนครุภัณฑ์ทั้งหมด : {{ myBukectSize }} </p>
            {{ myBukect }}
          </v-col>
    </v-row> 
    <v-container>
      <p align="left">เบอร์โทรติดต่อผู้แจ้งซ่อม</p>
      <v-row style="margin-top:5px" justify="start">
      <v-card color="#ffff" class="box">
        <v-col
          cols="500"
          md="100"
        >
          <v-text-field
            
            :counter="10"
            :rules="phonenumRules"
            label="Phone Number"
            required
            v-model="DataReceipt.phone"
          ></v-text-field>
        </v-col>
      </v-card>
      </v-row>
      <v-row style="margin-top:50px">
          <v-col col = "1" align="left">
            <br><p>เลือกวันแจ้งซ่อม</p>
          </v-col>
          <v-col col = "1" align="left" >
            <br><p> เลือกเวลาแจ้งซ่อม</p>
          </v-col>
      </v-row>
      <v-row align="center">
        <v-col col="1" sm="6">
          <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="DataReceipt.date"
            no-title
            @input="menu1 = false"            
          ></v-date-picker>
        </v-menu>
            </v-col>
      
        <v-col col="1" sm="6">
          <v-select
                  :items="['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
                          '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']"
                  label="Time"
                  required
                  v-model="DataReceipt.timeRepair"
                ></v-select>
        </v-col>
      </v-row>
      <v-row style="margin-top:50px">
      <v-container fluid>
      <v-textarea
        name="input-7-1"
        background-color=#ffffff
        filled
        label="แจ้งรายละเอียดความเสียหาย"
        auto-grow
        v-model="DataReceipt.discription"
      ></v-textarea>
      </v-container>
      </v-row>
      <v-row justify="end" style="margin-top: 30px;">
    <v-btn
    x-large
    depressed
    color="primary"
    width=110
    @click="setItems()"
    >
      ยืนยัน
    </v-btn>
    <v-row justify="start" style="margin-top: 30px;">
    </v-row>
    <v-btn
    x-large
    depressed
    color="primary"
    width=110
    to="/Selectitem"
    >
      ยกเลิก
    </v-btn>
    </v-row>
    </v-container>
    </v-card>
  </v-row>
  </v-form>
  <v-overlay :value="loading">
    <v-progress-circular
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>
</div>
</template>

<script>
import axios from"axios"
export default {
  name: "Repairform",
  data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      DataReceipt : {
        user_id : null,
        phone : null,
        date : null,
        timeRepair : null,
        discription : null,
      },
      loading: false,
      valid: true,
      // phone: '',
      phonenumRules: [
        v => !!v || 'Phone Number is required',
        v => (v && v.length >= 10) || 'Name must be more than 10 characters',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      myBukect: [],
      myBukectSize: 0
    }),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    mounted(){
        this.myBukect = Array.from(this.$store.getters.getItems)
        this.myBukectSize = this.$store.getters.getItems.size
    },
    methods: {
     formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      async setItems(){
        this.DataReceipt.date = this.dateFormatted
        if (this.myBukectSize > 0) {
          this.loading = true
          var bodyFormDataDetail = new FormData() ;
          bodyFormDataDetail.append('user_id',localStorage.getItem('userid'));
          bodyFormDataDetail.append('phone',this.DataReceipt.phone);
          bodyFormDataDetail.append('repair_date',this.DataReceipt.date); 
          bodyFormDataDetail.append('time_repair',this.DataReceipt.timeRepair);
          bodyFormDataDetail.append('description',this.DataReceipt.discription);
          const resultRepairItem = await axios.post("https://rc-drom-backend.herokuapp.com/createRepairlist",bodyFormDataDetail)

            if (resultRepairItem !== null) {
              var repairID = resultRepairItem.data["1.Repair ID"]
              for (var i=0; i < this.myBukectSize; i++){
                var bodyFormData = new FormData();
                bodyFormData.append("repair_id", repairID);
                bodyFormData.append("item_id", this.myBukect[i]);
                const resultRepairLineItem = await axios.post("https://rc-drom-backend.herokuapp.com/createRepairlistitem",bodyFormData)
              }
              this.loading = false
              this.$store.commit("setDialogState", true)
              this.$store.commit("setDialogMsg", "แจ้งสำเร็จ")
              this.$router.push({name:"ChoosePage"})
            } else {
              this.loading = false
              this.$store.commit("setDialogState", true)
              this.$store.commit("setDialogMsg", "Error")
              this.$router.push({name:"ChoosePage"})
          }
        } else {
          this.loading = false
          this.$store.commit("setDialogState", true)
          this.$store.commit("setDialogMsg", "โปรดเลือกครุภัณฑ์ ที่ต้องแจ้งความเสียหาย")
          this.$router.push({name:"ChoosePage"})
        }
      }
    },
    
}
</script>

<style scoped>
.main {
}
div.transbox {
  margin: 10px;
  width: 830px;
  height: 900px;
  background-color: #EEF3FB;
  opacity: 0.8;
}
.box{
  margin: 1px;
  width: 250px;
  height: 45px;
}
</style>