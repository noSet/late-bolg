<template>
    <div class="markdown-editor-box">
        <link rel="stylesheet" href="/static/editor.md/css/editormd.min.css">
        <div :id="editorId"></div>
    </div>
</template>

<script>
import scriptjs from "scriptjs";
import { defaultConfig } from "../../config/editor.md";
export default {
  props: {
    editorId: {
      type: String,

      default: "markdown-editor"
    },
    onchange: {
      // 内容改变时回调，返回（html, markdown, text）
      type: Function
    },
    config: {
      // 编辑器配置
      type: Object
    },
    initData: {
      type: String
    },
    initDataDelay: {
      type: Number, // 延迟初始化数据时间，单位毫秒
      default: 0
    }
  },
  data: function () {
    return {
      editor: null,

      editorLoaded: false
    };
  },
  methods: {
    fetchScript: function (url) {
      return new Promise(resolve => {
        scriptjs(url, () => {
          resolve();
        });
      });
    },

    getConfig: function () {
      return { ...defaultConfig, ...this.config };
    },

    watch: function () {
      return this.editor.watch();
    },

    unwatch: function () {
      return this.editor.unwatch();
    },

    previewing: function () {
      return this.editor.previewing();
    },

    hideCloseButton: function () {
      let doc = document.getElementsByClassName(
        "fa fa-close editormd-preview-close-btn"
      )[0];

      doc.style.display = "none";
    },

    getHTML: function () {
      return this.editor.getHTML();
    },

    getMarkdown: function () {
      return this.editor.getMarkdown();
    },

    setMarkdown: function (markdown) {
      return this.editor.setMarkdown(markdown);
    },

    initEditor: function (markdown) {
      let config = this.getConfig();

      if (markdown) {
        config.markdown = markdown;
      }

      (async () => {
        await this.fetchScript("/static/editor.md/jquery.min.js");

        await this.fetchScript("/static/editor.md/editormd.min.js");

        // await this.fetchScript('/static/editor.md/editormd.js')

        this.$nextTick(() => {
          this.editor = window.editormd(this.editorId, config);

          this.editor.on("load", () => {
            setTimeout(() => {
              // hack bug: 一个页面多个编辑器只能初始化其中一个数据问题

              this.editorLoaded = true;

              this.initData && this.editor.setMarkdown(this.initData);
            }, this.initDataDelay);
          });

          this.onchange &&
            this.editor.on("change", () => {
              let html = this.editor.getPreviewedHTML();

              this.onchange({
                markdown: this.editor.getMarkdown(),

                html: html,

                text: window.$(html).text()
              });
            });
        });
      })();
    }
  },

  mounted: function () {
    let md = this.$store.state.testObj["markdown"]; // 这个是测试时，将md数据保存了一下，这里用来测试初始化md数据，实际情况是调接口获取保存在数据库的md数据用来初始化。

    this.initEditor(md);
  }
};
</script>
