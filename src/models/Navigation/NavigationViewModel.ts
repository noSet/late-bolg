export default class NavigationViewModel {
  public caption: string;
  public url: string;

  constructor (caption: string, url: string) {
    this.caption = caption;
    this.url = url;
  }
}
