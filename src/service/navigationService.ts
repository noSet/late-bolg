import NavigationViewModel from "@/models/Navigation/NavigationViewModel";
export default class NavigationService {
  public GetNavigations (): NavigationViewModel[] {
    var arr: NavigationViewModel[] = [
      new NavigationViewModel("Net", "net"),
      new NavigationViewModel("Java", "java"),
      new NavigationViewModel("Eletron", "eletron")
    ];
    return arr;
  }
}
