import CardViewModel from "@/models/Card/CardViewModel";

export default class CardServices {
  public GetCards (): CardViewModel[] {
    var arr: CardViewModel[] = [
      new CardViewModel(
        "1",
        "Do! Premium 是我见过简单而不随便的待办事项应用",
        new Date("2019-01-01"),
        `待办事项类应用有很多，Any.Do、Todoist、Wunderlist 大家都很熟悉。它们有些追求功能强大，有些追求极致简约。但有人还是喜欢在笔记本上做待办事项，他们就是喜欢纸张和笔划过的感觉。
    如果你刚好是这类人，这款 Do! Premium 待办事项应用就很适合你了。`,
        ["技术"]
      ),
      new CardViewModel(
        "2",
        "Momento GIFs 让你的图片变得有趣",
        new Date("2019-01-01"),
        `看到有趣的画面随手连拍几张，已经成为很多人的日常。跟朋友分享照片时，很多人只会挑选拍得最好的一张，这是有点浪费的。你们有没有想过，把连拍的照片做成动图，会更有趣呢？
        所谓的动图，就是我们俗称的GIF动画，它是将多帧图片保存成一个图像文件，从而形成一个几秒的小动画。由于体积小，图像清晰，也不需要特殊的播放器支持，因此在互联网上很流行。`,
        ["技术"]
      )
    ];
    return arr;
  }
}
