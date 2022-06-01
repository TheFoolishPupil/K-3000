<script setup>
// import { chunk } from 'lodash';

const props = defineProps(['colors', 'activeColor'])

const output = computed(() => {
  const paired = Object.keys(props.colors).reduce((c, k, i) => {
    if (i % 2 == 0) {
      c.push(Object.fromEntries([[k, props.colors[k]]]));
    } else {
      c[c.length - 1][k] = props.colors[k];
    }
    return c;
  }, []);
  return paired;
})

</script>

<template>

  <div class="flex bg-stone-100 rounded shadow-xl">
    <div class="flex flex-col">
      <div class="flex flex-row bg-stone-300 p-1 rounded-t border-b border-gray-400 justify-center text-xs">
        ~/home/shot.codes
      </div>

      <div class="flex flex-col p-4 space-y-3">

        <!-- Color selector buttons -->
        <div class="flex flex-row gap-x-2">
          <button :style="{ 'background-color': colors.black.hex, 'color': colors.black.hex }" class="rounded text-gray-300 shadow" @click="$emit('colorSet', 'black')">black</button>
          <button :style="{ 'background-color': colors.red.hex, 'color': colors.red.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'red')">red</button>
          <button :style="{ 'background-color': colors.green.hex, 'color': colors.green.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'green')">green</button>
          <button :style="{ 'background-color': colors.yellow.hex, 'color': colors.yellow.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'yellow')">yellow</button>
          <button :style="{ 'background-color': colors.blue.hex, 'color': colors.blue.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'blue')">blue</button>
          <button :style="{ 'background-color': colors.magenta.hex, 'color': colors.magenta.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'magenta')">magenta</button>
          <button :style="{ 'background-color': colors.cyan.hex, 'color': colors.cyan.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'cyan')">cyan</button>
          <button :style="{ 'background-color': colors.white.hex, 'color': colors.white.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'white')">white</button>
        </div>
        <div class="flex flex-row gap-x-2">
          <button :style="{ 'background-color': colors.black_alt.hex, 'color': colors.black_alt.hex }" class="rounded text-gray-300 shadow" @click="$emit('colorSet', 'black_alt')">black</button>
          <button :style="{ 'background-color': colors.red_alt.hex, 'color': colors.red_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'red_alt')">red</button>
          <button :style="{ 'background-color': colors.green_alt.hex, 'color': colors.green_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'green_alt')">green</button>
          <button :style="{ 'background-color': colors.yellow_alt.hex, 'color': colors.yellow_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'yellow_alt')">yellow</button>
          <button :style="{ 'background-color': colors.blue_alt.hex, 'color': colors.blue_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'blue_alt')">blue</button>
          <button :style="{ 'background-color': colors.magenta_alt.hex, 'color': colors.magenta_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'magenta_alt')">magenta</button>
          <button :style="{ 'background-color': colors.cyan_alt.hex, 'color': colors.cyan_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'cyan_alt')">cyan</button>
          <button :style="{ 'background-color': colors.white_alt.hex, 'color': colors.white_alt.hex }" class="bg-gray-300 rounded shadow" @click="$emit('colorSet', 'white_alt')">white</button>
        </div>

        <!-- Top row, uncolored background -->
        <div class="flex flex-row gap-x-2">
          <div class="flex flex-col">
            <div class="flex flex-row gap-x-2">
              <div :style="{ 'color': colors.black.hex }">black</div>
              <div :style="{ 'color': colors.red.hex }">red</div>
              <div :style="{ 'color': colors.green.hex }">green</div>
              <div :style="{ 'color': colors.yellow.hex }">yellow</div>
              <div :style="{ 'color': colors.blue.hex }">blue</div>
              <div :style="{ 'color': colors.magenta.hex }">magenta</div>
              <div :style="{ 'color': colors.cyan.hex }">cyan</div>
              <div :style="{ 'color': colors.white.hex }">white</div>
            </div>
            <div class="flex flex-row gap-x-2">
              <div :style="{ 'color': colors.black_alt.hex }">black</div>
              <div :style="{ 'color': colors.red_alt.hex }">red</div>
              <div :style="{ 'color': colors.green_alt.hex }">green</div>
              <div :style="{ 'color': colors.yellow_alt.hex }">yellow</div>
              <div :style="{ 'color': colors.blue_alt.hex }">blue</div>
              <div :style="{ 'color': colors.magenta_alt.hex }">magenta</div>
              <div :style="{ 'color': colors.cyan_alt.hex }">cyan</div>
              <div :style="{ 'color': colors.white_alt.hex }">white</div>
            </div>
          </div>
        </div>

        <!-- Remaining rows, colored background -->
        <div v-for="color in output">
          <div class="flex flex-row gap-x-2" :style="{ 'background-color': Object.values(color)[0].hex }">
            <div :style="{ 'color': colors.black.hex }">black</div>
            <div :style="{ 'color': colors.red.hex }">red</div>
            <div :style="{ 'color': colors.green.hex }">green</div>
            <div :style="{ 'color': colors.yellow.hex }">yellow</div>
            <div :style="{ 'color': colors.blue.hex }">blue</div>
            <div :style="{ 'color': colors.magenta.hex }">magenta</div>
            <div :style="{ 'color': colors.cyan.hex }">cyan</div>
            <div :style="{ 'color': colors.white.hex }">white</div>
          </div>
          <div class="flex flex-row gap-x-2" :style="{ 'background-color': Object.values(color)[1].hex }">
            <div :style="{ 'color': colors.black_alt.hex }">black</div>
            <div :style="{ 'color': colors.red_alt.hex }">red</div>
            <div :style="{ 'color': colors.green_alt.hex }">green</div>
            <div :style="{ 'color': colors.yellow_alt.hex }">yellow</div>
            <div :style="{ 'color': colors.blue_alt.hex }">blue</div>
            <div :style="{ 'color': colors.magenta_alt.hex }">magenta</div>
            <div :style="{ 'color': colors.cyan_alt.hex }">cyan</div>
            <div :style="{ 'color': colors.white_alt.hex }">white</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>