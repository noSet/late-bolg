<template>
    <article>
        <header>
            <h1>
                <router-link :to="{name: 'post', params:{ postId: card.id}}">{{card.title}}</router-link>
            </h1>
            <p>
                <time pubdate v-bind:datetime="card.time">{{card.time}}</time>
            </p>
        </header>
        <div class="post-main" v-html="card.content"></div>
        <footer>
            <ul v-if="card.tags.lenght != 0">
                <li v-for="tag in card.tags" v-bind:key="tag">
                    <router-link :to="{ name: 'tag', params: { tagName: tag }}">{{tag}}</router-link>
                </li>
            </ul>
            <router-link class="more" :to="{name: 'post', params:{ postId: card.id}}">READ MORE</router-link>
        </footer>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CardViewModel from "@/models/Card/CardViewModel";

@Component
export default class Card extends Vue {
  @Prop() private card!: CardViewModel;
}
</script>

<style lang="less" scoped>
article {
  overflow: hidden;
  margin-top: 30px;
  background-color: white;
  box-shadow: 1px 2px 3px #ddd;
  header {
    margin: 60px;
    line-height: 40px;
    h1 {
      margin-top: 5px;
      line-height: 1.3;
      font-size: 25.6px;
      font-size: size 1.6rem;
      font-weight: normal;
      a {
        color: #45474e;
        text-decoration: none;
        background: transparent;
      }
    }
    time {
      color: #757575;
      font-size: 0.87rem;
    }
  }
  .post-main {
    margin: 60px;
    font-size: 0.87rem;
    line-height: 1.6em;
    p {
      margin: 1em 0;
    }
  }
  footer {
    &::before,
    &::after {
      content: "";
      display: table;
    }

    &::after
    {
        clear: both;
    }

    padding: 30px 60px;
    border-top: 1px solid #ddd;
    background-color: #fafafa;
    a {
      padding: 4px 10px;
      border: 2px solid #df3120;
      border-radius: 100px;
      color: #df3120;
      background-color: #fff;
      font-size: 0.75rem;
      text-decoration: none;
      background: transparent;
      &:active,
      &:hover {
        outline: 0;
      }
    }
    ul {
      float: left;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline;
        a {
          &::before {
            content: "● ";
          }
          display: block;
        }
      }
    }
    .more {
      float: right;
      &:hover {
        background-color: #df3120;
        color: #fff;
      }
    }
  }
}
</style>
