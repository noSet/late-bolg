<template>
  <div>
    <card v-for="card in cards" v-bind:key="card.id" v-bind:card="card"></card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/Card/Card.vue";
import CardViewModel from "@/models/Card/CardViewModel";
import CardServices from "@/service/Card/CardServices.ts";

@Component({
  components: {
  Card
  }
  })
export default class PostList extends Vue {
  @Prop() private catalogName!: string;
  private cards: CardViewModel[];

  constructor () {
    super();
    this.cards = new CardServices().GetCards();
  }
}
</script>
