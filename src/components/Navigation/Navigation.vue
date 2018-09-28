<template>
  <nav>
    <ul>
      <li v-for="NavItem in NavItems" v-bind:key="NavItem.url">
        <router-link :to="{name:'catalog', params:{catalogName: NavItem.url}}">
          {{NavItem.caption}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavigationService from "@/service/NavigationService.ts";
import NavigationViewModel from "@/models/Navigation/NavigationViewModel.ts";

@Component
export default class Navigation extends Vue {
  private NavItems: NavigationViewModel[];

  constructor () {
    super();
    this.NavItems = new NavigationService().GetNavigations();
  }
}
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-left: 20px;
  }
}
</style>
