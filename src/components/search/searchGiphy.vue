<template>
  <div>
    <div class="mb-3 mt-lg-4 d-flex justify-content-center">
      <div class="input-group" style="width: 50%;">
        <input
            class="form-control text-center"
            type="text"
            placeholder="Search GIFs...">
        <button class="btn btn-success">Search</button>
      </div>
    </div>
    <div class="container-md">
      <div class="row">
        <div class="col-md-4" v-for="gif in gifs" :key="gif.id">
          <img class="rounded" :src="gif.images.fixed_height.url">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./searchGiphy.component.ts"></script>

<style scoped></style>
