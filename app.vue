<template>
  <main>
    <div class="flex w-full h-full">
      <div class="flex flex-col w-full">
        <div id="desktop" class="grow">
          <Stylizer class="p-16"/>
        </div>
        <MenuBar/>
      </div>
    </div>
  </main>
</template>

<style>
  main {
    height: 100vh;
    background-image: url("assets/kitty_stylizer_bg.jpg");
  }
  #desktop {
    box-shadow: 0px 0px 105px 32px rgba(0,0,0,0.34) inset;
    -webkit-box-shadow: 0px 0px 105px 32px rgba(0,0,0,0.34) inset;
    -moz-box-shadow: 0px 0px 105px 32px rgba(0,0,0,0.34) inset;
  }
</style>