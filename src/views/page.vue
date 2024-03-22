<template>
  <div>
    <div class="container mx-auto">
      <appHeader />
    </div>
    <searchGiphy />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import searchGiphy from '@/components/search/searchGiphy.vue';
import appHeader from '@/components/header/appHeader.vue';

@Options({
  components: {
    searchGiphy,
    appHeader,
  },
})
export default class HomeView extends Vue {}
</script>
