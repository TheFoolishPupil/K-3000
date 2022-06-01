<script setup>
import { reactive, ref } from "vue";

const activeColor = ref("blue");
const colors = reactive({
  black: { hex: "#000000" },
  black_alt: { hex: "#424242" },
  red: { hex: "#FF0000" },
  red_alt: { hex: "#FF5959" },
  green: { hex: "#00a800" },
  green_alt: { hex: "#00df00" },
  yellow: { hex: "#f8e71c" },
  yellow_alt: { hex: "#fef047" },
  blue: { hex: "#0000ff" },
  blue_alt: { hex: "#4949ff" },
  magenta: { hex: "#ff00ff" },
  magenta_alt: { hex: "#ff5cff" },
  cyan: { hex: "#00dbff" },
  cyan_alt: { hex: "#69eaff" },
  white: { hex: "#ffffff" },
  white_alt: { hex: "#cfcfcf" },
});


</script>

<template>
  <div class="flex place-content-center">
    <div class="flex flex-row space-x-8">
      <TerminalWindow :colors="colors" @color-set="(color) => activeColor = color"/>
      <div class="pt-10">
        <Photoshop v-model="colors[activeColor]" />
      </div>
    </div>
  </div>
</template>

<style>
  
</style>