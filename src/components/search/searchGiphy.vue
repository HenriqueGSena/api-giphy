<template>
  <div>
    <div class="mb-3 mt-lg-4 d-flex justify-content-center">
      <div class="input-group" style="width: 50%;">
        <input
            class="form-control text-center"
            type="text"
            v-model="query"
            placeholder="Search GIFs...">
        <button class="btn btn-success" @click="search">Search</button>
      </div>
    </div>

    <div class="container-md">
      <div class="row">
        <div class="col-md-4" v-for="gif in gifs" :key="gif.id">
          <img class="rounded mb-4" :src="gif.images.fixed_height.url" @click="zoomImage(gif.images.original.url)">
        </div>
      </div>
    </div>

    <div v-if="zoomedImageUrl !== ''" @click="closeZoom" class="zoomed-image-container">
      <img :src="zoomedImageUrl" alt="Imagem Ampliada" class="zoomed-image">
    </div>
  </div>
</template>

<script lang="ts" src="./searchGiphy.component.ts"></script>

<style scoped>
.zoomed-image-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
}
</style>
