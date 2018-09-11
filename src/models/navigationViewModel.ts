export default class NavigationViewModel {
  private _caption: string;
  public get caption (): string {
    return this._caption;
  }
  public set caption (v: string) {
    this._caption = v;
  }

  private _url: string;
  public get url (): string {
    return this._url;
  }
  public set url (v: string) {
    this._url = v;
  }

  constructor (caption: string, url: string) {
    this._caption = caption;
    this._url = url;
  }
}
