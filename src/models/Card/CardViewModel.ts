export default class CardViewModel {
  public id: string;
  public title: string;
  public time: Date;
  public content: string;
  public tags: string[];

  /**
   *
   */
  constructor (
    id: string,
    title: string,
    time: Date,
    content: string,
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.time = time;
    this.content = content;
    this.tags = tags;
  }
}
