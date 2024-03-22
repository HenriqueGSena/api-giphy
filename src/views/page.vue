<template>
  <div>
    <div class="container mx-auto">
      <appHeader />
    </div>
    <search />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import search from '@/components/search/search.vue';
import appHeader from '@/components/header/appHeader.vue';

@Options({
  components: {
    search,
    appHeader,
  },
})
export default class HomeView extends Vue {}
</script>
