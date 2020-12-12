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
      src="../assets/shopping-basket 1.png"
      >
      {{count}} 
      </v-img>
      </div> 
    <v-row style="margin-top:5px" justify="center">
      <v-col col = "1" align="left">
          <br><p>วันที่แจ้งซ่อม: {{ new Date() }}</p> 
          </v-col>
          <v-col col = "1" align="right" >
            <br><p> จำนวนครุภัณฑ์ทั้งหมด :</p>
          </v-col>
    </v-row> 
    <v-container>
      <p align="left">เบอร์โทรติดต่อผู้แจ้งซ่อม</p>
      <v-row style="margin-top:5px" justify="left">
      <v-card color="#ffff" class="box">
        <v-col
          cols="500"
          md="100"
        >
          <v-text-field
            v-model="phonenum"
            :counter="10"
            :rules="phonenumRules"
            label="Phone Number"
            required
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
        <v-col
      cols="1"
      sm="6"
      
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date (read only text field)"
            hint="YYYY-MM-DD format"
            persistent-hint
            append-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
   
        <!-- <v-col col="1" sm="6">
          <v-menu 
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
          <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Date (read only text field)"
                hint="MM/DD/YYYY format"
                persistent-hint
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
            </v-menu>
            </v-col> -->
      
        <v-col col="1" sm="6">
          <v-select
                  :items="['08:00-08:30', '08:30-09:00', '09:00-09:30', '09:30-10:00', '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00',
                          '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00']"
                  label="Time"
                  required
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
      ></v-textarea>
      </v-container>
      </v-row>
    </v-container>
    </v-card>
  </v-row>
  </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
      valid: true,
      phonenum: '',
      phonenumRules: [
        v => !!v || 'Phone Number is required',
        v => (v && v.length >= 10) || 'Name must be more than 10 characters',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      date: new Date().toISOString().substr(0, 10),
      menu: false,
    
  // data: vm => ({
  //     date: new Date().toISOString().substr(0, 10),
  //     dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
  //     menu2: false,
  //   }),

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

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, day, month] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [year, day, month] = date.split('/')
        return `${year}-${day.padStart(2, '0')}-${month.padStart(2, '0')}`
      },
    },

    DataReceipt : {
      repairDate : null,
      phone : null,
      informDate : null,
      timeRepair : null,
      acceptDate : null,
      discription : null,
    },

    createReceiptlist(event) {
      event.preventDefault()
      var bodyFormData = new FormData() ;
      bodyFormData.append('repair_date',this.DataReceipt.repairDate); 
      bodyFormData.append('phone',this.DataReceipt.phone);
      bodyFormData.append('inform_date',this.DataReceipt.informDate);
      bodyFormData.append('time_repair',this.DataReceipt.timeRepair);
      bodyFormData.append('accept_date',this.DataReceipt.acceptDate);
      bodyFormData.append('Description',this.DataReceipt.discription);

      axios ({
        method: 'post',
        url: 'https://rc-drom-backend.herokuapp.com/createReceiptlist',
        data: bodyFormData,
        headers: {'Content-Type':'multipart/form-data'},
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response){
          console.log(response)
        })
    }
  }),  
}
</script>

<style scoped>
.main {
}
div.transbox {
  margin: 10px;
  width: 830px;
  height: 950px;
  background-color: #EEF3FB;
  opacity: 0.8;
}

.box{
  margin: 1px;
  width: 250px;
  height: 45px;
}

</style>