<template>
    <header class="head">
        <h1 class="head-title">
            <router-link to="/">CC3</router-link>
        </h1>
        <Navigation />
    </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation/Navigation.vue";

@Component({
  components: {
  Navigation
  }
  })
export default class Header extends Vue {}
</script>

<style lang="less">
.head {
  text-align: center;
}
.head-title {
  font-weight: normal;
  font-size: 3.25rem;
  margin-top: 0px;
  margin-bottom: 3rem;
}
.head a {
  color: white;
  text-decoration: none;
  background: transparent;
}
</style>
