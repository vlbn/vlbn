<template>
  <MainNav />
  <div class="p-4"><router-view /></div>
</template>

<script>
import MainNav from "./components/navigation/MainNav";

export default {
  components: {
    MainNav,
  },
};
</script>
