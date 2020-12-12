<template>
    <div id="loading">
         <v-overlay :value="overlay">
            <v-progress-circular
            indeterminate
            size="64"
            ></v-progress-circular>
         </v-overlay>
 
    </div>
</template>


<script>
  export default {
    data: () => ({
      overlay: false,
    }),

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 3000)
      },
    },
  }
</script>

<style>

</style>