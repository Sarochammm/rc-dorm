<template>
  <v-footer 
    color="#EEF3FB"
    padless>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        text
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
        'ย้อนกลับ',
        'ยืนยัน'
      ],
    }),
  }
</script>

<style scoped>
.main {
  display: flex;
  justify-content: flex-end;
}
.logoImg {
  width:200px;
}
</style>