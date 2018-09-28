<template>
  <div id="app">
    <Header />
    <router-view class="body" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Component({
  components: {
  Header,
  Footer
  }
  })
export default class App extends Vue {}
</script>

<style lang="less">
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

html {
  font-family: "Helvetica Neue", "Hiragino Sans GB", "WenQuanYi Micro Hei",
    "Microsoft Yahei", sans-serif;
  color: #666;
  background: #eee;
  font-size: 0.87rem;
  line-height: 1.6em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

.body {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 900px;
}
</style>

<style lang="less" scoped>
header {
  text-align: center;
  padding: 6rem 2rem 4rem 2rem;
  background-color: #df3220;
  background-image: linear-gradient(
    120deg,
    rgb(208, 85, 76),
    rgb(199, 51, 74),
    rgb(213, 104, 77)
  );
}
</style>
