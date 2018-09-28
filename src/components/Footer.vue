<template>
    <footer>
        <div>© 2018 cc3 </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
footer {
  margin: 0 auto;
  padding: 0 15px;
  width: 900px;
  height: 40px;
  line-height: 80px;
}
</style>
