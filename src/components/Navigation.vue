<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-for="NavItem in NavItems" v-bind:key="NavItem.url" :to="NavItem.url">{{NavItem.caption}}</router-link>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavigationService from "@/service/navigationService.ts";
import NavigationViewModel from "@/models/navigationViewModel.ts";

@Component
export default class Navigation extends Vue {
  private _services: NavigationService;
  private NavItems!: NavigationViewModel[];

  /**
   *
   */
  constructor () {
    super();
    this._services = new NavigationService();
    this.NavItems = this._services.GetNavigations();
  }
}
</script>

<style lang="less" scoped>
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
